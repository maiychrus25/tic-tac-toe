import React from "react";
import Cell from "./Cell";
import PropTypes from "prop-types";

class Board extends React.Component {
  render() {
    const { isDarkMode, board, handleClick } = this.props;
    return (
      <div className="m-6 w-[250px] h-[250px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[500px] xl:h-[500px] gap-6 grid grid-cols-3 grid-rows-3">
        {board.map((item, index) => {
          return (
            <Cell
              isDarkMode={isDarkMode}
              key={index}
              value={item}
              onClick={() => handleClick(index)}
            />
          );
        })}
      </div>
    );
  }
}

Board.propTypes = {
  boards: PropTypes.array.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Board;
