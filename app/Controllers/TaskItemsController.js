import { ProxyState } from "../AppState.js";
import { taskCardsService } from "../Services/TaskItemsService.js";


//Private
function _draw() {
    let taskItems = ProxyState.taskItems;
    let template = ''
    if (taskItems.length == 0) {
        template += '<div class="col text-center"><p><em>No Tasks</em><p></div>'
    }
    taskItems.forEach(v => template += v.Template)
    document.getElementById("itemsHTML").innerHTML = template
}

//Public
export default class TaskItemsController {
    constructor() {
        ProxyState.on("taskItems", _draw);
        _draw()
    }

    addTaskItem() {
        window.event.preventDefault()
        let form = window.event.target
        let rawItem = { name: form['title'].value }

        taskItemsService.addTaskItem(rawItem)
        //@ts-ignore
        form.reset()
    }

}
