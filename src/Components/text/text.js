import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
// import '../background/background.module.css'
import classes from '../background/background.module.css';
import SpringModal from './modal';


const Text = () => {

    const [open, setOpen] = useState(false);

    const props3 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 2500
    })
    const props4 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 3000
    })
    const handleClick = (e) => {
        if (!open) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }

    return (
        <div className={classes.Text}>
            <animated.div style={props3}>
                <p className="modal-text">click below for details about THE BOOCH</p>
                <button type="button" className="btn btn-outline-dark modal-title"
                    onClick={handleClick}
                >synopsis</button>
            </animated.div>
            <animated.div style={props4}>
                <p className="modal-text">contact  |  hellomattneumann@gmail.com</p>
            </animated.div>
            <animated.div style={props3}>
                <SpringModal open={open} handleClick={handleClick}/>
            </animated.div>

        </div>)

}

export default Text;