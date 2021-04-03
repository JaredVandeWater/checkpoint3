import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

let mytotal = 0

export default class TaskCard {
    constructor(title, color, id = generateId()) {
        this.title = title
        this.totalTasks = 0
        this.tasksDone = 0
        this.color = color
        this.id = id

    }


    get Template() {
        return /*html*/`
<div class="col-md-4 col-lg-3 col-sm-6 pt-3 py-1">
            <div class="card">

                <div class="card-body bg-primary">
                    <i role='button' class="fas fa-times d-flex justify-content-end"
                        onclick="app.taskCardsController.deleteTaskCard('${this.id}')"></i>
                    <h3 class="card-title">${this.title}
                    </h3>
                    <p><span>${this.tasksDone}</span> of <span>${this.totalTasks}</span> complete.</p>
                </div>
                <ul id="itemsHTML" class="list-group list-group-flush pl-3">
                    ${this.TaskItems}
                </ul>
                <div class="card-body">
                    <div class='d-flex justify-content-center'>
                        <form class='d-flex justify-content-center'
                            onsubmit="app.taskItemsController.addTaskItem('${this.id}',${this.totalTasks},${this.tasksDone})">
                            <div class="pr-3">
                                <input type="text" name="taskTitle" id="taskItem" class="form-control" minlength="3"
                                    maxlength="50" placeholder="New Item..." required aria-described by="helpId" required
                                    min="2" max="15">
                            </div>
                            <button type="submit" class="btn btn-primary">+</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `
    }


    get TaskItems() {


        let taskItems = ProxyState.taskItems.filter(i => i.itemId === this.id)
        let template = ''
        taskItems.forEach(i => template += i.Template)
        console.log(this.totalTasks);
        this.totalTasks = ProxyState.taskItems.length
        return template


    }

}
