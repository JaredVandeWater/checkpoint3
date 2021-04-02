import { ProxyState } from "../AppState.js";
import TaskCard from "../Models/TaskCard.js";

class TaskCardsService {
    addTaskCard(newTaskCard) {
        ProxyState.taskCards = [...ProxyState.taskCards, new TaskCard(newTaskCard.name, 0, 0, 'red')]
        console.log(ProxyState.taskCards)
    }
}

export const taskCardsService = new TaskCardsService();

