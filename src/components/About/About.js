import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../img/MyFaceEdited.png'

const About = () => {
    return ( 
        <div className={classes.AboutMe} id="about">
            <PageHeader title="About Me"/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello! I'm Rishab</h2>
                    <p>I'm a Computer Science Engineering student from PES University, Bangalore, India.
                     I am passionate about building Websites and also interested in the stream of Artificial Intelligence.
                    This is my first ever Portfolio Page. Hope you like it!
                    I have linked my GitHub and other social media accounts below. 
                    Please feel free to contact me on my email rishab182001@gmail.com for any queries.
                    </p>
                </div>
                <div className={classes.Image}>
                    <img className = { classes.Me } src = {me} alt = "me"/>
                </div>
            </div>
        </div>
     );
}
 
export default About;