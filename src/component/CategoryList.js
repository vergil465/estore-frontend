import React from 'react';
import PropTypes from 'prop-types';

const CategoryList = ({
  data, relationId, collector, selectedCategory,
}) => {
  const list = [];

  const checkBox = (item) => {
    const updatedSelectCategory = selectedCategory.some(value => value.id === item.id)
      ? selectedCategory.filter(value => value.id !== item.id)
      : selectedCategory.concat(item);
    collector(updatedSelectCategory);
  };

  data.map((item) => {
    if (item.relationId === relationId) {
      list.push(
        <li key={`category_${item.id}`}>
          <span>{item.name}</span>
          <input
            type="checkbox"
            id={item.id}
            name={item.name}
            onChange={checkBox.bind(this, item)}
          />
          <CategoryList
            data={data}
            relationId={item.id}
            collector={collector}
            selectedCategory={selectedCategory}
          />
        </li>
      );
    }
    return list;
  });
  return <ul key="category">{list}</ul>;
};

CategoryList.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]),
  relationId: PropTypes.number,
  collector: PropTypes.func,
  selectedCategory: PropTypes.oneOfType([PropTypes.array]),
};

CategoryList.defaultProps = {
  data: [],
  relationId: null,
  selectedCategory: [],
};


export default CategoryList;
