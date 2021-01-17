import React from 'react';
import { Button, Popover } from 'antd';
import { Image } from 'antd';

import { connect } from 'react-redux';
import './sidebar.css';


const ApartamentInfo = (props) => {

    const apartamentDetails = {
        location: 'Kiev Gogol street 59',
        price: '100$',
        places: '2 people'
    }
    const content = (
        <div>
            {/*
        
            */}
            <p>{apartamentDetails.location}</p>
            <p>{apartamentDetails.price}</p>
            <div>
                <span>3 гостя  · </span>
                <span>1 спальня  · </span>
                <span>2 кровати  · </span>
                <span>1 отдельная ванная</span>
            </div>
            <div>
                <span>Кондиционер  · </span>
                <span>WI-FI  · </span>
                <span>Parking </span>
            </div>
            <Button style={{ margin: 'auto', width: '100%' }} size="small" type="link">
                More
            </Button>
        </div>
    );
    return (
        <div
            className='apartament-container'
        >

            <div className='apartament-item'>
                <img
                    className='apartament-photo'
                    // preview={false}
                    // width={90}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <Popover content={content} title="Details" trigger="click">
                    <Button className='apartament-buy-button' type="primary">
                        Details
                    </Button>
                </Popover>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, null)(ApartamentInfo);