import classes from './Contact.module.css'
import {FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

const handleURL = (url) => {
    return () => window.open(url, "_blank")
}

const Contact = () => {
    return ( 
        <div className={classes.Contact} id="contact">
            <div className={classes.ContactIcons}>
            <FaYoutube color='white' size='30px' style={{padding: '1%'}}
            onClick={handleURL('https://studio.youtube.com/channel/UCt-kJPxl1ZT-ZmLqD6nK0WA/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D')} />
            <FaGithub color='white' size='30px' style={{padding: '1%'}}
            onClick={handleURL( 'https://github.com/RISHAB-182001?tab=repositories')} />
            <FaLinkedin color='white' size='30px' style={{padding: '1%'}}
            onClick={handleURL('https://www.linkedin.com/in/rishab-kashyap-029a841a4/')} />
            </div>
        </div>
     );
}
 
export default Contact;