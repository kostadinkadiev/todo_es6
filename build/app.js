'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular2Angular2 = require('angular2/angular2');

var _todostore = require('./todostore');

var _todostore2 = _interopRequireDefault(_todostore);

var ENTER = 13;

var ToDoApp = (function () {
  function ToDoApp() {
    _classCallCheck(this, ToDoApp);

    this.toDoStore = new _todostore2['default']();

    $(".date").datetimepicker({
      format: 'L',
      //minDate: new Date(new Date() - 24*60*60*1000),
      locale: 'mk'
    });
  }

  _createClass(ToDoApp, [{
    key: 'typing',
    value: function typing($event, newdate) {
      if ($event.which === ENTER && $event.target.value.trim() && newdate.value.trim()) {
        this.addToDo($event.target, newdate);
      }
    }
  }, {
    key: 'addToDo',
    value: function addToDo(todo, newdate) {
      if (todo.value.trim() && newdate.value.trim()) {
        this.toDoStore.add(todo.value, newdate.value);
        todo.value = null;
        newdate.value = null;
      }
    }
  }, {
    key: 'editToDo',
    value: function editToDo(todo) {
      todo.isEdit = true;
    }
  }, {
    key: 'cancelEdit',
    value: function cancelEdit(todo) {
      todo.isEdit = false;
    }
  }, {
    key: 'saveEdit',
    value: function saveEdit(edittodo, id, todo) {
      var editedText = edittodo.value.trim();
      todo.isEdit = false;

      if (editedText) {
        todo.text = editedText;
        this.toDoStore.updateStore();
      } else {
        return this.toDoStore.remove(id);
      }
    }
  }, {
    key: 'getOverdueDays',
    value: function getOverdueDays(date) {

      var today = new Date();
      var timeDiff = today.getTime() - date.getTime();
      return Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
    }
  }]);

  return ToDoApp;
})();

ToDoApp.annotations = [new _angular2Angular2.Component({
  selector: 'todo-app'
}), new _angular2Angular2.View({
  templateUrl: 'todoapp.html',
  directives: [_angular2Angular2.NgIf, _angular2Angular2.NgFor]
})];

(0, _angular2Angular2.bootstrap)(ToDoApp);
//# sourceMappingURL=app.js.map
