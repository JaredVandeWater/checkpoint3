import { ProxyState } from "../AppState.js";
import { taskItemsService } from "../Services/TaskItemsService.js";


//Public
export default class TaskItemsController {


    addTaskItem(taskItemId) {
        window.event.preventDefault()
        let form = window.event.target
        let rawItem = {
            name: form['name'].value,
            taskItemId: taskItemId
        }

        taskItemsService.addTaskItem(rawItem)
        //@ts-ignore
        form.reset()
    }



    deleteIngredient(id) {
        taskItemsService.deleteTaskItem(id)
    }

}