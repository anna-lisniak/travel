import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import actions from "../../../redux/actions"
import Header from './header';

const { ticket } = actions;

const mapStateToProps = (state: any) => ({ ticket: state.ticket, location: state.location.currentLocation })

export default compose<React.ComponentType>(
    connect(mapStateToProps, { ...ticket })
)(Header)