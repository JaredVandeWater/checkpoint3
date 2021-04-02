import TaskCardsController from "./Controllers/TaskCardsController.js";
import TaskItemsController from "./Controllers/TaskItemsController.js";

class App {
  taskCardsController = new TaskCardsController();
  taskItemsController = new TaskItemsController();
}

window["app"] = new App();
