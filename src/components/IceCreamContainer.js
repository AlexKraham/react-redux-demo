import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()

  const handleBuyIceCream = () => {
    dispatch(buyIceCream())
  }

  return (
    <div>
      <h2>Number of Ice Creams: {numOfIceCreams}</h2>
      <button onClick={handleBuyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

export default IceCreamContainer
