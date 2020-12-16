import React, { useState } from 'react';
import store from '../../store';

interface Test {
    userinfo: any
}
function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenbio, setIsOpenbio] = useState(false);


    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const togglePopupbio = () => {
        setIsOpenbio(!isOpenbio)
    }
    var test: Test = store.getState().UserReducer

    console.log(test)
    return <div>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img style={{ width: '300px' }} src={JSON.parse(test.userinfo).user_img}></img>
        <input
            type="button"
            value="change image"
            onClick={togglePopup}
        />
        <p>{JSON.parse(test.userinfo).user_name}</p>
        <p>{JSON.parse(test.userinfo).user_email}</p>
        <p>{JSON.parse(test.userinfo).user_phon}</p>
        <p>{JSON.parse(test.userinfo).user_bio}</p>



        <input
            type="button"
            value="change bio"
            onClick={togglePopupbio}
        />

    </div>
}

export default App;