"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDo = function ToDo(text) {
	var isDone = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	var isEdit = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
<<<<<<< HEAD
	var dueDate = arguments.length <= 3 || arguments[3] === undefined ? new Date() : arguments[3];
=======
>>>>>>> origin/master

	_classCallCheck(this, ToDo);

	this.text = text.trim();

	this.isDone = isDone;
	this.isEdit = isEdit;
<<<<<<< HEAD
	this.dueDate = dueDate;
=======
>>>>>>> origin/master
};

exports["default"] = ToDo;
module.exports = exports["default"];
//# sourceMappingURL=todo.js.map
