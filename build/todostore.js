'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular2Angular2 = require('angular2/angular2');

var _todo = require('./todo');

var _todo2 = _interopRequireDefault(_todo);

var ToDoStore = (function () {
	function ToDoStore() {
		_classCallCheck(this, ToDoStore);

		this.toDos = new Map(store.get('es6-todos')) || new Map();
	}

	_createClass(ToDoStore, [{
		key: 'updateStore',
		value: function updateStore() {
			store.set('es6-todos', this.toDos);
		}
	}, {
		key: 'add',
		value: function add(text) {
			var todo = new _todo2['default'](text);
			this.toDos.set(uuid.v4(), todo);
			this.updateStore();
		}
	}, {
		key: 'remove',
		value: function remove(id) {
			this.toDos['delete'](id);
			this.updateStore();
		}
	}, {
		key: 'get',
		value: function get(isDone) {
			return [].concat(_toConsumableArray(this.toDos.values())).filter(function (v) {
				return v.isDone === isDone;
			});
		}
	}, {
		key: 'toggleAllTo',
		value: function toggleAllTo(isDone) {
			this.toDos.forEach(function (v) {
				return v.isDone = isDone;
			});
			this.updateStore();
		}
	}, {
		key: 'toggleDone',
		value: function toggleDone(id) {
			var todo = this.toDos.get(id);
			todo.isDone = !todo.isDone;
			this.updateStore();
		}
	}, {
		key: 'removeDone',
		value: function removeDone() {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {

				for (var _iterator = this.toDos.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _step$value = _slicedToArray(_step.value, 2);

					var key = _step$value[0];
					var value = _step$value[1];

					if (value.isDone) {
						this.toDos['delete'](key);
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator['return']) {
						_iterator['return']();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			this.updateStore();
		}
	}, {
		key: 'getNotDone',
		value: function getNotDone() {
			return this.get(false);
		}
	}, {
		key: 'getDone',
		value: function getDone() {
			return this.get(true);
		}
	}, {
		key: 'areAllDone',
		value: function areAllDone() {
			return this.toDos.size === this.getDone().length;
		}
	}]);

	return ToDoStore;
})();

ToDoStore.annotations = [new _angular2Angular2.Injectable()];

exports['default'] = ToDoStore;
module.exports = exports['default'];
//# sourceMappingURL=todostore.js.map
