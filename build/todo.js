"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDo = function ToDo(text) {
	var isDone = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	var isEdit = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	_classCallCheck(this, ToDo);

	this.text = text.trim();

	this.isDone = isDone;
	this.isEdit = isEdit;
};

exports["default"] = ToDo;
module.exports = exports["default"];
//# sourceMappingURL=todo.js.map
