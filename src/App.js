// 1st import 
import React from 'react';
import Header from './header';
import Main from './Main';
import Footer from './footer';
import Data from './Data.json';
import Selectedbeast from './selectedbeast';
import Form from 'react-bootstrap/Form';

// import Hornedbeast from './Hornedbeast';

// import Form



// 2nd Class component
class App extends React.Component { 
constructor (props){
  super(props);
  this.state={
    showmodal:false,
    selectedbeast:{},
    sorteddata:Data
  }
}

closemodal = () =>{this.setState({showmodal:false})}

openmodal = (beastobj) => {
this.setState({
  showmodal:true,
  selectedbeast:beastobj
})


}

handlefilter=(event) => {
let selected=event.target.value
let newdata=Data.filter(beast =>{
  if (selected === "All") {
    return beast

  } else {
    return beast.horns === +selected 
  }

})
this.setState({sorteddata:newdata})
}

  render() {
    return (
      <>
        <Header />

<Form>
<Form.Select onChange={this.handlefilter}>
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="100">Hundred</option>
      <option value="All">All</option>
    </Form.Select>
</Form>
        <Main data={this.state.sorteddata} openmodal={this.openmodal}/>
        <Selectedbeast showmodal={this.state.showmodal} closemodal={this.closemodal} selectedbeast={this.state.selectedbeast}/>
        <Footer/>
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
