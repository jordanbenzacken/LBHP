import React from 'react';
import Badge from 'material-ui/Badge';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './basket.css';

class Basket extends React.Component {
    render() {
        return (
            <div data-component='basket'>
                <Link to={this._getBasketDetailRoute()}>
                    <MuiThemeProvider>
                        {this._renderBasketIcon()}
                    </MuiThemeProvider>
                </Link>
            </div>
        )
    };
    _renderBasketIcon() {
        const basketCount = this.props.basket && this.props.basket.length;
        let badgeStyle;
        if (!basketCount) {
            badgeStyle = {
                backgroundColor: 'transparent'
            }
        }
        return (
            <Badge badgeContent={basketCount} primary={true} badgeStyle={badgeStyle}>
                <i class="material-icons">shopping_cart</i>
            </Badge>
        );
    };

    _getBasketDetailRoute() {
        return ('/basket/detail')
    }
}

export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {}))(Basket);