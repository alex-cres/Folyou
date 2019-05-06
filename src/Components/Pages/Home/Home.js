import React from 'react'
import CardProposal from '../../../Components/Elements/Cards/CardProposal/CardProposal'
import CardPortfolio from '../../Elements/Cards/CardPortfolio/CardPortfolio'
import { Container, Row, Col, Button} from 'react-bootstrap';
import { withLocalize, Translate } from "react-localize-redux";
import CardTalent from '../../Elements/Cards/CardTalent/CardTalent';
import HomeCarousel from '../../Elements/Carousel/HomeCarousel/HomeCarousel'
import CardsModalPortfolio from '../../Elements/CardsModal/Types/CardsModalPorfolio/CardsModalPortfolio.jsx'
//import CardsModalTalent from '../../Elements/CardsModal/Types/CardsModalTalent/CardsModalTalent.jsx'
//import CardsModalProposal from '../../Elements/CardsModal/Types/CardsModalProposal/CardsModalProposal.jsx'
import { IoIosArrowForward } from "react-icons/io";
import './Home.css'
import ServicesAPI from '../../../serviceAPI.js';
import CardsModalProposal from '../../Elements/CardsModal/Types/CardsModalProposal/CardsModalProposal';
var S = new ServicesAPI();



class Home extends React.Component { 
  constructor(props, context) {
    super(props, context);
   
    this.state = {
      portfolios:[],
      talents:[],
      proposals:[],
      portTrending:[],
      propTrending:[],
      showModalPortfolio: false,
      showModalTalent: false,
      showModalProposal: false,
      typeModal: null,
      idModal: null,
    };
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleModalShow = this.handleModalShow.bind(this);

  }
  
  handleModalClose() {
    this.setState({showModalPortfolio: false});
    this.setState({showModalTalent: false});
    this.setState({showModalProposal: false});
    console.log(this.state);
  }

  handleModalShow(type, id) {
    this.setState({ typeModal: type, idModal: id });
    this.setState({showModalPortfolio: type=="portfolioSheet"});
    this.setState({showModalTalent: type=="talentSheet"});
    this.setState({showModalProposal: type=="proposalSheet"});
    console.log(type, id , this.state);
  }

  componentDidMount() {
        S.getter(`getPortfolioByIdRecent`, {
          limit:4,
        }, (res) => {  
          const portfolios = res.data.portfolioList;
          console.log(res);
            this.setState({ portfolios: portfolios });
      },
      (error) => { 
      console.log("Error: Portfolio", error);
          this.setState({ error: {message:error,error:true} });
      });
      S.getter(`getProposalByIdRecent`, {
        limit:4,
      }, (res) => {  
        const proposals = res.data.proposalList;
        console.log(res);
          this.setState({ proposals: proposals });
      },
      (error) => { 
          console.log("Error do alexandre", error);
          this.setState({ error: {message:error,error:true} });
      });


      console.log("finish Mounting");
  }

 

  render() {
    return ( 
        <>
        
          {/* HOME CAROUSEL SECTION */}
                    <Row style={{margin: 0}}>
                      <Col sm={12} className="Header-Sections">
                        <HomeCarousel/>
                      </Col>
                    </Row>
        

          {/* TRENDING SECTION */}

                    <Row style={{margin: 0}}>
                     <Col sm={12} className="Header-Sections">
                         <h1 style={{marginTop: "auto", marginBottom:"auto"}}><Translate id="trending"></Translate></h1>
                         </Col>
                      <Col sm={12}>
                      <hr className="Hr-Sections"/>
                      <Row>
                      {this.state.portTrending.map(val =>{return(
                        <CardPortfolio data={val} parent={this} />
                      );})}
                      {this.state.propTrending.map(val =>{return(
                        <CardProposal data={val} parent={this}  />
                      );})}
                      </Row>
                      </Col>
                    </Row>

         {/* PROJECT SECTION */}

         <Row style={{margin: 0, marginTop: "3%"}}>
                     <Col sm={12} className="Header-Sections">
                    
                        <b style={{fontFamily: "inherit",
                        fontWeight: "500",
                        color: "inherit",
                        fontSize:"26px",
                       }}><Translate id="latest projects" ></Translate> 
                       <Button className="Button-View-All">
                           <a className="Button-View-All-Text">
                            <Translate id="see more"></Translate>
                           </a>
                          <IoIosArrowForward></IoIosArrowForward>
                      </Button>
                       </b>
                     
                      </Col>
                      <Col sm={12}>
                      <hr className="Hr-Sections"/>
                      <Row>
                      {this.state.portfolios.map(val =>{return(
                        <CardPortfolio parent={this} data={val} />
                      );})}
                      </Row>
                      </Col>
                    </Row>

        {/* PROPONENT SECTION*/}

        <Row style={{margin: 0, marginTop: "3%"}}>
                     <Col sm={12} className="Header-Sections">
                     <b style={{fontFamily: "inherit",
                        fontWeight: "500",
                        color: "inherit",
                        fontSize:"26px",
                       }}><Translate id="latest proposals" ></Translate> 
                       <Button className="Button-View-All">
                           <a className="Button-View-All-Text">
                            <Translate id="see more"></Translate>
                           </a>
                          <IoIosArrowForward></IoIosArrowForward>
                      </Button>
                       </b>
                                           </Col>
                      <Col sm={12}>
                      <hr className="Hr-Sections"/>
                      <Row>
                      {this.state.proposals.map(val =>{return(
                        <CardProposal data={val} />
                      );})}
                      </Row>
                      </Col>
                    </Row>

        {/* TALENT SECTION */}

        <Row style={{margin: 0, marginTop: "3%"}}>
                     <Col sm={12} className="Header-Sections">
                     <b style={{fontFamily: "inherit",
                        fontWeight: "500",
                        color: "inherit",
                        fontSize:"26px",
                       }}><Translate id="latest rising stars" ></Translate> 
                       <Button className="Button-View-All">
                           <a className="Button-View-All-Text">
                            <Translate id="see more"></Translate>
                           </a>
                          <IoIosArrowForward></IoIosArrowForward>
                      </Button>
                       </b>
                                           </Col>
                      <Col sm={12}>
                      <hr className="Hr-Sections"/>
                      <Row>
                      {this.state.talents.map(val =>{return(
                        <CardTalent data={val} />
                      );})}
                      </Row>
                      </Col>
                    </Row>

                    <CardsModalPortfolio parent={this} closer={this.handleModalClose}/>
              <CardsModalProposal parent={this} closer={this.handleModalClose}/>
                    

              
        </>
 );} }


 //<CardsModalTalent parent={this} closer={this.handleModalClose}/>
 //<CardsModalProposal parent={this} closer={this.handleModalClose}/>
export default withLocalize(Home);
