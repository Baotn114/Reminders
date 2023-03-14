import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Create from './Create';
import Display from './Display';

const Content = () => {
    return ( 
        <MDBRow style={{margin: "20px"}}>
            <MDBCol md='8'>
               <Display />
            </MDBCol>
            <MDBCol md='4'>
               <Create /> 
            </MDBCol>
        </MDBRow>
    );
}
 
export default Content;