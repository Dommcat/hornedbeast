import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Hornedbeast extends React.Component {
  constructor(props){
    super(props);
    this.state={
      favorites:0
    }
  }

  handlefavorites= () =>{
    this.setState({
      favorites:this.state.favorites+1
    })
  }

  handleClick=()=>{

    this.props.openmodal(this.props.beastobj)
  }

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>

          <Card.Img variant="top" src={this.props.image_url} onClick={this.handleClick}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.state.favorites} Favorites</Card.Text>
            <Card.Text>
            {this.props.Description}
            </Card.Text>
            <Button variant="primary" onClick={this.handlefavorites}>Click to Like</Button>
          </Card.Body>
        </Card>




      </>
    )
  }
}

// 3rd Export the component so other files can import them
export default Hornedbeast;