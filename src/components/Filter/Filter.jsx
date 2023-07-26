import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterName, getFilter } from 'redux/filterSlice';

// Компонент для пошуку, фільтрації данних при введені у інпут
export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(getFilter);
  const changeValue = e => dispatch(filterName(e.target.value));
  return (
    <label>
      Find contact by name
      <input type="text" value={filter} onChange={changeValue} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
