import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Tooltip } from 'antd';
import classNames from 'classnames';
import './sidebar.css';

const TicketInfo = (props) => {
    const ways = [
        { duration: 100, type: 'fly', transferPlace: '' },
        { duration: 100, type: 'transfer', transferPlace: 'place 1' },
        { duration: 160, type: 'fly', transferPlace: '' },
        { duration: 155, type: 'transfer', transferPlace: 'place 2' },
        { duration: 80, type: 'fly', transferPlace: '' },
        { duration: 155, type: 'transfer', transferPlace: 'place 2' },
        { duration: 80, type: 'fly', transferPlace: '' },
    ];
    const flyTime = {
        start: '23-15',
        end: '14-28'
    }
    const totalTime = ways.reduce((total, current) => total + current.duration, 0);

    const _roundDuration = ({duration}) => Math.round(duration * 24 / totalTime);

    const _increaseMaxValue = (acc, current, index, array) => {
        if (index === array.length - 1) {
            const lastSum = acc.sum + current;
            if (lastSum === 23) array[index] += 1;
            return array
        }
        return {
            index,
            value: acc.value < current ? current : acc.value,
            sum: acc.sum + current
        }
    }

    const percentWays = ways.map(_roundDuration).reduce(_increaseMaxValue, { index: "", value: 0, sum: 0 });

    const way = ways.map((way, index) => {
        const wayClass = classNames({
            'way': true,
            "flying": index % 2 === 0,
            "transfering": index % 2 !== 0,
        })
        const hours = Math.floor(way.duration / 60);
        const minutes = way.duration % 60;
        const time = `${hours}h ${minutes}m`
        const text = way.type === 'fly' ? `The flight lasts ${time} hours` : `Transfer lasts ${time} hours at ${way.transferPlace}`

        return (
            <Tooltip title={text} color={'red'} key={index}>
                <Col span={percentWays[index]} className={wayClass}></Col>
            </Tooltip>
        );
    });

    return (
        <div className='ticket-info-container'>
            <Row>
                <Col span={4}><span className='flight-time'>{flyTime.start}</span></Col>
                <Col span={16}>
                    <div id='row'>
                        <Row>{way}</Row>
                    </div>
                </Col>
                <Col span={4}><span className='flight-time'>{flyTime.end}</span></Col>
            </Row>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, null)(TicketInfo);