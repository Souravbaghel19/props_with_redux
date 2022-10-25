import React from 'react'

function Header(props) {
  console.log("Header", props.data)
  return (
    <div>
      <div className="add-to-Cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="cart image.png" />
      </div>
    </div>
  )
}
export default Header