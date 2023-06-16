import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getProductDetail } from "../../Redux/actions";

const ItemDeatilProfile = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productDetail);
  const params = useParams();
  React.useEffect(() => {
    dispatch(getProductDetail(params.id));
  }, []);

  return (
    <div>ItemDeatilProfile</div>
  )
}

export default ItemDeatilProfile