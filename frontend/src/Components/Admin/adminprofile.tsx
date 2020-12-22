import React, { useState } from 'react';
import store from '../../store';
import PopUp from './addProductPopUp'
import AdminTabs from './admintabs'
import './adminprofile.css';
import EmailIcon from '@material-ui/icons/Email';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    var test: any = store.getState().AdminReduser

    console.log(test.admininfo)
    return <div>
        <div className="container-admin">
            <div className="admin-header">
                <div className="admin-img">
                    <img src={JSON.parse(test.admininfo).admin_img}></img>
                </div>
                <div className="admin-nav-inf">
                    <h3 className="admin-name"> <p>{JSON.parse(test.admininfo).admin_name}</p></h3>
                    <div className="admin-address">
                        <p className="address">Palestine</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-body">
            <div className="left">
                <div className="admin-side">
                    <p className="admin-maile">

                        <EmailIcon id='icon'></EmailIcon>
                        {JSON.parse(test.admininfo).admin_email}
                    </p>

                    {/* <div className="button"> */}
                    <input className="button-add"
                        type="button"
                        value="Add Product"
                        onClick={togglePopup}
                    />



                    {/* </div> */}


                </div>
            </div>
            <div className="right-side">
                <div className="nav">
                    <AdminTabs />


                </div>

            </div>
        </div>


        {
            isOpen && <PopUp
                handleClose={togglePopup}
            />
        }




    </div >
}

export default App;


