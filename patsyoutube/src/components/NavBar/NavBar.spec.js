import React from 'react';
import { shallow, mount } from 'enzyme';
import NavBar from './index';
import SearchForm from './SearchForm';
import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<NavBar />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});

test('check SearchForm input works', () => {
  // Render a checkbox with label in the document
  const setSearchText = jest.fn();
  const checkbox = mount(<SearchForm setSearchText={setSearchText} />);

  const inputForm = checkbox.find('input');
  inputForm.value = 'Search';

  expect(inputForm.value).toEqual('Search');

  inputForm.value = 'hello';

  inputForm.simulate('change');

  expect(inputForm.value).toEqual('hello');
});

test('calls submit when clicked', () => {
  const handleClick = jest.fn();
  render(<SearchForm handleClick={handleClick} />);
  const submit = screen.getByTitle('Submit');
  const inputForm = screen.getByTitle('inputForm');
  fireEvent.click(submit);
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(inputForm.value).toEqual('');
});
