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
        <img {...iconStyle} src={LinkedInIcon} alt="linkedIn logo Brenton Weaver" />
        <img {...iconStyle} src={GithubIcon} alt="Github logo Brenton Weaver" />
        <img {...iconStyle} src={EmailIcon} alt="Email logo Brenton Weaver" />
        <img {...iconStyle} src={InstagramIcon} alt="Instagram logo Brenton Weaver" />
        <div>
            <p>I acknowledge the Traditional Owners and Custodians of the lands on which we work
            and pay our respects to Indigenous Elders past, present and emerging.
            Designed by Brenton Weaver 2022</p>
        </div>
    </footer>
    )
};

export default Footer;