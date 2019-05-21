import React from "react";
////// here we used classes
// class Greetings extends React.Component {
//     render() {
//       return (
//         <div>Hey you! {this.props.firstName} {this.props.lastName}!  What are Doing</div>
//       );
//     }
//   }

//////here we used function
const Greetings = ({firstName, lastName})=> <div>Hey you! {firstName} {lastName}!  What are we do for progress</div>

export default Greetings;