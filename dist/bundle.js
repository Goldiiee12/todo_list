/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Project.js":
/*!***************************!*\
  !*** ./src/js/Project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoItem */ "./src/js/TodoItem.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Project = /*#__PURE__*/function () {
  function Project(name) {
    var todos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    _classCallCheck(this, Project);
    this.name = name;
    // Ensure todos are instances of TodoItem
    this.todos = todos.map(function (todo) {
      return todo instanceof _TodoItem__WEBPACK_IMPORTED_MODULE_0__["default"] ? todo : new _TodoItem__WEBPACK_IMPORTED_MODULE_0__["default"](todo.title, todo.description, new Date(todo.dueDate), todo.priority);
    });
  }
  _createClass(Project, [{
    key: "addTodo",
    value: function addTodo(todo) {
      if (!this.todos.some(function (t) {
        return t.title === todo.title;
      })) {
        this.todos.push(todo);
      } else {
        console.warn('A todo with this title already exists in the project.');
      }
    }

    // Include a method to remove a todo
  }, {
    key: "removeTodo",
    value: function removeTodo(todoTitle) {
      this.todos = this.todos.filter(function (todo) {
        return todo.title !== todoTitle;
      });
    }

    // Add method to update a todo item within the project
  }, {
    key: "updateTodo",
    value: function updateTodo(updatedTodo) {
      var index = this.todos.findIndex(function (todo) {
        return todo.title === updatedTodo.title;
      });
      if (index !== -1) {
        this.todos[index].update(updatedTodo.title, updatedTodo.description, updatedTodo.dueDate, updatedTodo.priority);
      }
    }

    // Serialize project for storage
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        name: this.name,
        todos: this.todos.map(function (todo) {
          return todo.toObject();
        })
      };
    }

    // Other methods for project...
  }]);
  return Project;
}();


/***/ }),

/***/ "./src/js/TodoItem.js":
/*!****************************!*\
  !*** ./src/js/TodoItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoItem)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var TodoItem = /*#__PURE__*/function () {
  function TodoItem(title, description, dueDate, priority) {
    _classCallCheck(this, TodoItem);
    this.title = title;
    this.description = description;
    // Store dates as ISO strings
    this.dueDate = dueDate instanceof Date ? dueDate.toISOString() : dueDate;
    this.priority = priority;
  }
  _createClass(TodoItem, [{
    key: "update",
    value: function update(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      // Ensure updated date is stored as ISO string
      this.dueDate = dueDate instanceof Date ? dueDate.toISOString() : dueDate;
      this.priority = priority;
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        // dueDate should be a string
        priority: this.priority
      };
    }

    // Other methods for todo item...
  }]);
  return TodoItem;
}();


/***/ }),

/***/ "./src/js/dateUtils.js":
/*!*****************************!*\
  !*** ./src/js/dateUtils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate)
/* harmony export */ });
// src/js/dateUtils.js
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   initializeStorage: () => (/* binding */ initializeStorage),
/* harmony export */   saveProject: () => (/* binding */ saveProject),
/* harmony export */   saveTodo: () => (/* binding */ saveTodo),
/* harmony export */   updateProject: () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/js/Project.js");
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItem */ "./src/js/TodoItem.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// storage.js


function getProjects() {
  // Ensure that when you're parsing the projects, the date is correctly handled in the TodoItem's constructor.
  var projects = JSON.parse(localStorage.getItem('projects')) || [];
  return projects.map(function (project) {
    return new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](project.name, project.todos.map(function (todo) {
      return new _TodoItem__WEBPACK_IMPORTED_MODULE_1__["default"](todo.title, todo.description, new Date(todo.dueDate), todo.priority);
    }));
  });
}
function saveProjects(projects) {
  var serializedProjects = projects.map(function (project) {
    return {
      name: project.name,
      todos: project.todos.map(function (todo) {
        var dueDate = todo.dueDate instanceof Date ? todo.dueDate : new Date(todo.dueDate);
        return {
          title: todo.title,
          description: todo.description,
          dueDate: dueDate.toISOString(),
          priority: todo.priority,
          completed: todo.completed
        };
      })
    };
  });
  localStorage.setItem('projects', JSON.stringify(serializedProjects));
}
function saveProject(newProject) {
  var projects = getProjects();
  var projectIndex = projects.findIndex(function (project) {
    return project.name === newProject.name;
  });
  if (projectIndex === -1) {
    projects.push(newProject);
    saveProjects(projects);
  }
}
function updateProject(updatedProject) {
  var projects = getProjects();
  var projectIndex = projects.findIndex(function (project) {
    return project.name === updatedProject.name;
  });
  if (projectIndex !== -1) {
    projects[projectIndex] = updatedProject;
    saveProjects(projects);
  }
}
function deleteProject(projectName) {
  var projects = getProjects();
  projects = projects.filter(function (project) {
    return project.name !== projectName;
  });
  saveProjects(projects);
}
function saveTodo(projectName, newTodo) {
  var projects = getProjects();
  var projectIndex = projects.findIndex(function (p) {
    return p.name === projectName;
  });
  if (projectIndex !== -1) {
    projects[projectIndex].todos.push(_objectSpread(_objectSpread({}, newTodo), {}, {
      dueDate: newTodo.dueDate.toISOString() // Save as string
    }));
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}
function deleteTodo(projectName, todoTitle) {
  var projects = getProjects();
  var projectIndex = projects.findIndex(function (project) {
    return project.name === projectName;
  });
  if (projectIndex !== -1) {
    var todos = projects[projectIndex].todos;
    var updatedTodos = todos.filter(function (todo) {
      return todo.title !== todoTitle;
    });
    projects[projectIndex].todos = updatedTodos;
    saveProjects(projects);
  }
}
function initializeStorage() {
  var projects = getProjects();
  var hasDefaultProject = projects.some(function (project) {
    return project.name === 'Default Project';
  });

  // Only create the default project and todo if they don't already exist
  if (!hasDefaultProject) {
    var defaultTodo = new _TodoItem__WEBPACK_IMPORTED_MODULE_1__["default"]('Sample Todo', 'Description', new Date(), 'High');
    var defaultProject = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('Default Project');
    defaultProject.addTodo(defaultTodo);
    projects.push(defaultProject.toObject()); // Use the toObject method to ensure correct format
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Project */ "./src/js/Project.js");
/* harmony import */ var _js_TodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/TodoItem */ "./src/js/TodoItem.js");
/* harmony import */ var _js_dateUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/dateUtils */ "./src/js/dateUtils.js");
/* harmony import */ var _js_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/storage */ "./src/js/storage.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
// src/index.js






// Function to create and save a new project
function createNewProject(projectName) {
  var existingProjects = _js_storage__WEBPACK_IMPORTED_MODULE_3__.getProjects();
  if (existingProjects.some(function (p) {
    return p.name === projectName;
  })) {
    alert('Project with this name already exists.');
    return;
  }
  var newProject = new _js_Project__WEBPACK_IMPORTED_MODULE_0__["default"](projectName);
  _js_storage__WEBPACK_IMPORTED_MODULE_3__.saveProject(newProject);
  addProjectToSidebar(newProject);
  displayTodosForProject(newProject); // Display todos for the new project
}

// Function to add a project to the sidebar
var addProjectToSidebar = function addProjectToSidebar(project) {
  var projectListElement = document.getElementById('projects-list');
  var projectElement = projectListElement.querySelector("[data-project-name=\"".concat(project.name, "\"]"));
  if (!projectElement) {
    projectElement = document.createElement('div');
    projectElement.classList.add('project-name');
    projectElement.setAttribute('data-project-name', project.name);
    projectElement.textContent = project.name;
    projectElement.addEventListener('click', function () {
      return displayTodosForProject(project);
    });
    projectListElement.appendChild(projectElement);
  }
};

// Function to display todos for a selected project in the main content
var displayTodosForProject = function displayTodosForProject(project) {
  var todoContainer = document.getElementById('todo-container');
  todoContainer.innerHTML = ''; // Clear the previous todos

  var todoListElement = document.createElement('ul');
  todoListElement.classList.add('todo-list');
  project.todos.forEach(function (todo) {
    var todoElement = document.createElement('li');
    todoElement.textContent = "".concat(todo.title, " - Due: ").concat(_js_dateUtils__WEBPACK_IMPORTED_MODULE_2__.formatDate(new Date(todo.dueDate)), " - ").concat(todo.description, " - Priority: ").concat(todo.priority);
    todoListElement.appendChild(todoElement);
  });

  // Append the todo list to the main content's todo container
  todoContainer.appendChild(todoListElement);
};

// Function to render all projects in the sidebar
var renderProjectsInSidebar = function renderProjectsInSidebar() {
  var projects = _js_storage__WEBPACK_IMPORTED_MODULE_3__.getProjects();
  projects.forEach(addProjectToSidebar);
};
var addOrUpdateProjectInView = function addOrUpdateProjectInView(project) {
  var todoContainer = document.getElementById('todo-container');

  // Create a container for this project if it does not already exist
  var projectTodosContainer = todoContainer.querySelector("[data-project-name=\"".concat(project.name, "\"]"));

  // If the container doesn't exist, create it
  if (!projectTodosContainer) {
    projectTodosContainer = document.createElement('div');
    projectTodosContainer.classList.add('project-todos-container');
    projectTodosContainer.setAttribute('data-project-name', project.name);
    todoContainer.appendChild(projectTodosContainer);
  } else {
    // Clear the container if it already existed
    projectTodosContainer.innerHTML = '';
  }

  // Create and append the project name header
  var projectHeader = document.createElement('h2');
  projectHeader.textContent = project.name;
  projectTodosContainer.appendChild(projectHeader);

  // Create and append the todo list for this project
  var todoListElement = document.createElement('ul');
  todoListElement.classList.add('todo-list');
  project.todos.forEach(function (todo) {
    var todoElement = document.createElement('li');
    todoElement.textContent = "".concat(todo.title, " - Due: ").concat(_js_dateUtils__WEBPACK_IMPORTED_MODULE_2__.formatDate(new Date(todo.dueDate)), " - ").concat(todo.description, " - Priority: ").concat(todo.priority);
    todoListElement.appendChild(todoElement);
  });

  // Append the todo list to the project's container
  projectTodosContainer.appendChild(todoListElement);
};

// When a new project is added, re-render all projects
var renderAllProjects = function renderAllProjects() {
  var projects = _js_storage__WEBPACK_IMPORTED_MODULE_3__.getProjects();
  projects.forEach(addOrUpdateProjectInView);
};

// DOMContentLoaded event to initialize the view
document.addEventListener('DOMContentLoaded', function () {
  _js_storage__WEBPACK_IMPORTED_MODULE_3__.initializeStorage();
  renderProjectsInSidebar(); // Render all projects in the sidebar

  // Display todos for the first project by default if any
  var projects = _js_storage__WEBPACK_IMPORTED_MODULE_3__.getProjects();
  if (projects.length > 0) {
    displayTodosForProject(projects[0]);
  } else {
    // If there are no projects, create a default one
    var defaultProject = new _js_Project__WEBPACK_IMPORTED_MODULE_0__["default"]('Default Project');
    var sampleTodo = new _js_TodoItem__WEBPACK_IMPORTED_MODULE_1__["default"]('Sample Todo', 'Description', new Date(), 'High');
    defaultProject.addTodo(sampleTodo);
    _js_storage__WEBPACK_IMPORTED_MODULE_3__.saveProject(defaultProject);
    addProjectToSidebar(defaultProject);
    displayTodosForProject(defaultProject); // Display todos for the default project
  }
  var newProjectBtn = document.getElementById('new-project-btn');
  newProjectBtn.addEventListener('click', function () {
    var projectName = prompt('Enter the name of the new project:');
    if (projectName) {
      createNewProject(projectName);
      // This will update the sidebar and the displayed todos
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlqRSxtREFBTyxDQUFDLGlCQUFpQixDQUFDO0lBQ3JELElBQU1nRyxVQUFVLEdBQUcsSUFBSWpHLG9EQUFRLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxJQUFJWSxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztJQUNqRnNELGNBQWMsQ0FBQ2hELE9BQU8sQ0FBQytFLFVBQVUsQ0FBQztJQUNsQzdCLG9EQUFtQixDQUFDRixjQUFjLENBQUM7SUFDbkNNLG1CQUFtQixDQUFDTixjQUFjLENBQUM7SUFDbkNPLHNCQUFzQixDQUFDUCxjQUFjLENBQUMsQ0FBQyxDQUFDO0VBQzVDO0VBRUEsSUFBTWdDLGFBQWEsR0FBR3ZCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDO0VBQ2hFc0IsYUFBYSxDQUFDYixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUMxQyxJQUFNN0IsV0FBVyxHQUFHMkMsTUFBTSxDQUFDLG9DQUFvQyxDQUFDO0lBQ2hFLElBQUkzQyxXQUFXLEVBQUU7TUFDYmEsZ0JBQWdCLENBQUNiLFdBQVcsQ0FBQztNQUM3QjtJQUNKO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvanMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvanMvVG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2pzL2RhdGVVdGlscy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvanMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbWFpbi5jc3M/NzZiYiIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vVG9kb0l0ZW0nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRvZG9zID0gW10pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIC8vIEVuc3VyZSB0b2RvcyBhcmUgaW5zdGFuY2VzIG9mIFRvZG9JdGVtXG4gICAgdGhpcy50b2RvcyA9IHRvZG9zLm1hcCh0b2RvID0+IFxuICAgICAgdG9kbyBpbnN0YW5jZW9mIFRvZG9JdGVtID8gdG9kbyA6IG5ldyBUb2RvSXRlbSh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpLCB0b2RvLnByaW9yaXR5KVxuICAgICk7XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICBpZiAoIXRoaXMudG9kb3Muc29tZSh0ID0+IHQudGl0bGUgPT09IHRvZG8udGl0bGUpKSB7XG4gICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignQSB0b2RvIHdpdGggdGhpcyB0aXRsZSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgcHJvamVjdC4nKTtcbiAgICB9XG4gIH1cblxuICAvLyBJbmNsdWRlIGEgbWV0aG9kIHRvIHJlbW92ZSBhIHRvZG9cbiAgcmVtb3ZlVG9kbyh0b2RvVGl0bGUpIHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLnRpdGxlICE9PSB0b2RvVGl0bGUpO1xuICB9XG5cbiAgLy8gQWRkIG1ldGhvZCB0byB1cGRhdGUgYSB0b2RvIGl0ZW0gd2l0aGluIHRoZSBwcm9qZWN0XG4gIHVwZGF0ZVRvZG8odXBkYXRlZFRvZG8pIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudG9kb3MuZmluZEluZGV4KHRvZG8gPT4gdG9kby50aXRsZSA9PT0gdXBkYXRlZFRvZG8udGl0bGUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMudG9kb3NbaW5kZXhdLnVwZGF0ZSh1cGRhdGVkVG9kby50aXRsZSwgdXBkYXRlZFRvZG8uZGVzY3JpcHRpb24sIHVwZGF0ZWRUb2RvLmR1ZURhdGUsIHVwZGF0ZWRUb2RvLnByaW9yaXR5KTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXJpYWxpemUgcHJvamVjdCBmb3Igc3RvcmFnZVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdG9kb3M6IHRoaXMudG9kb3MubWFwKHRvZG8gPT4gdG9kby50b09iamVjdCgpKVxuICAgIH07XG4gIH1cblxuICAvLyBPdGhlciBtZXRob2RzIGZvciBwcm9qZWN0Li4uXG59XG4gICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgLy8gU3RvcmUgZGF0ZXMgYXMgSVNPIHN0cmluZ3NcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlIGluc3RhbmNlb2YgRGF0ZSA/IGR1ZURhdGUudG9JU09TdHJpbmcoKSA6IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgdXBkYXRlKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIC8vIEVuc3VyZSB1cGRhdGVkIGRhdGUgaXMgc3RvcmVkIGFzIElTTyBzdHJpbmdcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlIGluc3RhbmNlb2YgRGF0ZSA/IGR1ZURhdGUudG9JU09TdHJpbmcoKSA6IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlOiB0aGlzLmR1ZURhdGUsIC8vIGR1ZURhdGUgc2hvdWxkIGJlIGEgc3RyaW5nXG4gICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eVxuICAgIH07XG4gIH1cblxuICAvLyBPdGhlciBtZXRob2RzIGZvciB0b2RvIGl0ZW0uLi5cbn1cblxuICBcbiAgIiwiLy8gc3JjL2pzL2RhdGVVdGlscy5qc1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgfVxuICAiLCIvLyBzdG9yYWdlLmpzXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vVG9kb0l0ZW0nO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgLy8gRW5zdXJlIHRoYXQgd2hlbiB5b3UncmUgcGFyc2luZyB0aGUgcHJvamVjdHMsIHRoZSBkYXRlIGlzIGNvcnJlY3RseSBoYW5kbGVkIGluIHRoZSBUb2RvSXRlbSdzIGNvbnN0cnVjdG9yLlxuICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdO1xuICByZXR1cm4gcHJvamVjdHMubWFwKHByb2plY3QgPT4gbmV3IFByb2plY3QocHJvamVjdC5uYW1lLCBwcm9qZWN0LnRvZG9zLm1hcCh0b2RvID0+IG5ldyBUb2RvSXRlbSh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpLCB0b2RvLnByaW9yaXR5KSkpKTtcbn1cblxuXG5mdW5jdGlvbiBzYXZlUHJvamVjdHMocHJvamVjdHMpIHtcbiAgY29uc3Qgc2VyaWFsaXplZFByb2plY3RzID0gcHJvamVjdHMubWFwKHByb2plY3QgPT4gKHtcbiAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXG4gICAgdG9kb3M6IHByb2plY3QudG9kb3MubWFwKHRvZG8gPT4ge1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IHRvZG8uZHVlRGF0ZSBpbnN0YW5jZW9mIERhdGUgPyB0b2RvLmR1ZURhdGUgOiBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRvZG8udGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0b2RvLmRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHByaW9yaXR5OiB0b2RvLnByaW9yaXR5LFxuICAgICAgICBjb21wbGV0ZWQ6IHRvZG8uY29tcGxldGVkXG4gICAgICB9O1xuICAgIH0pXG4gIH0pKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShzZXJpYWxpemVkUHJvamVjdHMpKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVByb2plY3QobmV3UHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmV3UHJvamVjdC5uYW1lKTtcbiAgaWYgKHByb2plY3RJbmRleCA9PT0gLTEpIHtcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHNhdmVQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdCh1cGRhdGVkUHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gdXBkYXRlZFByb2plY3QubmFtZSk7XG4gIGlmIChwcm9qZWN0SW5kZXggIT09IC0xKSB7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XSA9IHVwZGF0ZWRQcm9qZWN0O1xuICAgIHNhdmVQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICBsZXQgcHJvamVjdHMgPSBnZXRQcm9qZWN0cygpO1xuICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QubmFtZSAhPT0gcHJvamVjdE5hbWUpO1xuICBzYXZlUHJvamVjdHMocHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBzYXZlVG9kbyhwcm9qZWN0TmFtZSwgbmV3VG9kbykge1xuICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChwID0+IHAubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICBpZiAocHJvamVjdEluZGV4ICE9PSAtMSkge1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3MucHVzaCh7XG4gICAgICAuLi5uZXdUb2RvLFxuICAgICAgZHVlRGF0ZTogbmV3VG9kby5kdWVEYXRlLnRvSVNPU3RyaW5nKCksIC8vIFNhdmUgYXMgc3RyaW5nXG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8ocHJvamVjdE5hbWUsIHRvZG9UaXRsZSkge1xuICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICBpZiAocHJvamVjdEluZGV4ICE9PSAtMSkge1xuICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvcztcbiAgICBjb25zdCB1cGRhdGVkVG9kb3MgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLnRpdGxlICE9PSB0b2RvVGl0bGUpO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3MgPSB1cGRhdGVkVG9kb3M7XG4gICAgc2F2ZVByb2plY3RzKHByb2plY3RzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplU3RvcmFnZSgpIHtcbiAgbGV0IHByb2plY3RzID0gZ2V0UHJvamVjdHMoKTtcbiAgbGV0IGhhc0RlZmF1bHRQcm9qZWN0ID0gcHJvamVjdHMuc29tZShwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gJ0RlZmF1bHQgUHJvamVjdCcpO1xuXG4gIC8vIE9ubHkgY3JlYXRlIHRoZSBkZWZhdWx0IHByb2plY3QgYW5kIHRvZG8gaWYgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XG4gIGlmICghaGFzRGVmYXVsdFByb2plY3QpIHtcbiAgICBjb25zdCBkZWZhdWx0VG9kbyA9IG5ldyBUb2RvSXRlbSgnU2FtcGxlIFRvZG8nLCAnRGVzY3JpcHRpb24nLCBuZXcgRGF0ZSgpLCAnSGlnaCcpO1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcpO1xuICAgIGRlZmF1bHRQcm9qZWN0LmFkZFRvZG8oZGVmYXVsdFRvZG8pO1xuICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QudG9PYmplY3QoKSk7IC8vIFVzZSB0aGUgdG9PYmplY3QgbWV0aG9kIHRvIGVuc3VyZSBjb3JyZWN0IGZvcm1hdFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cbn1cblxuXG5leHBvcnQgeyBnZXRQcm9qZWN0cywgc2F2ZVByb2plY3QsIHVwZGF0ZVByb2plY3QsIGRlbGV0ZVByb2plY3QsIHNhdmVUb2RvLCBkZWxldGVUb2RvLCBpbml0aWFsaXplU3RvcmFnZSB9O1xuXG4gIFxuXG4gIFxuICBcbiAgXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHNyYy9pbmRleC5qc1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9qcy9Qcm9qZWN0JztcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL2pzL1RvZG9JdGVtJztcbmltcG9ydCAqIGFzIGRhdGVVdGlscyBmcm9tICcuL2pzL2RhdGVVdGlscyc7XG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gJy4vanMvc3RvcmFnZSc7XG5pbXBvcnQgJy4vbWFpbi5jc3MnO1xuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYW5kIHNhdmUgYSBuZXcgcHJvamVjdFxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdHMgPSBzdG9yYWdlLmdldFByb2plY3RzKCk7XG4gICAgaWYgKGV4aXN0aW5nUHJvamVjdHMuc29tZShwID0+IHAubmFtZSA9PT0gcHJvamVjdE5hbWUpKSB7XG4gICAgICAgIGFsZXJ0KCdQcm9qZWN0IHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgc3RvcmFnZS5zYXZlUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICBhZGRQcm9qZWN0VG9TaWRlYmFyKG5ld1Byb2plY3QpO1xuICAgIGRpc3BsYXlUb2Rvc0ZvclByb2plY3QobmV3UHJvamVjdCk7IC8vIERpc3BsYXkgdG9kb3MgZm9yIHRoZSBuZXcgcHJvamVjdFxufVxuXG4vLyBGdW5jdGlvbiB0byBhZGQgYSBwcm9qZWN0IHRvIHRoZSBzaWRlYmFyXG5jb25zdCBhZGRQcm9qZWN0VG9TaWRlYmFyID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtbGlzdCcpO1xuICAgIGxldCBwcm9qZWN0RWxlbWVudCA9IHByb2plY3RMaXN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0LW5hbWU9XCIke3Byb2plY3QubmFtZX1cIl1gKTtcbiAgXG4gICAgaWYgKCFwcm9qZWN0RWxlbWVudCkge1xuICAgICAgICBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtbmFtZScsIHByb2plY3QubmFtZSk7XG4gICAgICAgIHByb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlUb2Rvc0ZvclByb2plY3QocHJvamVjdCkpO1xuICAgICAgICBwcm9qZWN0TGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICAgIH1cbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgdG9kb3MgZm9yIGEgc2VsZWN0ZWQgcHJvamVjdCBpbiB0aGUgbWFpbiBjb250ZW50XG5jb25zdCBkaXNwbGF5VG9kb3NGb3JQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tY29udGFpbmVyJyk7XG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgLy8gQ2xlYXIgdGhlIHByZXZpb3VzIHRvZG9zXG5cbiAgICBjb25zdCB0b2RvTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHRvZG9MaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QnKTtcblxuICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0b2RvRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RvZG8udGl0bGV9IC0gRHVlOiAke2RhdGVVdGlscy5mb3JtYXREYXRlKG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkpfSAtICR7dG9kby5kZXNjcmlwdGlvbn0gLSBQcmlvcml0eTogJHt0b2RvLnByaW9yaXR5fWA7XG4gICAgICAgIHRvZG9MaXN0RWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHRvZG8gbGlzdCB0byB0aGUgbWFpbiBjb250ZW50J3MgdG9kbyBjb250YWluZXJcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MaXN0RWxlbWVudCk7XG59O1xuXG4vLyBGdW5jdGlvbiB0byByZW5kZXIgYWxsIHByb2plY3RzIGluIHRoZSBzaWRlYmFyXG5jb25zdCByZW5kZXJQcm9qZWN0c0luU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKGFkZFByb2plY3RUb1NpZGViYXIpO1xufTtcblxuY29uc3QgYWRkT3JVcGRhdGVQcm9qZWN0SW5WaWV3ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tY29udGFpbmVyJyk7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIGZvciB0aGlzIHByb2plY3QgaWYgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdFxuICAgIGxldCBwcm9qZWN0VG9kb3NDb250YWluZXIgPSB0b2RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByb2plY3QtbmFtZT1cIiR7cHJvamVjdC5uYW1lfVwiXWApO1xuICAgIFxuICAgIC8vIElmIHRoZSBjb250YWluZXIgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0XG4gICAgaWYgKCFwcm9qZWN0VG9kb3NDb250YWluZXIpIHtcbiAgICAgICAgcHJvamVjdFRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RUb2Rvc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG9zLWNvbnRhaW5lcicpO1xuICAgICAgICBwcm9qZWN0VG9kb3NDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtbmFtZScsIHByb2plY3QubmFtZSk7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRvZG9zQ29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDbGVhciB0aGUgY29udGFpbmVyIGlmIGl0IGFscmVhZHkgZXhpc3RlZFxuICAgICAgICBwcm9qZWN0VG9kb3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHByb2plY3QgbmFtZSBoZWFkZXJcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIHByb2plY3RUb2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSB0b2RvIGxpc3QgZm9yIHRoaXMgcHJvamVjdFxuICAgIGNvbnN0IHRvZG9MaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdG9kb0xpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdCcpO1xuICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0b2RvRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RvZG8udGl0bGV9IC0gRHVlOiAke2RhdGVVdGlscy5mb3JtYXREYXRlKG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkpfSAtICR7dG9kby5kZXNjcmlwdGlvbn0gLSBQcmlvcml0eTogJHt0b2RvLnByaW9yaXR5fWA7XG4gICAgICAgIHRvZG9MaXN0RWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHRvZG8gbGlzdCB0byB0aGUgcHJvamVjdCdzIGNvbnRhaW5lclxuICAgIHByb2plY3RUb2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGlzdEVsZW1lbnQpO1xufTtcblxuLy8gV2hlbiBhIG5ldyBwcm9qZWN0IGlzIGFkZGVkLCByZS1yZW5kZXIgYWxsIHByb2plY3RzXG5jb25zdCByZW5kZXJBbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKGFkZE9yVXBkYXRlUHJvamVjdEluVmlldyk7XG59O1xuXG4vLyBET01Db250ZW50TG9hZGVkIGV2ZW50IHRvIGluaXRpYWxpemUgdGhlIHZpZXdcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgc3RvcmFnZS5pbml0aWFsaXplU3RvcmFnZSgpO1xuICAgIHJlbmRlclByb2plY3RzSW5TaWRlYmFyKCk7IC8vIFJlbmRlciBhbGwgcHJvamVjdHMgaW4gdGhlIHNpZGViYXJcblxuICAgIC8vIERpc3BsYXkgdG9kb3MgZm9yIHRoZSBmaXJzdCBwcm9qZWN0IGJ5IGRlZmF1bHQgaWYgYW55XG4gICAgY29uc3QgcHJvamVjdHMgPSBzdG9yYWdlLmdldFByb2plY3RzKCk7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGlzcGxheVRvZG9zRm9yUHJvamVjdChwcm9qZWN0c1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHByb2plY3RzLCBjcmVhdGUgYSBkZWZhdWx0IG9uZVxuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnKTtcbiAgICAgICAgY29uc3Qgc2FtcGxlVG9kbyA9IG5ldyBUb2RvSXRlbSgnU2FtcGxlIFRvZG8nLCAnRGVzY3JpcHRpb24nLCBuZXcgRGF0ZSgpLCAnSGlnaCcpO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5hZGRUb2RvKHNhbXBsZVRvZG8pO1xuICAgICAgICBzdG9yYWdlLnNhdmVQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiAgICAgICAgYWRkUHJvamVjdFRvU2lkZWJhcihkZWZhdWx0UHJvamVjdCk7XG4gICAgICAgIGRpc3BsYXlUb2Rvc0ZvclByb2plY3QoZGVmYXVsdFByb2plY3QpOyAvLyBEaXNwbGF5IHRvZG9zIGZvciB0aGUgZGVmYXVsdCBwcm9qZWN0XG4gICAgfVxuXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1idG4nKTtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb21wdCgnRW50ZXIgdGhlIG5hbWUgb2YgdGhlIG5ldyBwcm9qZWN0OicpO1xuICAgICAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHVwZGF0ZSB0aGUgc2lkZWJhciBhbmQgdGhlIGRpc3BsYXllZCB0b2Rvc1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiXSwibmFtZXMiOlsiVG9kb0l0ZW0iLCJQcm9qZWN0IiwibmFtZSIsInRvZG9zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwibWFwIiwidG9kbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJEYXRlIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhZGRUb2RvIiwic29tZSIsInQiLCJwdXNoIiwiY29uc29sZSIsIndhcm4iLCJyZW1vdmVUb2RvIiwidG9kb1RpdGxlIiwiZmlsdGVyIiwidXBkYXRlVG9kbyIsInVwZGF0ZWRUb2RvIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJ1cGRhdGUiLCJ0b09iamVjdCIsImRlZmF1bHQiLCJ0b0lTT1N0cmluZyIsImZvcm1hdERhdGUiLCJkYXRlIiwic3BsaXQiLCJnZXRQcm9qZWN0cyIsInByb2plY3RzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByb2plY3QiLCJzYXZlUHJvamVjdHMiLCJzZXJpYWxpemVkUHJvamVjdHMiLCJjb21wbGV0ZWQiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2F2ZVByb2plY3QiLCJuZXdQcm9qZWN0IiwicHJvamVjdEluZGV4IiwidXBkYXRlUHJvamVjdCIsInVwZGF0ZWRQcm9qZWN0IiwiZGVsZXRlUHJvamVjdCIsInByb2plY3ROYW1lIiwic2F2ZVRvZG8iLCJuZXdUb2RvIiwicCIsIl9vYmplY3RTcHJlYWQiLCJkZWxldGVUb2RvIiwidXBkYXRlZFRvZG9zIiwiaW5pdGlhbGl6ZVN0b3JhZ2UiLCJoYXNEZWZhdWx0UHJvamVjdCIsImRlZmF1bHRUb2RvIiwiZGVmYXVsdFByb2plY3QiLCJkYXRlVXRpbHMiLCJzdG9yYWdlIiwiY3JlYXRlTmV3UHJvamVjdCIsImV4aXN0aW5nUHJvamVjdHMiLCJhbGVydCIsImFkZFByb2plY3RUb1NpZGViYXIiLCJkaXNwbGF5VG9kb3NGb3JQcm9qZWN0IiwicHJvamVjdExpc3RFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByb2plY3RFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbmNhdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBlbmRDaGlsZCIsInRvZG9Db250YWluZXIiLCJpbm5lckhUTUwiLCJ0b2RvTGlzdEVsZW1lbnQiLCJmb3JFYWNoIiwidG9kb0VsZW1lbnQiLCJyZW5kZXJQcm9qZWN0c0luU2lkZWJhciIsImFkZE9yVXBkYXRlUHJvamVjdEluVmlldyIsInByb2plY3RUb2Rvc0NvbnRhaW5lciIsInByb2plY3RIZWFkZXIiLCJyZW5kZXJBbGxQcm9qZWN0cyIsInNhbXBsZVRvZG8iLCJuZXdQcm9qZWN0QnRuIiwicHJvbXB0Il0sInNvdXJjZVJvb3QiOiIifQ==