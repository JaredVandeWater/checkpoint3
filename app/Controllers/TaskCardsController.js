import { ProxyState } from "../AppState.js";
import { taskCardsService } from "../Services/TaskCardsService.js";


//Private
function _draw() {
    let taskCards = ProxyState.taskCards;
    let template = ''
    if (taskCards.length == 0) {
        template += '<div class="col text-center"><p><em>No Tasks</em><p></div>'
    }
    taskCards.forEach(v => template += v.Template)
    document.getElementById("tasksHTML").innerHTML = template

}

//Public
export default class TaskCardsController {
    constructor() {

        ProxyState.on("taskCards", _draw);
        ProxyState.on("taskItems", _draw);

        _draw()
    }

    addTaskCard() {
        window.event.preventDefault()
        let form = window.event.target
        let rawTask = { name: form['title'].value }

        taskCardsService.addTaskCard(rawTask)
        //@ts-ignore
        form.reset()
    }
    deleteTaskCard(id) {
        taskCardsService.deleteTaskCard(id)
    }


}
