import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
const Navbar = () => {
    return ( 
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='http://gibsoncityillinois.com/wp-content/uploads/2018/06/reminder-1024x638.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            Friendly Reminder
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    );
}
 
export default Navbar;