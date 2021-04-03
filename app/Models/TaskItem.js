import { generateId } from "../Utils/GenerateId.js"



export default class TaskItem {
    constructor(name, itemId, id = generateId()) {
        this.name = name
        this.itemId = itemId
        this.id = id
        this.total = 0

    }




    get Template() {
        return /*html*/`
        <div class="form-group form-check">

<input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">${this.name}
                            <i role='button' class="fas fa-times pl-2"
                                onclick="app.taskItemsController.deleteTaskItem('${this.id}')"></i></label>

        </div>`
    }

}