import { generateId } from "../Utils/GenerateId.js"



export default class TaskItem {
    constructor(name, taskItemId = generateId()) {
        this.name = name
        this.taskItemId = taskItemId

    }

    get Template() {
        return /*html*/`
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">${this.name}</label>
        </div>`
    }

}