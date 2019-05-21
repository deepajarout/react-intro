import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';

//Instead of class we can also use  function (It is Best Practice)
// const Greetings = (props) => <div>Hey you! {props.firstName} {props.lastName}!</div>;


// when using class we use this syntax
// class Greetings extends React.Component {
//   render() {
//     return (
//       <div>Hey you!  {this.props.firstName} {this.props.lastName}! How are you </div>
//     );
//   }
// }


// class SimpleForm extends React.Component {
//   render() {
//     return (
//       <div>
//         <input type="text" name="firstName" />
//         <Greetings firstName="John" />
//       </div>
//     );
//   }
// }

/////Introduction State concept of react
// class SimpleForm extends React.Component {
//   state = {
//     firstName: "",
//   };

//   onFirstNameChange = event =>
//     this.setState({
//       firstName: event.target.value
//     });

//   render() {
//     return (
//       <div>
//         <input type="text" name="firstName" onChange={this.onFirstNameChange} />
//         <Greetings firstName={this.state.firstName} />
//       </div>
//     );
//   }
// }


// // Form Validation concept of  React

// class SimpleForm extends React.Component {
//   state = {
//     firstName: "",
//     firstNameError: "",
//   };

//   validateName = name => {
//     const regex = /[A-Za-z]{3,}/;

//     return !regex.test(name)
//       ? "The name must contain at least three letters. Numbers and special characters are not allowed."
//       : "";
//   };

//   onFirstNameBlur = () => {
//     const { firstName } = this.state;

//     const firstNameError = this.validateName( firstName );

//     return this.setState({ firstNameError });
//   };

//   onFirstNameChange = event =>
//     this.setState({
//       firstName: event.target.value
//     });

//   render() {
//     const { firstNameError, firstName } = this.state;

//     return (
//       <div>
//         <div>
//           <label>
//             First name:
//             <input
//               type="text"
//               name="firstName"
//               onChange={this.onFirstNameChange}
//               onBlur={this.onFirstNameBlur}
//             />
//             {firstNameError && <div>{firstNameError}</div>}
//           </label>
//         </div>

//         <Greetings
//           firstName={firstName}
//         />
//       </div>
//     );
//   }
// }



//////Adding inline styling
class SimpleForm extends React.Component {
    state = {
      firstName: "",
      firstNameError: "",
    };
  
    validateName = name => {
      const regex = /[A-Za-z]{3,}/;
  
      return !regex.test(name)
        ? "The name must contain at least three letters. Numbers and special characters are not allowed."
        : "";
    };
  
    onFirstNameBlur = () => {
      const { firstName } = this.state;
  
      const firstNameError = this.validateName( firstName );
  
      return this.setState({ firstNameError });
    };
  
    onFirstNameChange = event =>
      this.setState({
        firstName: event.target.value
      });
  
    render() {
      const { firstNameError, firstName } = this.state;
   return (
  <div
      style={{
        margin: 50,
        padding: 10,
        width: 300,
        border: "1px solid black",
        backgroundColor: "black",
        color: "white"
      }}
    >
    <div style={{marginBottom: 10}}>
      <label>
        First name:
        <input
          style={{backgroundColor: '#EFEFFF', marginLeft: 10}}
          type="text"
          name="firstName"
          onChange={this.onFirstNameChange}
          onBlur={this.onFirstNameBlur}
        />
        {firstNameError && <div style={{color: 'red', margin: 5}}>{firstNameError}</div>}
      </label>
    </div>

    <Greetings
      firstName={firstName}
    />
  </div>
);
}
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
{/* <Greetings firstName="deepa" lastName="jarout"/> */}

<div>
    <SimpleForm />
  </div>
</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      
    </div>
  );
}

export default App;
