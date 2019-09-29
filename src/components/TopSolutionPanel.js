import React, { Component } from 'react';
import PropTypes from 'prop-types'

 
class TopSolutionPanel extends Component {
    render(){
        return (
        <div className="top">
            <div id="display" >{this.props.value}</div>
        </div>
        );
    }
}

TopSolutionPanel.propTypes = {
    value: PropTypes.string
}

export default TopSolutionPanel;