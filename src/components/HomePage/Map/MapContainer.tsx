import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import actions from "../../../redux/actions"
import Map from './Map';

const { location } = actions;

const mapStateToProps = (state: any) => ({ location: state.location })

export default compose<React.ComponentType>(
    connect(mapStateToProps, { ...location })
)(Map)