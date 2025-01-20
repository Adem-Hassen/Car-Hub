import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComp=() => {
  return (
    <Navbar style={{backgroundColor:"#d18726",height:"60px"}} >
        <Container >
          <Navbar.Brand  style={{color:'#080808'}} href="/"><div style={{display:"flex",alignContent:"left",alignItems:"left",marginTop:"10px"}} >Car <p style={{marginLeft:"3px",width:"60%",backgroundColor:"#080808",borderRadius:"7px"}}>Hub</p></div></Navbar.Brand>
        
        </Container>
      </Navbar>
  )
}

export default NavbarComp