import React from "react";
import classnames from 'classnames'
import { Wallet } from "@mercadopago/sdk-react";
import { Context } from "../ContextProvider/ContextProvider";

const Payment = () => {
  const { preferenceId, orderData } = React.useContext(Context);
  const [isReady, setIsReady] = React.useState(false);
  const paymentClass = classnames('payment-form dark', {
    'payment-form--hidden': !isReady,
  });
// console.log(orderData)
  const handleOnReady = () => {
    setIsReady(true);
  }

  const renderCheckoutButton = (preferenceId) => {
    if (!preferenceId) return null;

    return (
      <Wallet 
        initialization={{ preferenceId: preferenceId }}
        onReady={handleOnReady} />
      )
  }

  return (
    <div className={paymentClass}>
      <div className="container_payment">
        <div className="block-heading">
          <h2>Información de Pago</h2>
          <p>Aquí verás un resúmen de lo que vas a pagar</p>
        </div>
        <div className="form-payment">
          <div className="products">
            <h2 className="title">Resumen</h2>
            <div className="item">
              <span className="price" id="summary-price">${orderData.price}</span>
              <p className="item-name">
                Carrito
              </p>
            </div>
            <div className="total">
              Total
              <span className="price" id="summary-total">${orderData.price}</span>
            </div>
          </div>
          <div className="payment-details">
            <div className="form-group col-sm-12">
              {renderCheckoutButton(preferenceId)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;