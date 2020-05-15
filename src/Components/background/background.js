import React from 'react';
import classes from './background.module.css';
import Video from '../../Assets/BoochCut.mp4'
import Goo from '../goo/goo';
import { useSpring, animated } from 'react-spring'
import './background.css';


const Background = () => {

    const videoSource = Video
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 2000
    })
    const props2 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 2700
    })
  

    return (
        <div className={classes.Container}>

            <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
                <source src={videoSource} type="video/mp4" />
            </video>
            <div className={classes.Content}>
                <animated.div style={props} className={classes.SubContent}>
                    <h1 className={classes.Title}>THE BOOCH</h1>
                </animated.div>

                    <Goo />
              
                <div className={classes.SubContent}>
                    <animated.div style={props2}>
                        <h4 className="main-text">A short body horror film about a sinister Kombucha Scoby that provides untold wellness, but only in exchange for flesh.</h4>
                        <h2 className="author">by Matthew R. B. Neumann</h2>
                    </animated.div>

                </div>
            </div>

        </div>
    )
}

export default Background;