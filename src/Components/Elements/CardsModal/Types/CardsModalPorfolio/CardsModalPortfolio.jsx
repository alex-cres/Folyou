import React from 'react'
import { Modal, Image, Card, Row } from 'react-bootstrap';
import { Translate } from "react-localize-redux";
import './CardsModalPorfolio.css';
import getImageLanguage from "../../../../../Resources/Translations/compilerLanguageImages.js"
import { isNull } from 'util';

class CardsModalPortfolio extends React.Component {

  constructor(props, context) {
    super(props, context);
   
    this.state = {
      data: {}
    };
    

  }
  componentDidMount(){
  
    
  }

  render() {
    if( this.props.parent.state.showModalPortfolio){
      let data = {};
      console.log(this.props.parent.state.portTrending);
      console.log(this.props.parent.state.portfolios);
      console.log(this.props.parent.state.idModal);
      if (this.props.parent.state.portTrending.length > 0){
       this.props.parent.state.portTrending.forEach((valuePort,indexPort,arrayPort)=>{
          if (this.props.parent.state.portTrending[indexPort].idSheet == this.props.parent.state.idModal){
          data = this.props.parent.state.portTrending[indexPort];
            }
        });
      }else if (this.props.parent.state.portfolios.length > 0){
        this.props.parent.state.portfolios.forEach((valuePort,indexPort,arrayPort)=>{
          if (this.props.parent.state.portfolios[indexPort].idSheet == this.props.parent.state.idModal){
          data = this.props.parent.state.portfolios[indexPort];
         
            }
        });
      }
      else{data = {};}
      console.log(data);
        return (   
          <Modal
            show={this.props.parent.state.showModalPortfolio} 
            onHide={this.props.closer} 
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
            <div>
              <Row style={{padding: "16px"}}>
              <Image src="https://www.w3schools.com/howto/img_avatar.png" className="Modal-Portfolio-Avatar" roundedCircle />
              <div className="Modal-Portfolio-Username">{data.nameUser}</div>
              </Row>
              </div>
            </Modal.Header>
            <Modal.Body  style={{padding: 0}}>
            <Card style={{backgroundColor: "#badc58"}}>
              <Card.Body>
                <Row  style={{padding: "16px"}}>
                  <Image src={getImageLanguage(data.countrySheet)} className="Modal-Portfolio-Avatar-Country" roundedCircle/>
                  <div className="Modal-Portfolio-User-Location">{data.regionSheet}</div>
                  <div className="Modal-Portfolio-Sheet-Category"><b><Translate id="category"></Translate></b>{"  " + data.valueCategory}</div>
                </Row>
                <div className="Modal-Portfolio-SheetName">{data.nameSheet}</div> 
                <div className="Modal-Portfolio-Keywords"><b><Translate id="keywords"></Translate> </b>{data.keywords.join(", ")}</div>

              
              </Card.Body>
            </Card>

              <Card className="Modal-Portfolio-Description-Area">
                <div><b><Translate id="description"></Translate></b></div>
                <div className="Modal-Portfolio-Description">{data.descriptionSheet}</div>

                <Card.Footer style={{backgroundColor: "red"}}>
                  Anexos
                </Card.Footer>

              </Card>

          

            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
            </Modal>
        );
      }else{
      return(<></>);
    } 
    }
}
  
  export default (CardsModalPortfolio);
  