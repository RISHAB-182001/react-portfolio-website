import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import codeThinking from './../../img/codeThinking.png'

const listTitleStyle = { fontWeight: 900, color:'#9B1FE8', marginBottom:'4px'}


const backendSkills =
    <ul>
        <li style = {listTitleStyle}>BACKEND</li>
        <li>Java-Mongo DB-Express JS-Node JS-Postgres</li>
    </ul>

const frontendSkills =
    <ul>
        <li style = {listTitleStyle}>FRONTEND</li>
        <li>HTML-CSS-JavaScript-React JS</li>
    </ul>

//Storing all the Skills in an Array-we can use const or let
const totalSkills= [backendSkills, frontendSkills]

//Place valid JavaScript codes inside JSX between curly braces as shown in lines 33-35
const Skills = () => {
    return ( 
        <div className={classes.Skills} id="skills">
            <PageHeader title={'What about the Skills?'}/>
            <p>
                I'm a life long learner and enjoy learning new stuff!
                Below are some programming languages, toolkits, 
                frameworks and libraries that I worked with and like.
                Some of them I control better than the other.
            </p>
            <div className={classes.Container}>
                <img src={codeThinking} alt="CodeThinking"/>
                {totalSkills.map(skills => {
                    return(
                        <div className={classes.List}>
                            {skills}
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Skills;