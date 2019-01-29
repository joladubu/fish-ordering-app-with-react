import React from 'react';
import { formatPrice } from '../helpers';

//importing module for emoji
// import Emoji from 'react-emoji-render';

class Fish extends React.Component {
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