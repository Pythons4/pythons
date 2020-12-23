import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'


import ServecesApproved from './servecesapproved'
import ServecesNApproved from './servecesnotapproved'
import { responsiveFontSizes } from '@material-ui/core'

// import Button from '@material-ui/core/Button';


class AdminTabs extends Component {




    render() {

        const mystyle = {
            color: "#88BBC7",
            fontSize: "20px",
            padding: "10px",
            fontFamily: "'Times New Roman', Times, serif",
            background: "#E4E4E1",
            width: "500px",
            // paddingLeft: "50px",
            justifyContent: "center",
            cursor: "pointer",
            textAlign: "center",
            // transition: "all .2s ease-in-out",


        };




        const displayPosts = (
            <Tabs defaultIndex={1} onSelect={index => console.log(index)}>


                <TabList   >
                    <Tab style={mystyle} > Approved</Tab>
                    <Tab style={mystyle}> Not Approved   </Tab>




                </TabList >

                <TabPanel ><ServecesApproved /></TabPanel>
                <TabPanel><ServecesNApproved /></TabPanel>
            </Tabs >
        );






        return (
            <div >
                <h6>{displayPosts}</h6>
            </div >

        );







    }


}

export default AdminTabs


