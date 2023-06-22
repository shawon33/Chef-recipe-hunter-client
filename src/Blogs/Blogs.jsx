import { Container } from "react-bootstrap";

const Blogs = () => {
    return (
        <Container>
            <div className="mt-5">
                <h1 className="text-danger"> No 1. Difference between uncontrolled and controlled components ?</h1>

                <ul>
                    <h1 className="text-success">Answer :</h1>
                    <h1 className="text-success">Uncontrolled Components</h1>
                    <li>State management: Uncontrolled components handle their own state internally. They typically manage their state using internal variables or DOM manipulations.</li>
                    <li>Event handling: Uncontrolled components rely on standard DOM events to handle user interactions and changes in state.</li>
                    <li>DOM reference: They often require access to the underlying DOM elements to read or modify the component's state.</li>
                    <li>Simplicity: Uncontrolled components are generally simpler to implement and require less code compared to controlled components.</li>
                    <li>Limited control: Developers have limited control over the component's state and behavior once it is rendered.</li>
                </ul>
                <ul>
                    <h1 className="text-success">Controlled Components</h1>
                    <li>State management: Controlled components have their state managed by a parent or higher-level component. The state is passed down to the controlled component via props.</li>
                    <li>Event handling: They handle user interactions and state changes by invoking callback functions provided by the parent component.</li>
                    <li>Data flow: The parent component has full control over the component's state and can modify it as needed.</li>
                    <li>Validation and restrictions: Controlled components allow for easy validation and restriction of input by intercepting and modifying the data before it is passed down to the controlled component.</li>
                    <li>Enhanced functionality: Controlled components can provide additional features like data transformation, validation, or custom event handling.</li>
                </ul>
            </div>

            <br />

            <div>
                <h1 className="text-danger">No 2. How to validate React props using PropsTypes ?</h1>
                <ul>
                    <h1 className="text-success">Answer :</h1>
                    <li>npm install prop-types</li>
                    <li>import PropTypes from 'prop-types'</li>
                    <li>MyComponent.propTypes =
                        <h3 className="px-4">prop1: PropTypes.string</h3>
                        <h3 className="px-4">prop2: PropTypes.number.isRequired,</h3>
                        <h3 className="px-4"> prop3: PropTypes.arrayOf PropTypes.string</h3></li>
                    <li>export default MyComponent;</li>
                </ul>
            </div>
            <br />

            <div>
                <h1 className="text-danger">No 3. Tell us the difference between nodejs and express.js ?</h1>
                <ul>
                    <h1 className="text-success">Answer :</h1>
                    <h1 className="text-success">NodeJs</h1>
                    <li>Runtime Environment: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to execute JavaScript code on the server-side, outside the browser.</li>
                    <li>Platform: Node.js provides a platform for building scalable and high-performance network applications. It allows you to handle I/O operations efficiently, making it suitable for building server-side applications, APIs, and real-time applications.</li>
                    <li>Event-driven, Non-blocking I/O: Node.js follows an event-driven, non-blocking I/O model, which means it uses an event loop to handle asynchronous operations efficiently. This allows Node.js to handle a large number of concurrent requests without blocking the execution.</li>
                </ul>
                <ul>
                    <h1 className="text-success">ExpressJs</h1>
                    <li>Web Application Framework: Express.js is a minimalist, flexible, and unopinionated web application framework built on top of Node.js. It provides a set of features and abstractions for building web applications and APIs.</li>
                    <li>Routing: Express.js simplifies the process of defining routes and handling HTTP requests. It allows you to define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) and handle the corresponding requests.</li>
                    <li>Middleware: Express.js utilizes middleware functions that allow you to extend and modify the request and response objects. Middleware functions can be used for tasks such as authentication, logging, error handling, and more.</li>
                </ul>
            </div>
            <br />

            <div>
                <h1 className="text-danger" >No 4. What is a custom hook ,and why will you create a custom hook ? </h1>
                <ul>
                    <h1 className="text-success">Answer</h1>
                    <h1 className="text-success">custom hook</h1>
                    <li>A custom hook is a JavaScript function that follows a specific naming convention (starting with "use") and allows you to reuse stateful logic or side effects across different components in React. Custom hooks enable you to extract and encapsulate common logic into a reusable function, making it easier to share and manage code between components.</li>
                    <h2 className="text-success">There are several reasons why you might create a custom hook:</h2>
                    <li>Reusability: Custom hooks promote code reusability by encapsulating logic that can be shared across multiple components. Instead of duplicating the same logic in different places, you can create a custom hook and reuse it wherever needed.</li>
                    <li>Abstraction and Separation of Concerns: Custom hooks help in abstracting away complex or repetitive logic from the component, allowing you to focus on the component's main purpose and improve readability. It separates the concerns of state management, side effects, or other logic from the component itself.</li>
                </ul>
            </div>
        </Container>
    );
};

export default Blogs;