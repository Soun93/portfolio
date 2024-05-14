import { useState } from 'react';
import { NavItem } from './NavItem';
import { NavButton } from './NavButton';

import './Nav.css'

export function Nav() {
  const INCREASE = true;
  const DECREASE = false;
  const MENU_OPTIONS = ['home', 'about', 'timeline','skills']
  const [position, setPosition] = useState(0);

  const changePosition = (direction) => {
    let newPosition;

    if (direction) {
        newPosition = (position + 1) % MENU_OPTIONS.length;
    } else {
        newPosition = (position - 1 + MENU_OPTIONS.length) % MENU_OPTIONS.length;
    }

    setPosition(newPosition);
}


  return (
    <nav>
      <NavButton changeMenu={() => changePosition(INCREASE)} srcButton='&lt;' />
      {MENU_OPTIONS.map((item, index) => (
        <NavItem key={index} selected={MENU_OPTIONS[position] == item } itemName={item}/>
      ))}
      <NavButton changeMenu={() => changePosition(DECREASE)} srcButton='&gt;' />
    </nav>
  )
}

export default Nav;