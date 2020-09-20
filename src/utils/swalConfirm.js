import Swal from 'sweetalert2';

export async function swalConfirm() {
	return await Swal.fire({
		title: 'Are you sure?',
		text: `This action can't be undone.`,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Yes, do it!',
		cancelButtonText: 'No, cancel it',
	});
}
