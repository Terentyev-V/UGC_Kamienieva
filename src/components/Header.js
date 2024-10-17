import React from "react";
import { Link } from 'react-router-dom';



export default function Header () {
    
  
    
  
    return (
        <>
        <div className="headerParent">
             
            <div className="header">
                <div className="headerH1">
                        <h1>UGC Creator</h1>
                </div>
                <div className="headerNav">
                <Link to="/section2">About Me</Link>
                    <a href="#gallery">Gallery</a>
                    <a href="#contacts">Contacts</a>
                </div>
            </div>
        </div>    
        </>
    )
  }