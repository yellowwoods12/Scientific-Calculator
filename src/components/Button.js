import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Button extends Component {
  
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleButtonClick(this.props.actionCreator,this.props.name);
  }
  
  render() {
     
    return (
      <div className="boss" >
       <span className="btn"  onClick={this.handleClick} >{this.props.name}</span> 
      </div>
    );
  }


}

Button.propTypes = {
  name: PropTypes.string,
  handleButtonClick: PropTypes.func,
  actionCreator: PropTypes.func
}

export default Button;