import React, { Component } from 'react';
import './Select.css';

class Select extends Component {
  createOptionElements() {
    const { options } = this.props;
    return options.map((name, index) => {
      return <option key={index}>{name}</option>;
    });
  }

  render() {
    const optionElements = this.createOptionElements();
    return (
      <select
        name={this.props.name}
        onChange={this.props.onChange}>
        <option value="">Choose one</option>
        {optionElements}
      </select>
    );
  }
}

export default Select;
