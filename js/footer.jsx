/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var app = app || {};

(function () {
	'use strict';

	app.TodoFooter = React.createClass({
		render: function () {
			var clearButton = null;

			if (this.props.completedCount > 0) {
				clearButton = (
					<button
						className="clear-completed"
						onClick={this.props.onClearCompleted}>
						Clear completed
					</button>
				);
			}

			var nowShowing = this.props.nowShowing;
			//Changes items to be plural or single depending on props count
			if (this.props.count < 2) {
				return (
					<footer className="footer">
						<span className="todo-count">
							<strong>{this.props.count}</strong> item left
						</span>
						<ul className="filters">
							<li>
								<a
									href="#/"
									className={classNames({selected: nowShowing === app.ALL_TODOS})}>
										All
								</a>
							</li>
							{' '}
							<li>
								<a
									href="#/active"
									className={classNames({selected: nowShowing === app.ACTIVE_TODOS})}>
										Active
								</a>
							</li>
							{' '}
							<li>
								<a
									href="#/completed"
									className={classNames({selected: nowShowing === app.COMPLETED_TODOS})}>
										Completed
								</a>
							</li>
						</ul>
						{clearButton}
					</footer>
				);
			} else {
				return (
					<footer className="footer">
						<span className="todo-count">
							<strong>{this.props.count}</strong> items left
						</span>
						<ul className="filters">
							<li>
								<a
									href="#/"
									className={classNames({selected: nowShowing === app.ALL_TODOS})}>
										All
								</a>
							</li>
							{' '}
							<li>
								<a
									href="#/active"
									className={classNames({selected: nowShowing === app.ACTIVE_TODOS})}>
										Active
								</a>
							</li>
							{' '}
							<li>
								<a
									href="#/completed"
									className={classNames({selected: nowShowing === app.COMPLETED_TODOS})}>
										Completed
								</a>
							</li>
						</ul>
						{clearButton}
					</footer>
				);
				
				
			}	
		}
	});
})();
