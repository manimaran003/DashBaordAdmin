import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { RouterData } from '../RouterData'
import { getStorageDetail } from '../Layout/StorageDetail'
import React from "react";
import { AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './PrivateRoute.scss';
import {Box,Drawer,AppBar,Toolbar,CssBaseline} from '@mui/material'
import 'antd/dist/antd.css';
import Header from "../Component/HeaderComponent/Header";

const drawerWidth = 240;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Dashboard', 'sub1', <AppstoreOutlined />),
    getItem('Appointment', 'sub2', <AppstoreOutlined />),
    getItem('Taskboard', 'sub3', <AppstoreOutlined />),
    getItem('Doctors', 'sub4', <AppstoreOutlined />),
    getItem('Patients', 'sub5', <AppstoreOutlined />),
];
const PrivateRoute = () => {
    const navigate = useNavigate()

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        if (e.key === "sub1") {
            navigate("/dashboard/maindashboard")
        }
        if (e.key === "sub2") {
            navigate("/dashboard/appointment")
        }
        if (e.key === "sub3") {
            navigate("/dashboard/taskboard")
        }
        if (e.key === "sub4") {
            navigate("/dashboard/doctors")
        }
        if (e.key === "sub5") {
            navigate("/dashboard/patients")
        }
    };
    const getRoutes = () => {
        let data = getStorageDetail()
        return RouterData?.map((item) => {
            if (item.layout === '/dashboard') {
                console.log(item)
                return data ? (<Route path={item.layout + item.path} element={item.component} />) : (<Navigate to="/" />)
            }
            else {
                return null;
            }
        })
    }
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "none !important" }}>
                    <Header />
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', background: "#f4f7f6 !important", borderRight: "0px" },
                    }}
                >
                    <Toolbar />
                    <Menu
                        onClick={onClick}
                        style={{ width: "100%", background: "#f4f7f6" }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                    />
                </Drawer>
                <Box component="main" className="main--body">
                    <Toolbar />
                    <Routes>
                        {getRoutes()}
                    </Routes>
                </Box>
            </Box>
        </div>
    )
}

export default PrivateRoute;