import React, { Component } from "react";


class ClassItem extends Component {
  handleGradeChange(event) {
    this.props.handleChange(this.props.index, {
      grade: Number(event.target.value)
    });
  }

  handleCreditChange(event) {
    this.props.handleChange(this.props.index, {
      credit: Number(event.target.value)
    });
  }

  render() {
    return (
      <tr>
        <td>
          <select
            className="custom-select"
            id="2"
            onChange={this.handleGradeChange.bind(this)}
          >
            <option value="10.00" selected="selected">
              S
            </option>
            <option value="9.00">A</option>
            <option value="8.00">B</option>
            <option value="7.00">C</option>
            <option value="6.00">D</option>
            <option value="5.00">E</option>
            <option value="0.00">F</option>
          </select>
            
        </td>
        <td>
          <select
            className="custom-select"
            onChange={this.handleCreditChange.bind(this)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4" selected>
              4
            </option>
            
          </select>
        </td>
        
      </tr>
    );
  }
}

export default ClassItem;
