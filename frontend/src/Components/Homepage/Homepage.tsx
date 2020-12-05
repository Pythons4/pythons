import React, { Component } from 'react'
<<<<<<< HEAD
import { Layout, Menu, Breadcrumb } from 'antd';
=======
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';



import Navbar from './Navbar/Navbar'
>>>>>>> cedb8a63c01e9f03ddf2596d2c9d9c457501e5ee

const { Header, Content, Footer } = Layout;
const Homepage = (props: any) => {
    return (
<<<<<<< HEAD
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>

        </Layout>
=======



        <div className="homepage">
            <Navbar />
        </div>

>>>>>>> cedb8a63c01e9f03ddf2596d2c9d9c457501e5ee
    )

}

export default Homepage
