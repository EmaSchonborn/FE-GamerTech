import React, { useEffect } from 'react'
import styles from './ProfileShopping.module.css'
import { useSelector, useDispatch } from "react-redux";
import { getAllPurchasesById } from "../../Redux/actions";
import ItemProfileShopping from './ItemProfileShopping';

const ProfileShopping = ({input}) => {
  const dispatch = useDispatch();
  const purchaseByUser = useSelector((state) => state.userPurchases);
  const id = localStorage.getItem("id");
  useEffect(() => {
    dispatch(getAllPurchasesById(id));
  }, []);
  const click = new Array(purchaseByUser.length).fill(false);
  return (
    <>
      <h1 className={styles.title}>{input}</h1>
      <ul>
        {purchaseByUser.length > 0 ?
          purchaseByUser.map((purchase, index) => {
            return <ItemProfileShopping key={purchase.id} purchase={purchase.productsId} id={purchase.id} cl = {click[index]}/>
        })
        : <h1>No hay compras</h1>}
      </ul>
    </>
  )
}

export default ProfileShopping