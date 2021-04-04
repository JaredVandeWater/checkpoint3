import { ProxyState } from "../AppState.js";
import TaskCard from "../Models/TaskCard.js";
import { saveState } from "../Utils/LocalStorage.js";


class TaskCardsService {
    deleteTaskCard(id) {
        //@ts-ignore
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-info'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Delete Task Card?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Keep',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                ProxyState.taskCards = ProxyState.taskCards.filter(c => c.id != id)
                saveState()

            } else if (
                /* Read more about handling dismissals below */
                //@ts-ignore
                result.dismiss === Swal.DismissReason.cancel
            ) {

            }
        })


    }
    addTaskCard(newTaskCard) {
        ProxyState.taskCards = [...ProxyState.taskCards, new TaskCard(newTaskCard.name, newTaskCard.color)]
        saveState()

    }

}

export const taskCardsService = new TaskCardsService();

