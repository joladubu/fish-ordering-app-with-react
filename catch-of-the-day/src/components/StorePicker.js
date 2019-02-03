import React from 'react';
import PropTypes from "prop-types";
// import createRef from 'create-react-ref/lib/createRef';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	//myInput is a property on the component
	myInput = React.createRef();
	static propTypes = {
		history: PropTypes.object
	}

	goToStore = event => {
		// Steps on form submission
		//1. Stop the form from submitting
		event.preventDefault();
		//2. Get the text from the input
		const storeName = this.myInput.current.value;
		//3. Change the page from whatever is entered
		this.props.history.push(`/store/${storeName}`);
};

	render() {
	return (
		<form className="store-selector" onSubmit={this.goToStore}>
			<h2>Please Enter A Store</h2>
			{/* adding a value to an input element? use defaultValue attrib */}
			<input
				type="text"
				// ref allows to refernece an actual DOM node on the page. Here the input element
				ref={this.myInput}
				required
				placeholder="Store Name"
				defaultValue={getFunName()}
			/>
			<button type="submit">Visit Store</button>
		</form>
	)
	}
}

export default StorePicker;