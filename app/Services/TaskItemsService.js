import { ProxyState } from "../AppState.js";
import TaskItem from "../Models/TaskItem.js";

class TaskItemsService {
    deleteTaskItem(id) {
        ProxyState.taskItems = ProxyState.taskItems.filter(i => i.id != id)
        //saveState()

    }
    addTaskItem(newTaskItem) {
        ProxyState.taskItems.push(new TaskItem(newTaskItem.name, newTaskItem.taskItemId))
        //saveState()
        ProxyState.taskItems = ProxyState.taskItems
    }
}


export const taskItemsService = new TaskItemsService();

