import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Footer from '../Footer';
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import VideoList from '../VideoList';
import VideoPlayer from '../VideoPlayer';

describe('App', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });

  it('should render the Footer Component', () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });

  it('should render the NavBar Component', () => {
    expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  });

  it('should render the SideBar Component', () => {
    expect(wrapper.containsMatchingElement(<SideBar />)).toEqual(true);
  });

  it('should render the VideoList Component', () => {
    expect(wrapper.containsMatchingElement(<VideoList />)).toEqual(true);
  });

  it('should render the VideoPlayer Component', () => {
    expect(wrapper.containsMatchingElement(<VideoPlayer />)).toEqual(true);
  });
});
