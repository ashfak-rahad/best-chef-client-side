import jsPDF from "jspdf";

const Blog = () => {

  const downloadPdf = () => {

    const doc = new jsPDF("landscape", "px", "a4", "false")
        doc.text("This blog page short summary", 20, 30)


        doc.text("In software development, there are two types of components: uncontrolled and controlled. \n Uncontrolled components rely on the browser or environment, while controlled components \n are managed by the application code.  React PropTypes is a way to \n validate props in components. \n Node.js is a runtime environment for executing JavaScript code outside of a web browser, primarily \n used for building server-side applications. \n Custom hooks are a useful tool in React for reusing logic across components.", 20, 50);
        
        doc.save("blog-information.pdf")
}
  return (
    <div className="px-7 mx-auto">
      
      <div >
        <button onClick={downloadPdf} className="bg-indigo-500 px-4 py-2 block mx-auto text-white my-10">Download to PDF</button>
        <h1 className="text-center text-2xl pb-7 font-semibold">
          Tell us the differences between uncontrolled and controlled
          components.
        </h1>
        <p>
          Uncontrolled and controlled components refer to various strategies for
          controlling form input values when used in the context of React web
          development. Uncontrolled components are form elements that maintain
          their own internal state and do not rely on React state to control
          their values. With an uncontrolled component, the DOM handles the
          value of the input element rather than the React component.
          Uncontrolled components are typically easier to implement and require
          less code, but they can be more difficult to manage and validate.
          Contrarily, controlled components are form elements that can be
          completely changed by the state of the corresponding React component.
          When using a controlled component, the input element's value is saved
          in the component's state and changes to the input element cause the
          state of the component to change. As the React component has direct
          access to and control over the input values, controlled components are
          more adaptable and manageable. They might be slower than uncontrolled
          components, though, and they need more code to implement. In
          conclusion, the way that controlled and uncontrolled components handle
          form input values is the primary distinction between them.
          Uncontrolled components allow the DOM to manage input values
          internally while controlled components rely on React state to manage
          input values. The decision between controlled and uncontrolled
          components is based on the project's unique requirements as well as
          the trade-offs between flexibility and simplicity.
        </p>
        <hr />
        <h1 className=' text-center text-2xl pb-7 font-semibold'>How to validate React props using PropTypes</h1>
        <p>
          The expected prop types for your component can be defined using the
          PropTypes library in order to validate React props. Here is a succinct
          illustration of how to validate properties using PropTypes:. At the
          top of your component file, import the PropTypes library:. import
          PropTypes from "prop-types";. In your component's propTypes object,
          specify the expected prop types. As an illustration:. propTypes at a .
          in MyComponent =. Name: PropTypes . string . isRequired. PropTypes at
          the . "age,". PropTypes . bool . isRequired, where isStudent is the
          key. hobbies: PropTypes . arrayOf(PropTypes . string). ;. The
          following prop types are defined in this example:. name is a necessary
          string. Age is an optional factor. isStudent: a necessary boolean
          value. Hobbies: a possible string array. Your component should now
          contain the propTypes object. As an illustration:. MyComponent has the
          following functions: name, age, isStudent, and hobbies. Here is the
          component code. . MyComponent . propTypes =. Prop types are used here.
          ;. You have now defined the expected prop types for your component and
          configured PropTypes to validate them at runtime. PropTypes will log a
          warning in the console if a prop doesn't match its anticipated type.
          Making your component more robust and helping to find bugs.
        </p>
        <hr />
        <h1 className=' text-center text-2xl pb-7 font-semibold'>Tell us the difference between nodejs and express js.</h1>
        <p>
          Node. Express and js. Although both js and other popular server-side
          technologies are widely used, their roles and functionalities differ.
          Node. Developers can run JavaScript code outside of a web browser
          using the js runtime environment. Node. Js is well suited for
          developing server-side applications because it offers a robust set of
          APIs for interacting with file systems, network protocols, and other
          low-level features. through Node. Developers can use JavaScript to
          create applications that scale to handle high traffic volumes, handle
          large amounts of data, and process requests quickly. Express. On the
          other hand, js is a framework that is based on Node. js that offers a
          selection of instruments and APIs for creating web applications and
          APIs. Express. Js makes it easier to create web applications by
          offering a collection of middleware functions that can take care of
          routine tasks like parsing request bodies, delivering static assets,
          and managing routes. through Express. Using js, developers can quickly
          create web applications that can manage HTTP requests, communicate
          with databases, and integrate with other services. So, Node, to sum
          up. Express is a web application framework, whereas js is a runtime
          environment for JavaScript code. A web framework called js is based on
          Node.js. js that offers a selection of instruments and APIs for
          creating web applications and APIs. However Node. Low-level features
          and APIs are offered by js, Express. Js offers a higher-level
          abstraction and a more straightforward API, which makes the process of
          creating web applications easier.
        </p>
        <hr />
        <h1 className=' text-center text-2xl pb-7 font-semibold'>What is a custom hook, and why will you create a custom hook?</h1>
        <p>
          The term "custom hook" in the context of React refers to a JavaScript
          function that makes use of one or more React Hooks and is reusable
          across various components. By abstracting and encapsulating complex
          logic, state management, and data retrieval into reusable units using
          custom hooks, developers can better organize their code and cut down
          on repetition. When they need to reuse complex logic or state
          management across multiple components of their application, developers
          create custom hooks. By combining related logic into a single reusable
          unit, custom hooks can also aid in isolating issues and streamlining
          the code.
        </p>
      </div>
    </div>
  );
};

export default Blog;
