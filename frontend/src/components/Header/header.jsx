import css from './header.css';
import React from 'react';
import Button from '@mui/material/Button';

function Header() {
  return (
    <header className='header'>
      <div className='buttons'>
        <Button variant="contained">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Outlined</Button>
      </div>
    </header>
  );
}

export default Header;