import react from "react";
import StripeCheckOut from "react-stripe-checkout";

interface Props {
    price: any
}

function StripeCheckOutButton(props: Props) {
    let priceStripe = props.price * 100;
    let key = "pk_test_51HxYRdICrWL5m2FNWABUKvBtta8W65FOeAJhls6MBFGtqLu1NPTVSD0PlMe9k8sDa1B5bLhr6Pus9XNpDdMS0vID003qTitFsD"
    let onToken = (token: any) => {
        console.log(token);
        alert("payment sucsse");
    }
    return (
        <StripeCheckOut
            label="Pay Now"
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