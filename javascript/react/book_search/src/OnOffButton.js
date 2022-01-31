import React from "react";

class OnOffButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonName: 'ON',
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state, props) => {
            if (state.buttonName === 'ON') {
                return { buttonName: 'OFF' }
            }
            return { buttonName: 'ON' }
        });
    }


    render() {
        return (
            <button onClick={this.handleClick}>{this.state.buttonName}</button>
        );
    }
}

export default OnOffButton;