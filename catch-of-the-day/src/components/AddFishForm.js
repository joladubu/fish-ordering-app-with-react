import React from 'react';
import PropTypes from 'prop-types'

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
        addFish : PropTypes.func
    }

    createFish = event => {
        event.preventDefault()

        const fish = {
            name:  this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status:this.statusRef.current.value,
            desc:  this.descRef.current.value,
            image: this.imageRef.current.value,
        };
        // Passing the fish object  above to the addFish method received via props
        this.props.addFish(fish);

        //refresh the form after new entry is submitted
        event.currentTarget.reset();
    };
    render() {
        return (
            <div className="fish-edit">
                <form onSubmit={this.createFish}>
                    <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                    <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                    <select name="status" ref={this.statusRef}>
                        <option value="available">Fresh</option>
                        <option value="unavailable">Sold Out!!</option>
                    </select>
                    <textarea name="desc" ref={this.descRef} placeholder="Desc"></textarea>
                    <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
                    <button type="Submit">+ Add Fish</button>
                </form>
            </div>

        )
    }
}

export default AddFishForm;