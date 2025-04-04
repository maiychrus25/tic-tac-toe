import React from "react";

class Toggle extends React.Component {
  render() {
    const { isDarkMode, setIsDarkMode } = this.props;
    return (
      <div
        className="bg-blue-600 cursor-pointer w-[70px] h-[40px] p-[5px] rounded-3xl fixed bottom-[10%] left-10"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <div
          className={`flex items-center justify-center w-[30px] h-[30px] bg-white rounded-3xl transition-all duration-200 ease-linear ${
            isDarkMode ? "translate-x-[30px]" : ""
          }`}
        >
          <img
            src={`${
              !isDarkMode
                ? "https://i.ibb.co/FxzBYR9/night.png"
                : "https://i.ibb.co/7JfqXxB/sunny.png"
            }`}
            alt="night.jpg"
            className="object-contain rounded-full"
          />
        </div>
      </div>
    );
  }
}

export default Toggle;
