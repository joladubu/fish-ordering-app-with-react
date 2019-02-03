import React from 'react';
import propTypes from 'prop-types';
import { formatPrice } from '../helpers';

//importing module for emoji
// import Emoji from 'react-emoji-render';

class Fish extends React.Component {
    //decalaring proptypes for the fish componen
    static propTypes = {
        details: propTypes.shape({
            image : propTypes.string,
            name : propTypes.string,
            desc : propTypes.string,
            status : propTypes.string,
            price : propTypes.number
        }),
        addToOrder: propTypes.func,
    }

    handleClick = () => {
        this.props.addToOrder(this.props.index);
    };

    render() {
        // Using ES6 Destructuring
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';
        return(
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h4 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h4>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>
                    { isAvailable ? 'Add To Order' : 'Sold Out!' }
                </button>
            </li>
        );
    }
}



export default Fish;