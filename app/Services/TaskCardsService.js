import { ProxyState } from "../AppState.js";
import TaskCard from "../Models/TaskCard.js";

class TaskCardsService {
    deleteTaskCard(id) {
        ProxyState.taskCards = ProxyState.taskCards.filter(c => c.id != id)
        //saveState()
    }
    addTaskCard(newTaskCard) {
        ProxyState.taskCards = [...ProxyState.taskCards, new TaskCard(newTaskCard.name,)]
        //saveState()
    }
    updateTaskCounts(id) {
        debugger
        ProxyState.taskCards.find(c => c.id === id).totalTasks = ProxyState.taskItems.filter(i => i.cardId === id).length
        //count task items based on id of the card
        ProxyState.taskCards = ProxyState.taskCards
    }
}

export const taskCardsService = new TaskCardsService();

