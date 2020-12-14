import React, { useState } from 'react';
import store from '../../store';
import PopUp from './addProductPopUp'

interface Test {
    admininfo: any
}
function App() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    var test: Test = store.getState().AdminReduser

    console.log(test.admininfo)
    return <div>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img style={{ width: '300px' }} src={JSON.parse(test.admininfo).admin_img}></img>
        <p>{JSON.parse(test.admininfo).admin_name}</p>
        <p>{JSON.parse(test.admininfo).admin_email}</p>
        {isOpen && <PopUp
            handleClose={togglePopup}
        />}
        <input
            type="button"
            value="Add Product"
            onClick={togglePopup}
        />

    </div>
}

export default App;