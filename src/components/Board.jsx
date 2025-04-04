import React from "react";
import Cell from "./Cell";
import PropTypes from "prop-types";

class Board extends React.Component {
  render() {
    const { board, handleClick } = this.props;
    return (
      <div className="m-6 w-[30vw] h-[55vh] shadow-md  border-[#ddd] grid grid-cols-3 grid-rows-3">
        {board.map((item, index) => {
          return (
            <Cell key={index} value={item} onClick={() => handleClick(index)} />
          );
        })}
      </div>
    );
  }
}

Board.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default Board;
