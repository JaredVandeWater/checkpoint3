import { ProxyState } from "../AppState.js";
import TaskItem from "../Models/TaskItem.js";
import { saveState } from "../Utils/LocalStorage.js";

class TaskItemsService {
    deleteTaskItem(id) {
        ProxyState.taskItems = ProxyState.taskItems.filter(i => i.id != id)
        saveState()

    }
    addTaskItem(newTaskItem) {
        ProxyState.taskItems.push(new TaskItem(newTaskItem.name, newTaskItem.cardId))
        saveState()
        ProxyState.taskItems = ProxyState.taskItems
    }

    updateTaskDone(checked, id) {
        //we are trying to set our current task items this checked to the checked that is passed in. 
        ProxyState.taskItems.find(i => i.id === id).checked = checked
        saveState()
        ProxyState.taskItems = ProxyState.taskItems

    }

}


export const taskItemsService = new TaskItemsService();

