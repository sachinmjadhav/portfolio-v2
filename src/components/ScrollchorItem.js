import React, { useRef } from 'react';
import Scrollchor from 'react-scrollchor';

function ScrollchorItem({ to, children, className }) {
  const scrollRef = useRef();
  return(
    <span onClick={e => scrollRef.current.simulateClick(e)} className={className}>
      <Scrollchor to={to} ref={scrollRef} animate={{duration: 500}}>
        {children}
      </Scrollchor>
    </span>
  )
}

export default ScrollchorItem;