//area to view all proposals
//view to see all the talents

import React from 'react';
import CardProposal from '../../../Components/Elements/Cards/CardProposal/CardProposal';

import { Container, Row } from 'react-bootstrap';
import { withLocalize } from "react-localize-redux";


var data;
const ProposalsAreaView = () => (

    <Container fluid={true}>
        <Row style={{margin: 0}}>
            <CardProposal data={data}/>
        </Row>
    </Container>
)

export default withLocalize(ProposalsAreaView);