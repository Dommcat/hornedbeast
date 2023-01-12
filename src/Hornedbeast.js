import React from 'react';

class Hornedbeast extends React.Component {
  render() {
    return (
      <>
      <h3>{this.props.title}</h3>
      <img src={this.props.image_url}/>
          </>
    )
  }
}

// 3rd Export the component so other files can import them
export default Hornedbeast;