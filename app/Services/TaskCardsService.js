import { ProxyState } from "../AppState.js";
import TaskCard from "../Models/TaskCard.js";

class TaskCardsService {
    deleteTaskCard(id) {
        ProxyState.taskCards = ProxyState.taskCards.filter(c => c.id != id)
        //saveState()
    }
    addTaskCard(newTaskCard) {
        ProxyState.taskCards = [...ProxyState.taskCards, new TaskCard(newTaskCard.name, newTaskCard.color)]
        //saveState()
    }

    updateTasksDone(checked) {
        //we need to grab the card, and all the items on that card
        console.log(checked);


    }
}

export const taskCardsService = new TaskCardsService();

