import { ProxyState } from "../AppState.js";
import TaskCard from "../Models/TaskCard.js";
import { saveState } from "../Utils/LocalStorage.js";

class TaskCardsService {
    deleteTaskCard(id) {
        ProxyState.taskCards = ProxyState.taskCards.filter(c => c.id != id)
        saveState()
    }
    addTaskCard(newTaskCard) {
        ProxyState.taskCards = [...ProxyState.taskCards, new TaskCard(newTaskCard.name, newTaskCard.color)]
        saveState()

    }

}

export const taskCardsService = new TaskCardsService();

