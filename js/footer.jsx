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

			// Intern-Edit: Rahul Gautham Putcha
			// JS-Problem-5
			/* 	Check if the total to-do items is greater than none to display footer text else 
			 	hide footer content as per JS-Problem-5
			*/
			if(this.props.count+this.props.completedCount){
				
				var itemStringText = ((this.props.count>1)?"items":"item") + " left";
				return (
					<footer className="footer">
						<span className="todo-count">
							<strong>{this.props.count}</strong> {itemStringText}
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
			}else{
				return <footer className="footer"></footer>;
			}
		}
	});
})();
