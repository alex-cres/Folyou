//place for all the portfolios

import React from 'react';
import CardPortfolio from '../../../Components/Elements/Cards/CardPortfolio/CardPortfolio';
import { Container, Row, Col} from 'react-bootstrap';
import { withLocalize } from "react-localize-redux";
import { WithContext as ReactTags } from 'react-tag-input';
import { Translate } from "react-localize-redux";
import ServicesAPI from '../../../serviceAPI.js';
import Notifications from '../../searchboxstyle.css';
import { Button} from "reactstrap";
import '../../Elements/Notifications/Notifications';
import "./PortfoliosAreaView.css";
import CardsModalPortfolio from '../../Elements/CardsModal/Types/CardsModalPorfolio/CardsModalPortfolio.jsx'
import getImageLanguage from "../../../Resources/Translations/compilerLanguageImages.js";
import SelectSearch from 'react-select-search'
import MessageModal from '../../Elements/CardsModal/Types/MessageModal/MessageModal.jsx'
var S = new ServicesAPI();
var countryJson = require("../../../Resources/Translations/countries.json");
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
          talents:[],
          proposals:[],
          portTrending:[],
          propTrending:[],
          showModalPortfolio: false,
          showModalTalent: false,
          showModalProposal: false,
          typeModal: null,
          liveKeywords: [],
          idModal: null,
            filters:[],
                    hasMoreItems: true,
                    error:[],

                    tags: [
                    
                ],
                suggestions: [
                ],
                countries:[]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
    
        
      }
      handleModalClose() {
        this.setState({showModalPortfolio: false});
        this.setState({showModalTalent: false});
        this.setState({showModalProposal: false});
        this.setState({showModalMessage: false});
        console.log(this.state);
      }
    
      handleCountry(event) {
        
        this.setState({ country: event.value},this.redoService);
     }
     handleModalShow(type, id) {
      const data = new FormData();
      data.append("idUser",this.props.app.state.userLogged.idUser||null);
      data.append("idClicked",id);
      data.append("type",type);
       
      S.postter(`postClicks`, data, (res) => { },
    (error) => { console.log(error);});
      
      this.setState({ typeModal: type, idModal: id });
      this.setState({showModalPortfolio: type=="portfolioSheet"});
      this.setState({showModalTalent: type=="talentSheet"});
      this.setState({showModalProposal: type=="proposalSheet"});
      if(type=="messageModal"){
      this.setState({showModalMessage: type=="messageModal" },()=>console.log(this.state.showModalMessage));
      console.log(type, id );
      }else if(type=="messageModalSheet"){
        this.setState({showModalMessage: type=="messageModalSheet" },()=>console.log(this.state.showModalMessage));
        console.log(type, id );
        }else if(type=="messageModalTalent"){
          this.setState({showModalMessage: type=="messageModalTalent" },()=>console.log(this.state.showModalMessage));
          console.log(type, id );
          }else {
            this.setState({showModalMessage: type=="messageModalProposal" },()=>console.log(this.state.showModalMessage));
            console.log(type, id );
            }
      console.log(type, id , this.state);
    }

    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        },this.redoService);
        console.log(this.state.tags);
       
    }

    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }),this.redoService);
      
    }
    redoService(){
      let      kwy = [];
      this.state.tags.forEach((value,index,array)=>{
        kwy.push(array[index].text);
      });
      console.log(this.state.country,kwy);
        S.getter(`getPortfolioById`, { keywords: kwy, country:this.state.country }, (res) => {  
          const portfolios = res.data.portfolioList;
          console.log(res);
            this.setState({ portfolios: portfolios });
        },
        (error) => { 
        console.log("Error do Portfolio", error);
              this.setState({ error: {message:error,error:true} });
        });
    }
    

    componentDidMount() {
        
        S.getter(`getPortfolioById`, { keywords: [], country:"" }, (res) => {  
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
        function renderFriend(option) {
            const imgStyle = {
                borderRadius: '50%',
                verticalAlign: 'middle',
                marginRight: 10,
            };
        
            return (<span><img alt="" style={imgStyle} width="40" height="40" src={option.photo} /><span>{option.name}</span></span>);
        } 
      const { tags, suggestions } = this.state;
      let countries=[];
      countries.push({name:"Select...",value:""});
      for (var index in countryJson) {
          countries.push({name:countryJson[index],value:index,photo:getImageLanguage(index.toLowerCase())});
      }
     
      return (
          <>
            <Row style={{margin: 0}}>

                <Col sm={2} className="Header-Sections" style={{marginTop: 0}}>
               
                <div className="Portfolios-Page-Title">
                    <Translate id="projects" ></Translate>
                </div>
                </Col>
                <Col sm={5} className="Header-Sections">
                <ReactTags tags={tags}
                    
                    inputFieldPosition="top"
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters}
                    placeholder="Keywords" 
                    allowDragDrop={false}
                    
                    />
                    
                    </Col><Col sm={5} className="Header-Sections">
                    <SelectSearch renderOption={renderFriend} options={countries} value={this.state.country} name="country" onChange={(event)=>{this.handleCountry(event)}} style={{height: "36px"}} />
                </Col>
                <Col sm={12}>
                    <hr className="Hr-Sections"/>
                </Col>
                 
                 { this.state.portfolios.map((portfolio, i) => {
                      return (  
                      <CardPortfolio data={portfolio} parent={this} app={this.props.app}/>
                      );
                  })}                  
                
            </Row>
            <MessageModal app={this.props.app} parent={this} closer={this.handleModalClose}/>
             
    <CardsModalPortfolio parent={this} closer={this.handleModalClose} app={this.props.app}/>
         </>     
);} }

export default withLocalize(PortfoliosAreaView);
