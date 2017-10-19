import React from 'react';
import { Link } from 'react-router-dom';
import Basket from '../basket';
import logo from '../../assets/logo.svg';

class Header extends React.Component {
    render() {
        return (
            <div data-component='header'>
                <Link to={"/"}>
                    <img src={logo} className="app-logo" alt="logo" />
                </Link>
                <h1 className="App-title">Welcome to Potier Store</h1>
                <Basket />
            </div>
        )
    };
}

export default Header;