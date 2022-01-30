import classes from './Home.module.css'
import vector from './../../img/vector_edited2.png'
import binaryworld from './../../img/binaryworld.png'

const Home = () => {
    return ( 
        <div className={classes.Home} id="home">
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, World!</h1>
                <h1>Welcome to my website</h1>
            </div>
            <img className = { classes.vector } src = {vector} alt = "Vector" />
            <img className = { classes.binaryworld } src = {binaryworld} alt = "Binary World" />
        </div>
     );
}
 
export default Home;