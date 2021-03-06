import React from 'react';
import { Col, Card, Row, Image, Button } from 'react-bootstrap';
import './CardTalent.css'
import AvatarImage from '../../../../Resources/Images/avatar.png'
import { MdMailOutline } from "react-icons/md";
import {  Link } from "react-router-dom";
import ServicesAPI from "../../../../serviceAPI";
import { withLocalize, Translate } from "react-localize-redux";
import getImageLanguage from "../../../../Resources/Translations/compilerLanguageImages.js"
var S = new ServicesAPI();


function handleMessage(event,props) {
  var data= props.data;
   var parent = props.parent;
  event.stopPropagation();
  parent.handleModalShow("messageModal",data.idTalentArea);
  
}
function diferentPersonMessage(props){
  return(
    <Button variant="link" onClick={(event)=>{handleMessage(event,props)}} className="C-Talent-Footer-Mailbox" ><MdMailOutline/></Button>
  );
}
function CreateTalent(props) {
  var data= props.data;
   var parent = props.parent;
   const avatUser =(data.avatarUser=="")?AvatarImage:S.baseURL()+"public/anexes/profiles/"+((data.avatarUser!="")?data.avatarUser:"default_user_pic.jpg");
  

  return (
   
    <div className="C-Talent" onClick={() => {parent.handleModalShow("talentSheet",data.idTalentArea)}}>
    < span id={data.link} className="C-Talent-Link" >
  

  <Card className="C-Talent-Card">
    <Card.Body className="C-Talent-Body">
     <div className="C-Talent-Avatar"><Link variant="link" className="C-Talent-Name-User" to={"/Profile/"+data.idUser}><Image src={avatUser} className="C-Talent-Avatar-Image"/><span style={{paddingLeft: "1%"}}>{data.nameUser}</span></Link></div>
     <div style={{minHeight: "280px", display: "block"}}>
     
      <Row className="C-Talent-User-Location rowCards"><Image src={getImageLanguage(data.countryUser)} style={{height: "32px",width: "32px"}} roundedCircle/><div className="C-Talent-Country-Name">{data.regionUser}</div></Row>
      <Row className="C-Talent-Website-Link rowCards">{data.nameTalentArea}</Row>
      <Row className="C-Talent-User-Description rowCards">{data.descriptionTalentArea.substring(0,200)+((data.descriptionTalentArea.length > 200)?"...":"")}</Row>
      <Row className="C-Talent-Keywords rowCards"><Translate id="keywords"></Translate >:<div className="C-Talent-Keywords-Name">{data.keywords.join(", ")}</div></Row>
     </div>
    </Card.Body>
    <Card.Footer className="C-Talent-Footer">
      <div className="C-Talent-Footer-Risingstar">{data.valueCategory}</div>
      {(props.app.state.userLogged.idUser==data.idUser || props.app.state.userLogged.set==false)?<></>:diferentPersonMessage(props)}
      
    </Card.Footer>
   
   </Card>
   </span>
 </div>
  )
}

class CardTalent extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      addClass: false
    }
  }
  
  toggle () {
    this.setState({addClass: !this.state.addClass});
  }

  
  render() {


    return ( 
   
      <Col xs={12} sm={6} md={6} lg={4} xl={3} style={{marginTop:"10px"}}>
        {CreateTalent(this.props)}
       </Col>
    );} }

export default withLocalize(CardTalent);
