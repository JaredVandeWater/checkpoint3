import { ProxyState } from "../AppState.js";
import TaskCard from "../Models/TaskCard.js";

class TaskCardsService {
    deleteTaskCard(id) {
        ProxyState.taskCards = ProxyState.taskCards.filter(p => p.id != id)
        //saveState()
    }
    addTaskCard(newTaskCard) {
        ProxyState.taskCards = [...ProxyState.taskCards, new TaskCard(newTaskCard.name)]
        console.log(ProxyState.taskCards)
        //saveState()
    }
}

export const taskCardsService = new TaskCardsService();

