import React, { Children } from 'react'
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/features/count.slice';

export const Button = ({children, onClick, disabled=false}) => {
  return <button disabled={disabled} onClick={onClick} className='p-2 bg-red-200'>
    {children}
  </button>;
}

const Footer = () => {
  const dispatch = useDispatch()
  // const count =  useSelector(state => state.counter.value)
  return (
    <div>
      <p>Footer</p>
      <Button onClick={() => dispatch(increment())}>
        <span>Increment</span>
      </Button>
      <Button  onClick={() => dispatch(decrement())}>
        <span>Decrement</span>
      </Button>
    </div>
  );
}

export default Footer