import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1,
        };
    }

    render() {
        return (
            <label
                onClick={() => {
                    this.setState({ count: this.state.count * 2 });
                }}
            >
                Count: {this.state.count}
            </label>
        );
    }
}
export default Counter;