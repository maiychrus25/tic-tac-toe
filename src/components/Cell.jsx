import React from "react";
import PropTypes from "prop-types";

class Cell extends React.Component {
  render() {
    const { isDarkMode } = this.props;
    return (
      <div
        className={`${
          isDarkMode ? "border border-solid border-[#ccc]" : ""
        } text-4xl shadow-md cursor-pointer flex items-center justify-center font-medium ${
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
  isDarkMode: PropTypes.bool.isRequired,
};

export default Cell;
