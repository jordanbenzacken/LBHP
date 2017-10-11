import React from 'react';
import Badge from 'material-ui/Badge';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';
import './basket.css';

class Basket extends React.Component {
    render() {
        const basketCount = this.props.basket && this.props.basket.length;
        return (
            <div data-component='basket'>
                <MuiThemeProvider>
                    <Badge badgeContent={basketCount} primary={true}>
                        <i class="material-icons">shopping_cart</i>
                    </Badge>
                </MuiThemeProvider>
            </div>
        )
    }
};

export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {}))(Basket);