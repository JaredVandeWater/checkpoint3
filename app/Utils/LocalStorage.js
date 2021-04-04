import { ProxyState } from "../AppState.js";
import TaskItem from "../Models/TaskItem.js";
import TaskCard from "../Models/TaskCard.js";


export function saveState() {
    localStorage.setItem('checkpoint3', JSON.stringify({
        taskItems: ProxyState.taskItems,
        taskCards: ProxyState.taskCards
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('checkpoint3'))
    if (data) {
        ProxyState.taskCards = data.taskCards.map(card => new TaskCard(card.title, card.color, card.id));
        ProxyState.taskItems = data.taskItems.map(itm => new TaskItem(itm.name, itm.cardId, itm.id, itm.checked));
    }
}