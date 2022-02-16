import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(((state) => state.greetingsReducer));
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <h1>
      {greeting[0]}
    </h1>
  );
};

export default Greeting;
