import React, { useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import './collapse.css';

const Collapse = ({ title, collapseVisible, icon, children }) => {
    const setContentHeight = elm => {
        if (!elm) return;
        elm.style.setProperty('--content-max-height', `${elm.scrollHeight}px`);
    }
    
    const headerTitle = title || 'title'
    const [collapse, setCollapse] = useState(true);
    const iconVisible =  collapseVisible ? (collapse ? <CaretDownOutlined /> : <CaretUpOutlined />) : icon;

    const collapsed = () => {
        if (collapseVisible) {
            setCollapse(!collapse)
        }
    }

    const collapseClass = classNames({
        'collapse-container': true,
        'collapse-unvisible': !collapseVisible,
        'collapse-container-open': !collapse
    });
    const contentClass = classNames({
        'content-container': true,
        'content-closed': collapse,
        'content-opened': !collapse
    });
    const headerClass = classNames({
        'header': true,
        'collapse-unvisible': !collapseVisible,
    })

    return (
        <div className={collapseClass}>
            <div className={headerClass} onClick={collapsed}>
                {iconVisible}
                {collapseVisible && <span className='header-title'>{headerTitle}</span>}
            </div>
            {collapseVisible && <div className={contentClass} ref={setContentHeight}>
                <div className='content'>
                    {children}
                </div>
            </div>}
        </div>
    )
}


const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, null)(Collapse);