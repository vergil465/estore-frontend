import React from 'react';
import { shallow } from 'enzyme';
import ErrorField from './ErrorField';

const props = {
  errorMessages: [
    'error1',
    'error2',
    'error2',
  ],
};

describe('ErrorField test', () => {
  const wrapper = shallow(<ErrorField errors={props.errorMessages} />);

  it('should render 2 list items based on props.errorMessages where is 1 duplicate message', () => {
    expect(wrapper.find('.error-list').children()).toHaveLength(2);
    console.log(wrapper.debug());
  });

  it('should render error message when its provided', () => {
    expect(wrapper.find('.error-list').first().children().map(child => child.childAt(0).text())).toEqual(['error1', 'error2']);
  });
});
