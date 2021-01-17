import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import "./menu.scss";

const MainMenu = () => {
    return (
        <Menu theme="dark" className="main-menu-container" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to='/'>Map</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to='/user'>User</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
                <Link to='/friends'>Friends</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />}>
                <Link to='/travel'>Travel</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<DesktopOutlined />}>
                <Link to='/login'>Login</Link>
            </Menu.Item>
        </Menu>
    );
}

export default connect(null, null)(MainMenu)