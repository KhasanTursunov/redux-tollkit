import React from 'react'
import { useSelector } from 'react-redux'
const Header = () => {
  const counter = useSelector((state) => state.counter.value)
  console.log(counter);
  return (
    <div>Header {counter}</div>
  )
}

export default Header