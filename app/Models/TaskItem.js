import { generateId } from "../Utils/GenerateId.js"



export default class TaskItem {
    constructor(name, cardId, id = generateId()) {
        this.name = name
        this.cardId = cardId
        this.id = id
        this.checked = false
    }



    // ANCHOR update if task is complete based on checkbox click, count completed tasks in card draw method




    // if this checked, returns true, use a ternary that writes checked or nothing in the template
    get Template() {
        return /*html*/`
        <div class="form-group form-check">



            <input
                ${this.checked ? 'checked' : ''} 
                type="checkbox"
                class="form-check-input"
                onclick="app.taskItemsController.updateTaskDone(this.checked, '${this.id}')" 
                id="${this.id}"
            >
            <label
                class="form-check-label"
                for="exampleCheck1"
            >
                    ${this.name}
                    <i
                        role='button'
                        class="fas fa-times pl-2"
                        onclick="app.taskItemsController.deleteTaskItem('${this.id}')"
                    >
                    </i>
            </label>

        </div>`
    }

}