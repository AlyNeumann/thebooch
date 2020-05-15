import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import './modal.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal(props) {
  const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
      {/* <button type="button" onClick={props.handleClick}>
        react-spring
      </button> */}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClick}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title"className="modal-title">THE BOOCH</h2>
            <p id="spring-modal-description" className="modal-text">When a homebrew kombucha grants Nola, a depressed freelance copywriter, supernatural wellness and energy, the strange creature floating in the tank begins making dark demands. Nola is a young, cynical, out of work writer, perpetually low on cash and energy, she struggles both to get by in the world and sometimes, just to get out of bed in the morning. This all changes when Nola takes a freelance job from a mysterious new health food company, writing an advertorial How-To blog for a Kombucha Brewing kit. Nola, skeptical of all things health and wellness, is surprised when the drink grants her supernatural levels of health, energy, and wellbeing. With this newfound confidence and ambition, Nola sets out to turn her life around. But, there’s a catch. In exchange for providing wellness, the strange Jellyfish like creature in the Kombucha tank begins making bloody, bone-chilling demands. Nola is forced to choose: return to her shambling aimless life, or capitulate to dark desires of this semi-aquatic health-food monstrosity.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}