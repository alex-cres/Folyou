import React from 'react'
import { Modal, Button, Row, Form, Col, Image  } from 'react-bootstrap';
import './Login.css'
import { withCookies } from 'react-cookie';
import { Translate } from "react-localize-redux";
import logo from '../../../../Resources/Images/Logo_black_white.png'
import ServicesAPI from '../../../../serviceAPI.js';
import Register from '../Register/Register'
var S = new ServicesAPI();
class Login extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleRegisterPopUpClose = this.handleRegisterPopUpClose.bind(this);
    this.handleRegisterPopUpShow = this.handleRegisterPopUpShow.bind(this);

    this.state = {
      showRegister: false,
      email:"",
      password:"",
      result:{}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  
  handleRegisterPopUpClose() {
    this.setState({ showRegister: false });
  }

  handleRegisterPopUpShow() {
    this.setState({ showRegister: true });
    this.props.parent.setState({showLogin: false});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handlePasswordChange(e) {
      this.setState({password: e.target.value});
  }
  handleSubmit(event) {
    const { cookies } = this.props;
    event.preventDefault();
    let data= {emailUser:this.state.email, passwordUser:this.state.password};
    S.getter(`getUserLogin`, data, (res) => {  
      const result = res.data;
      console.log(res);
      result.user["set"]=result.verified;
      this.setState({ result: result });
      this.props.app.setState({userLogged:result.user});
      cookies.set('folyou_session', result.session, { path: '/' });
      this.props.closer();
      this.props.app.state.notificationModule.notify("LOGIN SUCCESS","br",2,2);
       

    },
    (error) => { 
        console.log("Error: User", error);
        this.setState({ error: {message:error,error:true} });
    });
    
}
  
    render() {
      return (
        <>
         <Modal size="lg"
         show={this.props.parent.state.showLogin} 
         onHide={this.props.closer} 
         centered={true}>
            <Modal.Header className="Login-Modal-Header" closeButton>
            </Modal.Header>
            <Modal.Body>
               <Row className="Login-Modal-Row">
              <Col sm={5} style={{paddingLeft: 0}}><b className="Login-Text-SignIn mr-auto"><Translate id="sign in to continue"></Translate></b></Col>
              <Col sm={4} style={{paddingRight: 0}}><p className="Login-Text-RegisterNow ml-auto"><Translate id="not a member yet"></Translate> 
               </p> </Col>
                <Col sm={3} style={{paddingRight: 0, paddingLeft: 0}}>
                <Button onClick={()=>{
                  this.handleRegisterPopUpShow();
                } } variant="link" className="Login-Button-RegisterNow"><Translate id="register now"></Translate>
                </Button>
              </Col>
              </Row>
              <form onSubmit={this.handleSubmit}>
               <Form.Control  className="Login-Input-Email" placeholder="E-mail" name={"email"} id={"email"}  value={this.state.email} onChange={this.handleEmailChange} />
               <Form.Control  className="Login-Input-Password" placeholder="Password" type="password" name={"password"} id={"password"} value={this.state.password} onChange={this.handlePasswordChange}/>
                
              <Row> <button  className="Login-Button-Login"><Translate id="login now"></Translate></button></Row>
              </form>
              <Row> <p className="Login-Password-Recovery"><Translate id="forgot password"></Translate></p></Row>
            </Modal.Body>
            
            </Modal>
            <Register parent={this} closer={this.handleRegisterPopUpClose} app={this.props.app}></Register>
            </>
      );
    }
  }
  
export default withCookies(Login)