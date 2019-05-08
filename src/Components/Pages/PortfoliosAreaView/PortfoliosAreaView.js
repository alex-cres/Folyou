//place for all the portfolios

import React from 'react';
import CardPortfolio from '../../../Components/Elements/Cards/CardPortfolio/CardPortfolio';
import { Container, Row, Col} from 'react-bootstrap';
import { withLocalize } from "react-localize-redux";
import { WithContext as ReactTags } from 'react-tag-input';
import { Translate } from "react-localize-redux";
import ServicesAPI from '../../../serviceAPI.js';
import Notifications from '../../Elements/Notifications/Notifications';
import { Button} from "reactstrap";
import "./PortfoliosAreaView.css";
import CardsModalPortfolio from '../../Elements/CardsModal/Types/CardsModalPorfolio/CardsModalPortfolio.jsx'
var S = new ServicesAPI();

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class PortfoliosAreaView extends React.Component { 
    constructor(props, context) {
        super(props, context);
        this.state = {
            portfolios:[],
            filters:[],
            hasMoreItems: true,
            error:[],

            tags: [
              
           ],
          suggestions: [
           ] 
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
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

      handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }

    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }

  

      
    

    componentDidMount() {
        S.getter(`getPortfolioByIdRecent`, {limit:1000 }, (res) => {  
               const portfolios = res.data.portfolioList;
                console.log(res);
                 this.setState({ portfolios: portfolios });
         },
       (error) => { 
        console.log("Error do Portfolio", error);
              this.setState({ error: {message:error,error:true} });
        });
        S.getter(`getKeywords`, {type:"all" }, (res) => {  
            const keywords = res.data.keywords;
             
             let suggest=[];
             keywords.forEach(element => {
                suggest.push({ id: element, text: element });
             });
             console.log(suggest);
              this.setState({ suggestions: suggest });
      },
    (error) => { 
     console.log("Error do Keywords", error);
           this.setState({ error: {message:error,error:true} });
     });
     console.log("finish Mounting");
        
    }
    
  
    render() {
        
      const { tags, suggestions } = this.state;
       
      return (
          <>
            <Row style={{margin: 0}}>

                <Col sm={2} className="Header-Sections" style={{marginTop: 0}}>
                {/* BOTAO PARA NOTIFICACOES 
                <Button
                              block
                              color="primary"
                              onClick={() => this.props.app.state.notificationModule.notify("Test","bl",1,200)}></Button> */}

                <div className="Portfolios-Page-Title">
                    <Translate id="projects" ></Translate>
                </div>
                </Col>
                <Col sm={10} className="Header-Sections">
                <ReactTags tags={tags}
                    
                    inputFieldPosition="top"
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters}
                    placeholder="Keywords" 
                    allowDragDrop="false"
                    />
                </Col>
                <Col sm={12}>
                    <hr className="Hr-Sections"/>
                </Col>
                 <Col sm={12}>
                 { this.state.portfolios.map((portfolio, i) => {
                      return (  
                      <CardPortfolio data={portfolio} parent={this}/>
                      );
                  })}
                  
                </Col>
            </Row>
    <CardsModalPortfolio parent={this} closer={this.handleModalClose}/>
         </>     
);} }

export default withLocalize(PortfoliosAreaView);
