import { ProxyState } from "../AppState.js";
import { taskItemsService } from "../Services/TaskItemsService.js";


//Public
export default class TaskItemsController {


    addTaskItem(taskItemId) {
        window.event.preventDefault()

        let form = window.event.target
        let rawItem = {
            name: form['taskTitle'].value,
            taskItemId: taskItemId
        }
        console.log(taskItemId);
        taskItemsService.addTaskItem(rawItem)
        //@ts-ignore
        form.reset()
    }



    deleteTaskItem(id) {
        taskItemsService.deleteTaskItem(id)
    }

}