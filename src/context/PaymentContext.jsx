import { createContext, useContext, useState } from "react";

const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentOpen, setPaymentOpen] = useState(false);

  const openPayment = (product) => {
    setSelectedProduct(product);
    setPaymentOpen(true);
  };

  const closePayment = () => {
    setPaymentOpen(false);
    setSelectedProduct(null);
  };

  return (
    <PaymentContext.Provider
      value={{
        selectedProduct,
        paymentOpen,
        openPayment,
        closePayment,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  return useContext(PaymentContext);
}