    import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';


class App extends React.Component {

    //creating a State
    state = {
        // states to be used
        fishes: {},
        order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        //first reinstate our local storage
        const localStorageRef = localStorage.getItem(params.storeId)
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef)})
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: "fishes"
        });
    }

    componentDidUpdate() {
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order)
        );
    }

    componentWillUnmount() {
        base.removeBinding(this.ref); // removing referece to database
    }

    //  A State Method that takes in a Fish
    addFish = fish => {
        // Steps to Updating State
        // 1. Taking a copy of the existing state to avoid mutation
        const fishes = { ...this.state.fishes } // using the spread operator ...

        //2. Add New fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;

        /*3. Set the new fishes object to state i.e overridong
        the state(fishes) to the current fishes
        */
        this.setState({ fishes });
    };


    updateFish = (key, updatedFish) => {
        // 1. Take a copy of the current state
        const fishes = {...this.state.fishes};
        //2. Update that stdate
        fishes[key] = updatedFish;
        //3. Set that to State
        this.setState({ fishes});
    }


    deleteFish = (key) => {
        //1. take a copy of state
        const fishes = {...this.state.fishes};
        //2. Update State
        fishes[key] = null;
        //3. Update State
        this.setState({ fishes });
    }

        // A method to load Fishes
    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = (key) => {
        // 1. Take copy of order
        const order = {...this.state.order}

        // 2. Either add to Order or update the number in our order
        order[key] = order[key] + 1 || 1;

        // 3. Call SetState to update our object
        this.setState({ order });
    }

    removeFromOrder = (key) => {
        // 1. Take copy of order
        const order = {...this.state.order}

        //2. Remove that item from Order
        delete order[key];

        // 3. Call SetState to update our object
        this.setState({ order });
    }

 render() {
     return(
         <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market"/>
                <ul className="fishes">
                    {Object.keys(this.state.fishes).map(key => (
                        <Fish
                            key={key}
                            index={key}
                            details={this.state.fishes[key]}
                            addToOrder={this.addToOrder}
                        />
                    ))}
                </ul>
            </div>
            <Order
                fishes={this.state.fishes}
                order={this.state.order}
                removeFromOrder={this.removeFromOrder}/>
            {/*passing the addFish here as a prop for the AddFIsh component
            and loadSampleFishes for the Inventory component */}
            <Inventory
                addFish={this.addFish}
                updateFish={this.updateFish}
                deleteFish={this.deleteFish}
                loadSampleFishes={this.loadSampleFishes}
                fishes={this.state.fishes}
            />
         </div>
     )
 }
}

export default App;