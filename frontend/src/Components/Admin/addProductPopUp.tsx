import React from "react";
import '../userprofile/profilestyle.css'
import { Checkbox, Grid, TextField } from "@material-ui/core";
import { addProduct } from "./AddProduct";
import FormControlLabel from '@material-ui/core/FormControlLabel';

//State Type
interface State {
    reviwesoursw: any,
    takethis: string,
    file: any,
    productname: string,
    productprice: string,
    productdescription: string,
    productquantity: number,
    producttype: boolean,
}

//props Type
interface Props {
    handleClose: any,
}
class AddProduct extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props)
        this.state = {
            reviwesoursw: '',
            takethis: '',
            file: '',
            productname: '',
            productprice: '',
            productdescription: '',
            productquantity: 0,
            producttype: false
        }

        this.handelimguplode = this.handelimguplode.bind(this)
        this.handelclikckimg = this.handelclikckimg.bind(this)
    }

    //fucnction to uplode image 
    handelimguplode(e: any) {
        const file = e.target.files
        this.previwefile(file)
        // console.log(file.name)
        this.setState({
            takethis: file.name,
            file: file,
        })
    }
    //fucnction retrive the uploded in the form
    previwefile(file: any) {
        const reader = new FileReader()
        reader.readAsDataURL(file[0])
        reader.onloadend = () => {
            this.setState({
                reviwesoursw: reader.result
            })
        }
    }

    //fucntion that send the data to (addProduct) function to be store in the database
    handelclikckimg() {
        console.log(this.state.takethis)
        // store.dispatch(updateuserimg(this.state.file, this.props))
        var productinfo = {
            name: this.state.productname,
            discrp: this.state.productdescription,
            type: this.state.producttype,
            price: this.state.productprice,
            quantity: this.state.productquantity
        }
        addProduct(this.state.file, productinfo)
    }



    render() {
        // console.log(this.state)
        return (
            <div className="popup-box">
                <div className="box">
                    <span className="close-icon" onClick={this.props.handleClose}>x</span>
                    <h3>enter product info</h3>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="product Name"
                                        name="productname"
                                        size="small"
                                        onChange={(e) => this.setState({
                                            productname: e.target.value,
                                        })}
                                        variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="product Price"
                                        name="productprice"
                                        size="small"
                                        onChange={(e) => this.setState({
                                            productprice: e.target.value,
                                        })}
                                        variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Product Quantity"
                                        name="productquantity"
                                        size="small"
                                        variant="outlined"
                                        type='number'
                                        onChange={(e) => this.setState({
                                            productquantity: parseInt(e.target.value),
                                        })}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox checked={this.state.producttype}
                                            onChange={(e) => this.setState({
                                                producttype: !this.state.producttype,
                                            })} />}
                                        label="Product Type"
                                    />

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Product Description"
                                        name="productdescription"
                                        size="small"
                                        type='textfield'
                                        variant="outlined"
                                        multiline
                                        rowsMax={12}
                                        onChange={(e) => this.setState({
                                            productdescription: e.target.value,
                                        })}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                    <input type='file' name='img' onChange={this.handelimguplode} ></input>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    {this.state.reviwesoursw && (<img style={{ width: '260px' }} src={this.state.reviwesoursw}></img>)}
                    <div>
                        <button onClick={() => {
                            // console.log('change image')
                            this.handelclikckimg()
                        }}>Test button</button>
                    </div>

                </div>
            </div>
        );
    }
};

export default AddProduct;