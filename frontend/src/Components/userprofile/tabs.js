import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './user.css'
import UserTips from './usertips'
import UserServeces from './userserveces'
import UserFevarets from './userfevareits'
import { responsiveFontSizes } from '@material-ui/core'

// import Button from '@material-ui/core/Button';


class Posts extends Component {




    render() {

        const mystyle = {
            color: "black",
            fontSize: "20px",
            padding: "10px",
            fontFamily: "'Times New Roman', Times, serif",
            background: "#E4E4E1",
            paddingLeft: "50px",
            // width: "30%",
            cursor: "pointer",
            textAlign: "center",
            transition: "all .2s ease-in-out",

        };

        const displayPosts = (
            <Tabs defaultIndex={1} onSelect={index => console.log(index)}>


                <TabList   >
                    <Tab style={mystyle} > Posts</Tab>
                    <Tab style={mystyle}> Serveces   </Tab>
                    <Tab style={mystyle}>  Fevarets  </Tab>




                </TabList >
                <TabPanel><UserTips /></TabPanel>
                <TabPanel><UserServeces /></TabPanel>
                <TabPanel><UserFevarets /></TabPanel>
            </Tabs >
        );






        return (
            <div >
                <h6>{displayPosts}</h6>
            </div >

        );







    }


}

export default Posts



