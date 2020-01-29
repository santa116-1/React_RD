import React, { useState, Fragment } from 'react'
import Quantity from './Quantity'
import ProductImage from 'YesterTech/ProductImage'

function BrowseProductItem({ productId, name, price, imagePath }) {
  return (
    <div className="browse-product-item">
      <ProductImage src={imagePath} size={7} alt={name} />
      <div>{name}</div>
      <div className="spacing-small">
        <button className="button">Add To Cart</button>
        <div className="align-right">
          <Quantity />
        </div>
      </div>
    </div>
  )
}

export default BrowseProductItem
