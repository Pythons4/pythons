import StripeCheckOut from "react-stripe-checkout";
import buyWhatInCart from '../../store/actions/buywhatincart';
import store from '../../store';



interface Props {

    price: any
}

function StripeCheckOutButton(props: Props) {
    let { whatincart } = store.getState().cartReducer;
    let { userid } = store.getState().UserReducer

    let priceStripe = props.price * 100;
    let key = "pk_test_51HxYRdICrWL5m2FNWABUKvBtta8W65FOeAJhls6MBFGtqLu1NPTVSD0PlMe9k8sDa1B5bLhr6Pus9XNpDdMS0vID003qTitFsD"
    let onToken = (token: any) => {
        let user_location = `country : ${token.card.address_country}, city : ${token.card.address_country} ,  address_line1 : ${token.card.address_line1}`

        // let data = {
        //     user_id: userid,
        //     user_product_location: user_location,
        //     user_products: JSON.parse(whatincart)

        // }

        store.dispatch(buyWhatInCart(whatincart, userid, user_location));

        // console.log(data, "data");
        console.log(token, "payment");
        console.log(whatincart, "whaticart");



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