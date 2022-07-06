1. What is Virtual DOM? 

   React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM).

   So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document.

   Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM. 
     
   You may still wonder, “Aren’t we doing the same thing again and doubling our work? How can this be faster?” Read below to understand how things will be faster using virtual DOM.

   DOM is an interface that allows scripts to update the content, style, and structure of the document. Virtual DOM is a node tree similar to Real DOM that lists elements, content, and attributes as objects and properties.

   2. 2.What is SPA?

    SPA stands for Single Page Application.

    It is a very common way of programming websites these days. The idea is that the website loads all the HTML/JS the first time you visit. When you then navigate, the browser will only rerender the content without refreshing the website.

    Single-spa-react is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for use with React.

    SPAs are reactive web applications that give a native look and feel without page loads.

    SPAs owe this to AJAX/Client-Side Rendering typically provided by a client-side framework such as react/vue/angular. 

    Single page applications (SPAs) are becoming more and more popular. Facebook, YouTube, Twitter, GitHub, and numerous Google's services are all built using the SPA tech.

    3.What is difference between class and functional component
     
    A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).

    There is no render method used in functional components.	

    Functional component run from top to bottom and once the function is returned it cant be kept alive.

    React lifecycle methods (for example, componentDidMount) cannot be used in functional components.

    Hooks can be easily used in functional components to make them Stateful.

    example: const [name,SetName]= React.useState(‘ ‘)

    A class component requires you to extend from React. Component and create a render function which returns a React element.

    It must have the render() method returning JSX (which is syntactically similar to HTML).

    Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.

    React lifecycle methods can be used inside class components (for example, componentDidMount).

    It requires different syntax inside a class component to implement hooks.
    example: constructor(props) {

   super(props);

   this.state = {name: ‘ ‘}

    }  
   
   4.What does mean by state and its use in react?

    State is a plain JavaScript object used by React to represent an information about the component's current situation. 

    It's managed in the component (just like any variable declared in a function).

    The state is a built-in React object that is used to contain data or information about the component.

    A component's state can change over time; whenever it changes, the component re-renders.

    State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application. In React, all the code we write is defined inside a component.

   5.What is JSX and why do we use it instead of js?

   JS is simply a scripting language, adding functionality into your website.

   JSX is an addition to the JavaScript syntax which is a mixture of both HTML and JavaScript. 

   Both JS and JSX are interchangeable but JSX makes the code easier to understand for users.

   JS is standard javascript, JSX is an HTML-like syntax that you can use with React to (theoretically) make it easier and more intuitive to create React components. 

   As the docs say, the only purpose is to make it easier to create React components... there's not much else there.

   </h1>; It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

   JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX converts HTML tags into react elements. You are not required to use JSX, but JSX makes it easier to write React applications.

   6.What is package.json?

   The package. json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

   All npm packages contain a file, usually in the project root, called package. json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.

   It is a JSON file that lives in the root directory of your project. Your package. json holds important information about the project.

   Your project also must include a package.json before any packages can be installed from NPM. This is probably the top reason why you need one in your project.

                                                Common fields in package.json
 
 name : "name": "my-project"
 version : "version": "1.5.0",
 description : The description field is used by the NPM registry for published packages, to describe the package in search results and on the npmjs.com website.
 keywords : "keywords": ["server", "osiolabs", "express", "compression"]
 main : "main": "src/index.js",
 dependencies : "dependencies": {
	"express": "^4.16.4",
    "compression": "~1.7.4"
}
The dependency field is an object with package names as keys, and a version or version range as a value.











    