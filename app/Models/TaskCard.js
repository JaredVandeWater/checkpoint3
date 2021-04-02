import { ProxyState } from "../AppState"

export default class TaskCard {
    constructor(title, totalTasks, tasksLeft, color, cardId) {
        this.title = title
        this.totalTasks = totalTasks
        this.tasksLeft = tasksLeft
        this.color = color
        this.cardId = cardId
    }


    get Template() {

        return /*html*/`
        <div class="col-md-4 col-lg-3 col-sm-6 pt-3 py-1">
            <div class="card">

                <div class="card-body bg-primary">
                    <h3 class="card-title">${this.title}</h3>
                    <p><span>${this.tasksLeft}</span> of <span>${this.totalTasks}</span> complete.</p>
                </div>
                <ul id="itemsHTML" class="list-group list-group-flush pl-3">
                    ${this.TaskItems}
                </ul>
                <div class="card-body">
                    <div class='d-flex justify-content-center'>
                        <form class='d-flex justify-content-center' onsubmit="app.taskItemsController.addTaskItem()">
                            <div class="pr-3">
                                <input type="text" name="task title" id="taskItem" class="form-control" minlength="3"
                                    maxlength="50" placeholder="New Item..." required aria-describedby="helpId" required
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
        let taskItems = ProxyState.taskItems.filter(i => i.taskItemId === this.cardId)
        let template = ''
        taskItems.forEach(i => template += i.Template)
        return template

    }

}
