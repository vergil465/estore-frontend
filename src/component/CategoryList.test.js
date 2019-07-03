import React from 'react';
import { shallow } from 'enzyme';
import CategoryList from './CategoryList';

const data = [
  {
    id: 1,
    relationId: null,
    name: 'Test1',
    status: true,
  },
];

describe('CategoryList test', () => {
  const wrapper = shallow(
    <CategoryList
      data={data}
      relationId={null}
      collector={data}
      selectedCategory={data}
    />
  );
  it('should render 3 list items based on data', () => {
    expect(wrapper.find('li').children()).toHaveLength(3);
    console.log(wrapper.debug());
  });
});
