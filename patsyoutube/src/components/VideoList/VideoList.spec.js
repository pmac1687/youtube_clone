import React from 'react';
import { shallow } from 'enzyme';
import VideoList from './index';

describe('VideoList', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<VideoList />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
