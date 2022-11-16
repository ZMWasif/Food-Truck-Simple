import React from 'react';
import './Questionnaire.css';
const Questionnaire = () => {
    return (
        <div>
            <section>
            <div className='qestions'>
        <div className='q1'>
          <h3>How does REACT work?</h3>
          <p>
          React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. We can use it to help build single page applications and mobile apps, or to build complex apps if we utilise it with other libraries. React creates and maintains an in-memory representation of a UI. When a user interacts with a React application, React updates the in-memory representation and the changes are reflected in the UI. React uses a virtual DOM, which is a JavaScript representation of the actual DOM. The virtual DOM is a lightweight tree that contains only the necessary information to render a UI. When a user interacts with a React application, React updates the virtual DOM. React then compares the virtual DOM with the actual DOM. React makes the necessary changes to the actual DOM, which are reflected in the UI. The virtual DOM is a JavaScript object. The object is made up of React elements. React elements are the smallest units of React applications. React elements are immutable. That means they cannot be changed. Once a React element is created, it cannot be modified. This is why React is so fast. React only needs to update the changed element in the virtual DOM. React doesn't need to re-render the entire UI.
          </p>
        </div>
        <div className='q2'>
          <h3>How does useState work?</h3>
          <p>
          The useState() is a Hook that allows you to have state variables in functional components . So basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls. useState() hook allows one to declare a state variable inside a function. It should be noted that one use of useState() can only be used to declare one state variable. The value returned by useState() consists of an array with two values. The first value is the initial (or starting) value of the state variable, while the second value is a reference to the function that can be used to update the variable. One can always use array destructuring to assign both values at once so that they can be used in the component. Of course, they can also be assigned separately by assigning a variable with useState() and assigning its first index to one variable and its second index to another (destructuring just makes this easier).
          </p>
        </div>
      </div>
            </section>
        </div>
    );
};

export default Questionnaire;