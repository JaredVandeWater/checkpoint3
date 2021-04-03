import { generateId } from "../Utils/GenerateId.js"



export default class TaskItem {
    constructor(name, itemId, id = generateId()) {
        this.name = name
        this.itemId = itemId
        this.id = id

    }

    get Template() {
        return /*html*/`
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">${this.name}</label>
        </div>`
    }

}