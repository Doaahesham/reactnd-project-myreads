import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class BackButton extends Component {
    state = {  }
    render() { 
        return (
        <Link to='/' className="close-search">
        Close</Link> );
    }
}
 
export default BackButton;