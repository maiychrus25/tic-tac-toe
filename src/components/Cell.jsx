import React from "react";
import PropTypes from "prop-types";

class Cell extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div
        className={`text-4xl border border-solid border-[#ccc] cursor-pointer flex items-center justify-center font-medium ${
          this.props.value === "X" ? "text-red-600" : "text-blue-800"
        }`}
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </div>
    );
  }
}

Cell.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Cell;
