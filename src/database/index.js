import store from 'redux/index';

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
    };

    DBOpenRequest.onsuccess = function (event) {
      resolve(event.target.result);
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

export function getAllDataIDB() {
  const state = store.getState();
  const db = state.mainApp.idb;
  return new Promise(function (resolve, reject) {
    try {
      let allData = {},
        temp = [...db.objectStoreNames];
      const transaction = db.transaction(db.objectStoreNames);
      temp.forEach((objStrName, index) => {
        const objStr = transaction.objectStore(objStrName, 'read');
        const getReq = objStr.getAll();
        const timeOut = setTimeout(() => reject('Not Found'), 8000);
        getReq.onsuccess = function (e) {
          const res = e?.target?.result;
          if (!!res) {
            clearTimeout(timeOut);
            allData[objStrName] = res;
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

export function setDataIDB({ objStore, data }) {
  const state = store.getState();
  const db = state.mainApp.idb;
  return new Promise(function (resolve, reject) {
    try {
      const transaction = db.transaction(objStore, 'readwrite');
      const objectStore = transaction.objectStore(objStore);
      objectStore.add(data);
      resolve(true);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

export function editDataIDB({ fromObjStore, toObjStore, data }) {
  const state = store.getState();
  const db = state.mainApp.idb;
  console.log(fromObjStore, toObjStore, data);
  return new Promise(function (resolve, reject) {
    try {
      const transaction_deleting = db.transaction(fromObjStore, 'readwrite');
      const objectStore_deleting = transaction_deleting.objectStore(fromObjStore);
      objectStore_deleting.delete(data.id);
      const transaction_adding = db.transaction(toObjStore, 'readwrite');
      const objectStore_adding = transaction_adding.objectStore(toObjStore);
      objectStore_adding.add(data);
      resolve(true);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

export function deleteDataIDB({ objStore, id }) {
  const state = store.getState();
  const db = state.mainApp.idb;
  return new Promise(function (resolve, reject) {
    try {
      const transaction = db.transaction(objStore, 'readwrite');
      const objectStore = transaction.objectStore(objStore);
      objectStore.delete(id);
      resolve(true);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}
