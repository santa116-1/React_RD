import React from 'react'
import ReactDOM from 'react-dom'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import Heading from 'YesterTech/Heading'
import StarRatings from 'YesterTech/StarRatings'

const products = [
  { id: 1, name: 'Mario Kart', rating: 5, brand: 'Nintendo', condition: 'new' },
  { id: 2, name: 'Donkey Kong', rating: 3.5, brand: 'Nintendo', condition: 'good' },
  { id: 3, name: 'Nintendo NES', rating: 4, brand: 'Nintendo', condition: 'fair' },
]

function ProductProfile() {
  return <span>{/* Exercise code goes here! */}</span>
}

ReactDOM.render(<ProductProfile />, document.getElementById('root'))
