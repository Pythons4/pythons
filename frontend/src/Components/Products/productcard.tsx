//the file that show information for single product
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import store from "../../store";
import { addtocart } from "../../store/actions/addtocartaction";

//props type
interface Props {
  price: number;
  imge: string;
  name: string;
  location: {
    state: {
      theproduct: {
        product_quantity: number;
        product_description: string;
        product_price: number;
        product_name: string;
        product_img: string;
        _id: string;
      };
    };
  };
}

//product type
interface Product {
  product_quantity: number;
  product_description: string;
  product_price: number;
  product_name: string;
  product_img: string;
  _id: string;
}
interface State {
  quantity: number;
}
let theproduct: Product;
export default class ProductsCard extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      quantity: 1,
    };

    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.addtothecart = this.addtothecart.bind(this);
  }

  incrementQuantity() {
    if (this.state.quantity + 1 > theproduct.product_quantity) {
      return alert("you reach the limit")
    }
    this.setState({
      quantity: this.state.quantity + 1,
    });
  }
  decrementQuantity() {
    if (this.state.quantity)
      this.setState({
        quantity: this.state.quantity - 1,
      });
  }
  addtothecart() {
    console.log("in");
    store.dispatch(
      addtocart(
        {
          quantity: this.state.quantity,
          name: theproduct.product_name,
          img: theproduct.product_img,
          price: theproduct.product_price,
        },
        theproduct._id
      )
    );
    var storedata = store.getState();
    console.log(storedata);
    window.location.reload();
  }
  render() {
    theproduct = this.props.location.state.theproduct;

    return (

      <div className="product">
        <div className="left-product">
          <img
            alt='theproduct'
            src={theproduct.product_img}
            data-holder-rendered="true"
          />

          <div className="quantity">
            <button
              className="btn minus-btn"
              type="button"
              onClick={this.decrementQuantity}
            >
              -
            </button>
            <input
              type="text"
              id="quantity"
              value={this.state.quantity}
            ></input>
            <button
              className="btn plus-btn"
              type="button"
              onClick={this.incrementQuantity}
            >
              +
            </button>

            <Button style={{ height: "45px", width: "50%" }}
              onClick={this.addtothecart}
              endIcon={<ShoppingCartIcon></ShoppingCartIcon>}
              id="addtocart"
              variant="contained"
              color="primary"

            >
              Add to Cart
          </Button>
          </div>

        </div>

        <div className="right-product">

          <h2 >{theproduct.product_name}</h2>
          <h4 > Price {theproduct.product_price} ₪ </h4>
          <h5 > Quantity {theproduct.product_quantity}</h5>

          <p className="desc">{theproduct.product_description}</p>



        </div>
      </div>







    );
  }
}


