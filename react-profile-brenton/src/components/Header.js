import React from 'react';

import ProfileImage from "./images/profileImage.png";

const imageStyle = {
    border:"7em",
    width: "150px",
    height: "150px",
}


const Header = () => {
    return (
    <div class="header">
        <h1>Brenton Weaver</h1>
        <h3>Designer | Web Developer | Shower Singer</h3>
        <img style={{borderRadius: '75px',
                    position: 'absolute',
                    top: '30px',
                    right: '50px'}} 
            alt="profile of brenton" {...imageStyle} src={ProfileImage}></img>
    </div>
    )
};

export default Header;