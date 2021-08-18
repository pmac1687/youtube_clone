/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { useState } from 'react';
import SearchForm from './SearchForm';

const NavBar = (): JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const handleClick = () => {
    console.log('click 2');
    setSearchText(_prev => '');
  };
  return (
    <nav className='navbar navbar-light bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand text-white'>U-TUBE</a>
        <SearchForm searchText={searchText} setSearchText={setSearchText} handleClick={handleClick} />
      </div>
    </nav>
  );
};

export default NavBar;
