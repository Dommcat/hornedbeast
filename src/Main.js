import React from 'react';
import Hornedbeast from './Hornedbeast';
import Data from './Data.json';

class Main extends React.Component {
  render() {
    return (
      <>
      <h3>This is the main component</h3>
      {Data.map(beast => {
        return <Hornedbeast title={beast.title} image_url={beast.image_url}/>
      })}
      
          </>
    )
  }
}

// 3rd Export the component so other files can import them
export default Main;