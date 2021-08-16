import React from 'react';
import { shallow } from 'enzyme';
import VideoPlayer from './index';

describe('VideoPlayer', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<VideoPlayer />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
