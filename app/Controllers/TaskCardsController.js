import { ProxyState } from "../AppState.js";
import { taskCardsService } from "../Services/TaskCardsService.js";
import { loadState } from "../Utils/LocalStorage.js";

//Private
function _draw() {
    let taskCards = ProxyState.taskCards;
    let template = ''
    if (taskCards.length == 0) {
        template += '<div class="col text-center"><p><em>No Tasks</em><p></div>'
    }



    //check all task items in specific card

    taskCards.forEach(crd => {
        let cardsTaskItems = ProxyState.taskItems.filter(itm => itm.cardId === crd.id)

        crd.totalTasks = cardsTaskItems.length

        crd.tasksDone = cardsTaskItems.filter(itmoncard => itmoncard.checked === true).length


        template += crd.Template
    })
    document.getElementById("tasksHTML").innerHTML = template
}





//Public
export default class TaskCardsController {
    constructor() {

        ProxyState.on("taskCards", _draw);
        ProxyState.on("taskItems", _draw);

        loadState()
        _draw()
    }

    addTaskCard() {
        window.event.preventDefault()
        let form = window.event.target
        let rawTask = {
            name: form['title'].value,
            color: form['color'].value
        }

        taskCardsService.addTaskCard(rawTask)
        //@ts-ignore
        form.reset()

    }
    deleteTaskCard(id) {
        taskCardsService.deleteTaskCard(id)

    }


}
