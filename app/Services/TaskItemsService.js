import { ProxyState } from "../AppState.js";
import TaskItem from "../Models/TaskItem.js";

class TaskItemsService {
    addTaskItem(newTaskItem) {
        ProxyState.taskItems = [...ProxyState.taskItems, new TaskItem(newTaskItem.name, 0, 0, 'red')]
        console.log(ProxyState.taskItems)
    }
}

export const taskItemsService = new TaskItemsService();

