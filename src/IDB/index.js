export default function initiateIDB() {
	return new Promise(function (resolve, reject) {
		//check for support
		if (!('indexedDB' in window)) {
			reject("This browser doesn't support IndexedDB");
		}
		const DBOpenRequest = window.indexedDB.open('projectDB', 1);

		DBOpenRequest.onerror = function (event) {
			reject('Error loading database.');
		};

		DBOpenRequest.onsuccess = function (event) {
			resolve(DBOpenRequest.result);
		};

		DBOpenRequest.onupgradeneeded = function (event) {
			const db = event.target.result;
			db.onerror = function (event) {
				reject(event);
			};
			if (!db.objectStoreNames.contains('toDoList')) {
				db.createObjectStore('toDoList', { keyPath: 'id', autoIncrement: true });
			}
			if (!db.objectStoreNames.contains('inProgressList')) {
				db.createObjectStore('inProgressList', { keyPath: 'id', autoIncrement: true });
			}
			if (!db.objectStoreNames.contains('doneList')) {
				db.createObjectStore('doneList', { keyPath: 'id', autoIncrement: true });
			}
			resolve(DBOpenRequest.result);
		};
	});
}

export function getDataIDB(db, objStore, searchParam) {
	return new Promise(function (resolve, reject) {
		try {
			const transaction = db.transaction(objStore, 'read');
			const objectStore = transaction.objectStore(objStore);
			const getReq = objectStore.get(searchParam);
			const timeOut = setTimeout(function () {
				reject('Not Found');
			}, 8000);
			getReq.onsuccess = function (e) {
				const res = e?.target?.result;
				if (!!res) {
					clearTimeout(timeOut);
					resolve(res);
				} else {
					reject('Not Found');
				}
			};
		} catch (error) {
			console.error(error);
			reject(error);
		}
	});
}

export function getAllDataIDB(db) {
	return new Promise(function (resolve, reject) {
		try {
			let allData = [],
				temp = [...db.objectStoreNames];
			const transaction = db.transaction(db.objectStoreNames);

			temp.forEach((objStrName, index) => {
				const objStr = transaction.objectStore(objStrName, 'read');
				const getReq = objStr.getAll();
				const timeOut = setTimeout(function () {
					reject('Not Found');
				}, 8000);
				getReq.onsuccess = function (e) {
					const res = e?.target?.result;
					if (!!res) {
						clearTimeout(timeOut);
						allData.push(...res);
						if (index + 1 === temp.length) {
							resolve(allData);
						}
					} else {
						reject('Not Found');
					}
				};
			});
		} catch (error) {
			console.error(error);
			reject(error);
		}
	});
}

export function setDataIDB(db, objStore, data) {
	return new Promise(function (resolve, reject) {
		try {
			const transaction = db.transaction(objStore, 'write');
			const objectStore = transaction.objectStore(objStore);
			objectStore.add(data);
		} catch (error) {
			console.error(error);
			reject(error);
		}
	});
}
