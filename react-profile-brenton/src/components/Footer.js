import React from 'react';

import LinkedInIcon from "./icons/linkedin.png";
import GithubIcon from "./icons/github.png";
import EmailIcon from "./icons/email.png";
import InstagramIcon from "./icons/instagram.png";

const iconStyle = {
    height: "50px",
    width: "50px",
    margin: "5px",
}

const Footer = () => {
    return (
    <footer>
        <a href='https://www.linkedin.com/in/brenton-weaver-a140416a/' target="_blank" rel="noopener noreferrer"><img {...iconStyle} src={LinkedInIcon} alt="linkedIn logo Brenton Weaver" /></a>
        <a href='https://github.com/Brento20' target="_blank" rel="noopener noreferrer"><img {...iconStyle} src={GithubIcon} alt="Github logo Brenton Weaver" /></a>
        <img {...iconStyle} src={EmailIcon} alt="Email logo Brenton Weaver" />
        <a href='https://www.instagram.com/insert_your_face_here/' target="_blank" rel="noopener noreferrer"><img {...iconStyle} src={InstagramIcon} alt="Instagram logo Brenton Weaver" /></a>
        <div>
            <p>I acknowledge the Traditional Owners and Custodians of the lands on which we work
            and pay our respects to Indigenous Elders past, present and emerging.
            Designed by Brenton Weaver 2022</p>
        </div>
    </footer>
    )
};

export default Footer;