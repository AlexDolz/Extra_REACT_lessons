import React, { useEffect, useState } from 'react';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import {
  sortByDefaultAction,
  sortByPriceAscAction,
  sortByPriceDescAction,
  sortByRangeAction,
} from '../../store/productReducer';

const Filter = () => {
  const [{ from = '', to = '' }, setRange] = useState({});

  // useEffect(() => {
  //   setRange({from: '', to: ''})
  // }, []) // dlia reset na perehode stranici

  const dispatch = useDispatch();

  const handleSortOptions = event => {
    switch (event.target.value) {
      case 'default':
        dispatch(sortByDefaultAction());
        break;

      case 'priceDesc':
        dispatch(sortByPriceDescAction());
        break;

      case 'priceAsc':
        dispatch(sortByPriceAscAction());
        break;

      default:
        break;
    }
  };

  const handleRange = event => {
    const targetInput = event.target.name;
    const newValue = event.target.value.replace(',', '.');

    if (!isNaN(newValue)) {
      setRange(prevRange => ({
        ...prevRange,
        [targetInput]: newValue,
      }));
      const range = {
        from: targetInput === 'from' ? newValue : from || -Infinity,
        to: targetInput === 'to' ? newValue : to || Infinity,
      };

      dispatch(sortByRangeAction(range));
    }
  };

  return (
    <div>
      <label>
        Sorted
        <select onChange={handleSortOptions}>
          <option value='default'>by default</option>
          <option value='priceDesc'>by descending price</option>
          <option value='priceAsc'>by ascending price</option>
          <option value='title'>by title</option>
        </select>
      </label>
      <div className={s.range_wrapper}>
        <input
          type='number'
          step='0.1'
          min='0'
          placeholder='from'
          name='from'
          onChange={handleRange}
        />
        <input
          type='number'
          step='0.1'
          placeholder='to'
          name='to'
          onChange={handleRange}
        />
      </div>
    </div>
  );
};

export default Filter;
