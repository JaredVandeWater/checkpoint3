import { ProxyState } from "../AppState.js";
import TaskItem from "../Models/TaskItem.js";
import { taskCardsService } from '../Services/TaskCardsService.js'

class TaskItemsService {
    deleteTaskItem(id) {
        //let cardId = ProxyState.taskItems.find(i => i.id === id).cardId
        ProxyState.taskItems = ProxyState.taskItems.filter(i => i.id != id)
        //taskCardsService.updateTaskCounts(cardId)
        //saveState()

    }
    addTaskItem(newTaskItem) {
        ProxyState.taskItems.push(new TaskItem(newTaskItem.name, newTaskItem.cardId))
        //saveState()

        //taskCardsService.updateTaskCounts(newTaskItem.cardId)
        ProxyState.taskItems = ProxyState.taskItems


    }

}


export const taskItemsService = new TaskItemsService();

