import React from 'react';

import ProfileImage from "./images/profileImage.png";

const imageStyle = {
    border:"7em white",
    height: "150px",
    Width: "150px",
}


const Header = () => {
    return (
    <div class="header">
        <h1>Brenton Weaver</h1>
        <h3>Designer | Web Developer | Shower Singer</h3>
        <img style={{borderRadius: '75px'}} alt="profile of brenton" {...imageStyle} src={ProfileImage}></img>
    </div>
    )
};

export default Header;