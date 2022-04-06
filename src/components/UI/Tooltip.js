// This component code modified from https://paladini.dev/posts/how-to-make-an-extremely-reusable-tooltip-component-with-react--and-nothing-else/

import React, { useState } from 'react';
import styles from './Tooltip.module.css';

const Tooltip = (props) => {
  let timeout;
  const [activeTip, setActiveTip] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActiveTip(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActiveTip(false);
  };

  return (
    <div className={styles['Tooltip-Wrapper']} onMouseEnter={showTip} onMouseLeave={hideTip}>
      {props.children}
      {activeTip && <div className={styles[`Tooltip-Tip ${props.direction || 'top'}`]}>{props.content}</div>}
    </div>
  );
};

export default Tooltip;

//props to pass to this component:
// content = could be JSX, text, images, other components, etc.
// direction = controls where tooltip will show (accepts top, right, bottom, left; default top)
// delay = time for tooltip to show in ms, default 400ms
