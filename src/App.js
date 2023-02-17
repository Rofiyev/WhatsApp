import React, { useReducer } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import ThemeContext from "./Components/ThemeContext/ThemeContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "light":
      return { theme: 'dark' }
    default:
      return { theme: 'light' }
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, { theme: 'light' });
  const toggleTheme = () => dispatch({ type: state.theme });

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container">
          <ThemeContext.Provider value={{ toggleTheme: toggleTheme, theme: state.theme }}>
            <Navbar />
            <Section />
          </ThemeContext.Provider>
        </div>
      </div>
    </div>
  )
}
export default App;