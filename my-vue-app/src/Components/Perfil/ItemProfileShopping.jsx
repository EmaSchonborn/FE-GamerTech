import React from 'react'
import ItemProfileShoppingDetail from './ItemProfileShoppingDetail'

const ItemProfileShopping = ({purchase, id, cl}) => {
  const [click, setClick] = React.useState(cl);
  const handleClick = (e) => {
    e.preventDefault();
    setClick(!click);
  }
  return (
  <div className='flex flex-col items-start p-2 w-96 justify-center bg-white shadow'>
    <li>
        <h1>Codigo de la orden de compra : {id}</h1>
        <br/>
        <button onClick={(e) => handleClick(e)} className='bg-nintendo p-2 text-slate-50'>Ver detalles</button>
        {click &&
            purchase.map((product) => {
                return <ItemProfileShoppingDetail key={product.id} id={product.id} quantity={product.quantity} />
        })
        }
    </li>
    </div>
  )
}

export default ItemProfileShopping