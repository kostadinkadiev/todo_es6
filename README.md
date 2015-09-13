This is a simple, experimental ToDo application written using ES6 (using the Babel transpiler), Angular 2 and NodeJS.
For the Angular 2 components, pure EcmaScript 6 is used, instead of TypeScript/AtScript.
The data is stored in the browser's local storage. The UI is mobile-responsive.

Live Demo (language on the demo is Macedonian, but should be intuitive enough): http://todoes6.azurewebsites.net/

To run this app locally:

    git clone https://github.com/kostadinkadiev/todo_es6
    install Node.js
    npm install -g grunt-cli
    cd to the repo directory
    npm install to install Grunt plugins and other npm dependencies
    grunt
    node server.js
    browse localhost:1337