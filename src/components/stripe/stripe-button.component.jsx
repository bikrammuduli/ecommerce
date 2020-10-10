import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HaelmL9X1ukH5rCpPKQEp97eoVUlmFfZCvGPXEnfViKGnEoKSX9sLia0Gk7DqHscVCrw04lPEueQ9jpTovBCHYO00tEBorqOz";
  const onToken = (token) => {
    console.log(token);
    alert("Payment is successful!");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="accenture"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
