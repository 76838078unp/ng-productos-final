import Swal from 'sweetalert2';

export class BaseComponent {
    constructor() {}

    showAlertSuccess(message: string) {
        Swal.fire({
        title: 'Mensaje',
        text: message,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        });
    }

    showAlertError(message: string) {
        Swal.fire({
        title: 'Error',
        text: message,
        icon: 'error',
        confirmButtonText: 'Aceptar',
        });
    }

    questionAlert(title: string) {
        return Swal.fire({
        title: title,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        });
    }
}
