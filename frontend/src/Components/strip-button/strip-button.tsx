import StripeCheckOut from "react-stripe-checkout";
import buyWhatInCart from "../../store/actions/buywhatincart";
import store from "../../store";
import "./stylestrip.css";
import { Button } from "@material-ui/core";

interface Props {
  price: any;
}

function StripeCheckOutButton(props: Props) {
  let { whatincart } = store.getState().cartReducer;
  let { userid } = store.getState().UserReducer;

  let priceStripe = props.price * 100;
  let key =
    "pk_test_51HxYRdICrWL5m2FNWABUKvBtta8W65FOeAJhls6MBFGtqLu1NPTVSD0PlMe9k8sDa1B5bLhr6Pus9XNpDdMS0vID003qTitFsD";
  let onToken = (token: any) => {
    let user_location = `country : ${token.card.address_country}, city : ${token.card.address_country} ,  address_line1 : ${token.card.address_line1}`;

    store.dispatch(buyWhatInCart(whatincart, userid, user_location));

    alert("payment sucsse");
  };

  return (
    <StripeCheckOut
      label="Checkout"
      name="Products"
      shippingAddress
      billingAddress
      description={`your total ${props.price}₪`}
      amount={priceStripe}
      panelLabel="Give Money"
      token={onToken}
      stripeKey={key}
    >
      <Button
        style={{
          color: "white",
          fontWeight: 600,
          fontSize: "10px",
          outline: "none",
        }}
      >
        Checkout
      </Button>
    </StripeCheckOut>
  );
}
export default StripeCheckOutButton;
