import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory!!</h2>
                {/* Passing the addFish props from App.js to AddFFishForm component */}
                <AddFishForm addFish={this.props.addFish} />
                <button
                    onClick={this.props.loadSampleFishes}>
                    Load Sample Fishes
                </button>
            </div>

        )
    }
}

export default Inventory;