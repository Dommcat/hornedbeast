// 1st import 
import React from 'react';
import Header from './Header';
import Main from './Main'

// 2nd Class component
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    )
  }
}

// 3rd Export the component so other files can import them
export default App;












// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
