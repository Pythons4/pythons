import react from "react";
import StripeCheckOut from "react-stripe-checkout";
import buyWhatInCart from '../../store/actions/buywhatincart';
import store from '../../store';



interface Props {

    price: any
}

function StripeCheckOutButton(props: Props) {
    let { whatincart } = store.getState().cartReducer;

    let priceStripe = props.price * 100;
    let key = "pk_test_51HxYRdICrWL5m2FNWABUKvBtta8W65FOeAJhls6MBFGtqLu1NPTVSD0PlMe9k8sDa1B5bLhr6Pus9XNpDdMS0vID003qTitFsD"
    let onToken = (token: any) => {
        store.dispatch(buyWhatInCart(whatincart));

        console.log(token);
        console.log(whatincart);

        alert("payment sucsse");
    }
    return (
        <StripeCheckOut
            label="confirm && Pay Now"
            name="Products"
            shippingAddress
            billingAddress
            description={`your total${props.price}`}
            amount={priceStripe}
            panelLabel="Give Money"
            token={onToken}
            stripeKey={key}


        />
    )
}
export default StripeCheckOutButton 