/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Search } from 'react-bootstrap-icons';

type Props = {
  handleClick: () => void;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
};

const SearchForm = ({ handleClick, searchText, setSearchText }: Props): JSX.Element => {
  return (
    <form className='d-flex input-group w-auto'>
      <input
        type='search'
        onChange={e => {
          setSearchText(e.target.value);
        }}
        className='form-control rounded'
        value={searchText}
        title='inputForm'
        id='inputForm'
        placeholder='Search'
        aria-label='Search'
        aria-describedby='search-addon'
      />
      <span onClick={handleClick} title='Submit' className='input-group-text border-0' id='search-addon'>
        <Search />
      </span>
    </form>
  );
};

export default SearchForm;
