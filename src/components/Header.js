import React from "react";
import { Link } from "react-scroll";



export default function Header () {
  
    return (
        <>
        <div className="headerParent">
            <div className="header">
                <div className="headerH1">
                        <h1>UGC Creator</h1>
                </div>
                <div className="headerNav">
                    <Link
                        to="aboutMe"
                        smooth={true}
                        duration={500}
                        offset={-70} >
                    About Me
                    </Link>

                    <Link to="gallery" smooth={true} duration={500} offset={-70}>
                    Gallery
                    </Link>

                    <Link to="contacts" smooth={true} duration={500} offset={-70}>
                    Contacts
                    </Link>
                </div>
            </div>
        </div>    
        </>
    )
  }