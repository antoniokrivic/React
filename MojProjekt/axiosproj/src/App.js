import axios from 'axios';
import React, { Component } from 'react';
import {Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button} from 'reactstrap';

class App extends Component {
  state = {
    accomodations: [],
    newAccomodationData:{
      name:'',
      locationName:'',
    },
    editAccomodationData:{
      id:'',
      name:'',
      locationName:'',
    },
    newAccomodationModal: false,
    editAccomodationModal:false,
  }
  
  componentWillMount(){
    axios.get('https://localhost:44392/api/Accomodation').then((response)=>{
      this.setState({
        accomodations: response.data,
      })
    });
  }

  toggleNewAccomodationModal(){
    this.setState({
      NewAccomodationModal: ! this.state.NewAccomodationModal
    });
  }

  toggleEditAccomodationModal(){
    this.setState({
      editAccomodationModal: ! this.state.editAccomodationModal
    });
  }

  addAccomodation(){
    axios.post('https://localhost:44392/api/Accomodation',this.state.newAccomodationData).then((response)=>{
      let{accomodations}= this.state;
      accomodations.push(response.data);

      this.setState({accomodations,newAccomodationModal:false,newAccomodationData:{
        name:'',
        locationName:''
      }});
    });
  }
  updateAccomodation(){
    axios.post()
  }
  editAccomodation(id,name,locationName){
    this.setState({
      editAccomodationData:{id,name, locationName}, editAccodomationModal: !this.state.editAccomodationModal
    });
  }

  render(){
    let accomodations=this.state.accomodations.map((accomodation)=>{
      return(
        <tr key={accomodation.Id}>
          <td>{accomodation.Id}</td>
          <td>{accomodation.Name}</td>
          <td>{accomodation.locationName}</td>
          <td>
            <Button color="success" size ="sm" className="mr-2" onClick={this.editAccomodation.bind(this, accomodation.id, accomodation.name, accomodation.locationName)}>Edit</Button>
            <Button color="danger" size="sm">Delete</Button>
          </td>
        </tr>
      )
    });
    return (
      <div className="App container">
      <h1>Accomodation</h1>
      <Button className="my-3" color="primary" onClick={this.toggleNewAccomodationModal.bind(this)}>Add new accomodation</Button>
      <Modal isOpen={this.state.NewAccomodationModal} toggle={this.toggleNewAccomodationModal.bind(this)}>
        <ModalHeader toggle={this.toggleNewAccomodationModal.bind(this)}>Add a new accomodation</ModalHeader>
        <ModalBody>
          <FormGroup>
          <Label for="name">Name</Label>
          <Input id="name" value={this.state.newAccomodationData.name} onChange={(e)=>{
            let{newAccomodationData}=this.state;
            newAccomodationData.name = e.target.value;
            
            this.setState({newAccomodationData});
          }}/>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.addAccomodation.bind(this)}>
            Add Accomodation
          </Button>{' '}
          <Button color="secondary" onClick={this.toggleNewAccomodationModal.bind(this)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={this.state.editAccomodationModal} toggle={this.toggleEditAccomodationModal.bind(this)}>
        <ModalHeader toggle={this.toggleEditAccomodationModal.bind(this)}>Edit a new accomodation</ModalHeader>
        <ModalBody>
          <FormGroup>
          <Label for="name">Name</Label>
          <Input id="name" value={this.state.editAccomodationData.name} onChange={(e)=>{
            let{editAccomodationData}=this.state;
            editAccomodationData.name = e.target.value;
            
            this.setState({editAccomodationData});
          }}/>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.updateAccomodation.bind(this)}>
            Update Accomodation
          </Button>{' '}
          <Button color="secondary" onClick={this.toggleEditAccomodationModal.bind(this)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {accomodations}
          </tbody>
        </Table>
      </div>
    )
  }
}


export default App;
