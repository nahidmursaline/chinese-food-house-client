import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
  return (
   <Container>
     <div>
      <h2 className='text-center m-5'>Blogs</h2>
      <div>
        <h6>
          Tell us the differences between uncontrolled and controlled
          components.
        </h6>
        <p>
          Answer: controlled components are that components that have their
          state and behavior controlled by the parent component. These
          components rely on props passed down from the parent component to
          update their state and behavior. Uncontrolled components refer to
          components that manage their own state internally.
        </p>
        <br />

        <h6>How to validate React props using PropTypes</h6>
        <p>
          Answer: We can use React props, short for properties, to send data
          from one component to another. If a component receives the wrong type
          of props, it can cause bugs and unexpected errors in your app. SOme
          validators: PropTypes.any : The prop can be of any data type.
          PropTypes.bool : The prop should be a Boolean. PropTypes.number : The
          prop should be a number. PropTypes.string : The prop should be a
          string.
        </p><br />
        <h6>Tell us the difference between nodejs and express js.</h6>
        <p>Answer: NodeJS is a framework of JavaScript which is mainly used for working with the backend of our application or building the backend using JavaScript, whereas ReactJS is a JavaScript front-end library. It is mainly used for building the user interface or the frontend of our application.</p><br />

        <h6>What is a custom hook, and why will you create a custom hook?</h6>
        <p>Answer: A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.Jan</p>


      </div>
    </div>
   </Container>
  );
};

export default Blog;
