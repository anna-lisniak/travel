import React, { useState } from 'react';
import { connect } from "react-redux"
import { Layout, Menu } from 'antd';
import { faTicketAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ApartamentInfo from '../Map/Sidebar/ApartamentInfo';
import TicketInfo from '../Map/Sidebar/TicketInfo';
import Collapse from '../Collapse';
import MainMenu from './Menu';
import 'antd/dist/antd.css';
import './main.css';

const { Content, Footer, Sider } = Layout;

const Main = ({ children }) => {
    const [collapsedMenu, setCollapsedMenu] = useState(false);
    const [collapsedInfo, setCollapsedInfo] = useState(false);
    const url = new URL(window.location.href).pathname;

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsedMenu} onCollapse={() => setCollapsedMenu(!collapsedMenu)}>
                <div className="logo" >LOGO</div>
                <MainMenu />
            </Sider>

            {url === "/" && <Sider collapsible collapsed={collapsedInfo} onCollapse={() => setCollapsedInfo(!collapsedInfo)} width={400}>
                <div className="logo" >INFOX</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Collapse
                        title='Tickets'
                        collapseVisible={!collapsedInfo}
                        icon={<FontAwesomeIcon icon={faTicketAlt}></FontAwesomeIcon>}
                    ><TicketInfo /></Collapse>
                    <Collapse
                        title='Apartaments'
                        collapseVisible={!collapsedInfo}
                        icon={<FontAwesomeIcon icon={faHome}></FontAwesomeIcon>}
                    ><ApartamentInfo /></Collapse>
                </Menu>
            </Sider>}
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Fly and make your friends</Footer>
            </Layout>
        </Layout>
    );
}
const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, null)(Main);
