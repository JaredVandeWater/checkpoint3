import { generateId } from "../Utils/GenerateId.js"



export default class TaskItem {
    constructor(name, cardId, id = generateId()) {
        this.name = name
        this.cardId = cardId
        this.id = id
        this.checked = false
    }




    get Template() {
        return /*html*/`
        <div class="form-group form-check">

// ANCHOR update if task is complete based on checkbox click, count completed tasks in card draw method


<input type="checkbox" class="form-check-input" onclick="updateTasksDone()" id="${this.id}">
                        <label class="form-check-label" for="exampleCheck1">${this.name}
                            <i role='button' class="fas fa-times pl-2"
                                onclick="app.taskItemsController.deleteTaskItem('${this.id}')"></i></label>

        </div>`
    }

}