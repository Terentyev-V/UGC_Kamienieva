import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";



export default function Header () {

    const [offset, setOffset] = useState(-30); // Default offset

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth <= 480) {
        setOffset(-70); // offset for small screens
      } else if ((window.innerWidth <= 1370))
        setOffset(10); 
      else {
        setOffset(-30); // Default offset for larger screens
      }
    };

    updateOffset();

    // Update the offset whenever the window is resized
    window.addEventListener('resize', updateOffset);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateOffset);
    };
  }, []);
  
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
                        offset={offset} >
                    About Me
                    </Link>

                    <Link 
                    to="gallery" 
                    smooth={true} 
                    duration={500} 
                    offset={10}>
                    Gallery
                    </Link>

                    <Link 
                    to="contacts" 
                    smooth={true} 
                    duration={500} 
                    offset={-70}>
                    Contacts
                    </Link>
                </div>
            </div>
        </div>    
        </>
    )
  }