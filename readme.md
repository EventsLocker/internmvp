# EventHub Intern MVP

Here we have a simple ToDo app, but a few things are broken or not quite right. Feel free to pick and choose which problems to complete or solve all of them if you can. This shouldn't take  longer than 2 hours. If it does, just turn in what you have at the 2 hour mark. The problems are listed in no particular order. Good luck!

## CSS Problems
1. When you hover over a todo, there is a red **X** to the right of the item. Change this **X** to be white with a gray circle around it.
2. Change the main content (i.e., the entire section containing the input, list, and filters) to legal-pad yellow (#FEF3C7). 
3. Change the placeholder color in the "What needs to be done?" input to legal-pad blue (#009DD6).

## JavaScript Problems
1. Double-clicking a todo should allow you to edit it. Add an event to enable this behavior.
2. Clicking the **Clear Completed** button, should remove all checked-off todos. Implement this behavior by finishing the `clearCompleted` function in todoModel.js. 
3. Hide the row containing the filters, item count, and clear completed button until there is at least one todo.
4. When **Active** is clicked, only non-checked todos should show. When **Completed** is clicked, only checked-off todos should show. Fix these filters.
5. Change **items** in the items left counter to correctly reflect whether the number of active todos is plural or singular (e.g., 6 items, 1 item).

## Running

The app is built with [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) and compiled at runtime for a lighter and more fun code reading experience. As stated in the link, JSX is not mandatory.

To run the app, spin up an HTTP server (e.g. `python -m SimpleHTTPServer`) and visit http://localhost/.../myexample/.

Rahul Gautham Putcha Intern Note: To Run this application
$ python -m http.server {port}
# Then visit browser at http://localhost:{port}

*This sample application was originally written by the developers at [ToDoMVC](https://todomvc.com/). This is their [react example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react). The following are notes from their developers. Feel free to read for fun or to help you along the way, but otherwise, the rest of this can be ignored.*


## From the Devs @ ToDoMVC
> React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes.

> _[React - facebook.github.io/react](http://facebook.github.io/react)_


## Learning React

The [React getting started documentation](http://facebook.github.io/react/docs/getting-started.html) is a great way to get started.

Here are some links you may find helpful:

* [Documentation](http://facebook.github.io/react/docs/getting-started.html)
* [API Reference](http://facebook.github.io/react/docs/reference.html)
* [Blog](http://facebook.github.io/react/blog/)
* [React on GitHub](https://github.com/facebook/react)
* [Support](http://facebook.github.io/react/support.html)

Articles and guides from the community:

* [How is Facebook's React JavaScript library](http://www.quora.com/React-JS-Library/How-is-Facebooks-React-JavaScript-library)
* [React: Under the hood](http://www.quora.com/Pete-Hunt/Posts/React-Under-the-Hood)

Get help from other React users:

* [React on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
* [Discussion Forum](https://discuss.reactjs.org/)

_If you have other helpful links to share, or find any of the links above no longer work, please [let us know](https://github.com/tastejs/todomvc/issues)._
