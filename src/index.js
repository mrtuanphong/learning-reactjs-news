import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// class App extends Component {
//   state = {
//     count: 0
//   };

//   increament = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Counter App</h1>
//         <button className="btn btn-primary" onClick={this.increament}>
//           Clicked {this.state.count} times!
//         </button>
//       </div>
//     );
//   }
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
