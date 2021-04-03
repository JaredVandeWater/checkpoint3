import { ProxyState } from "../AppState.js";
import { taskItemsService } from "../Services/TaskItemsService.js";


//Public
export default class TaskItemsController {


    addTaskItem(cardId) {
        window.event.preventDefault()

        let form = window.event.target
        let rawItem = {
            name: form['taskTitle'].value,
            cardId: cardId
        }
        taskItemsService.addTaskItem(rawItem)
        //@ts-ignore
        form.reset()
    }

    deleteTaskItem(id) {
        taskItemsService.deleteTaskItem(id)
    }

    updateTaskDone(checked, id) {
        taskItemsService.updateTaskDone(checked, id)
    }
}