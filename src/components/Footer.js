import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer_container">
      <a className="social_icon" href="https://www.facebook.com/ozan.gursucu">
        <FacebookIcon />
      </a>
      <a className="social_icon" href="https://www.instagram.com/ozngrsc/">
        <InstagramIcon />
      </a>
      <a className="social_icon" href="https://github.com/ozngrsc">
        <GitHubIcon />
      </a>
      <a className="social_icon" href="https://twitter.com/OznGrsc_">
        <TwitterIcon />
      </a>
      <a
        className="social_icon"
        href="https://www.linkedin.com/in/ozan-g%C3%BCrsucu-82ba20b5/"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

export default Footer;
