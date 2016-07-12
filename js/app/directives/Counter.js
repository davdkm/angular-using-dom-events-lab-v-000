function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ ctrl.count }}</div>',
			'</div>'
		].join(''),
		require: 'counter',
		controller: function () {
			this.count = 0;
		},
		controllerAs: 'ctrl',
		link: function (scope, element, attrs, ctrl) {
			function incrementCounter() {
				ctrl.count++;

				scope.$apply();
			};

			element.on('click', incrementCounter);

			scope.$on('$destroy', function () {
				element.off();
			});
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);
