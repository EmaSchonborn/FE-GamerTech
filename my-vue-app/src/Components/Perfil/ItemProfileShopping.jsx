import React from 'react'
import ItemProfileShoppingDetail from './ItemProfileShoppingDetail'

const ItemProfileShopping = ({purchase, id, cl}) => {
  const [click, setClick] = React.useState(cl);
  const handleClick = (e) => {
    e.preventDefault();
    setClick(!click);
  }
  return (
    <li>
        <h1>Codigo de la orden de compra : {id}</h1>
        <button onClick={(e) => handleClick(e)}>Ver detalles de la compra</button>
        {click &&
            purchase.map((product) => {
                return <ItemProfileShoppingDetail key={product.id} id={product.id} quantity={product.quantity}/>
        })
        }
    </li>
  )
}

export default ItemProfileShopping