import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/victorzarzar7/" target="_blank">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/victorzarzar/" target="_blank">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/Victor-Zarzar" target="_blank">
                <GitHubIcon/>
            </a>
            <a href="">
                <TwitterIcon/>
            </a>
        </div>
    )
}