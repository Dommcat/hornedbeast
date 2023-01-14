import React from 'react';
import Hornedbeast from './Hornedbeast';


class Main extends React.Component {
  render() {
    return (
      <>
      <h3>This is the main component</h3>
      {this.props.data.map(beast => {
        return <Hornedbeast key={beast._id} title={beast.title} image_url={beast.image_url}Description={beast.description} beastobj={beast} openmodal={this.props.openmodal}/>
      })}
      
          </>
    )
  }
}

// 3rd Export the component so other files can import them
export default Main;