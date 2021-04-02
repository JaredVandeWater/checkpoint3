import TaskCardsController from "./Controllers/TaskCardsController.js";
import TaskController from "./Controllers/TaskCardsController.js";

class App {
  taskCardsController = new TaskCardsController();
}

window["app"] = new App();
