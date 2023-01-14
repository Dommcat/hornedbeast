import React from 'react';
import Modal from 'react-bootstrap/Modal';

class Selectedbeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.showmodal} onHide={this.props.closemodal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedbeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={this.props.selectedbeast.image_url}style={{ width: '10rem' }}/></Modal.Body>
      </Modal>
    )
  }
}

export default Selectedbeast;