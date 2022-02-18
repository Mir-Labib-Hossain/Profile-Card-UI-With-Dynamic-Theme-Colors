import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Card from "./Card";
import { Container } from "./styles/ContainerStyled";
import { ThemeButton } from "./styles/ElementsStyled";

export default function AppChild() {
  const [darkMode, setDarkMode] = useState(true);
  const handleTheme = () => {
    setDarkMode((prevState) => !prevState);
    console.log(darkMode);
  };
  let mode = {};
  if (darkMode) {
    mode = {
      lightBG: "#262626",
      darkBG: "#1E1E1E",
      lightText: "white",
      darkText: "#aaa",
    };
  } else {
    mode = {
      lightBG: "#8B92A4",
      darkBG: "#B6B7BF",
      lightText: "#262626",
      darkText: "#1E1E1E",
    };
  }
  return (
    <ThemeProvider theme={mode}>
      <Container>
        <Card />
        <ThemeButton
          type="button"
          onClick={handleTheme}
          bg={darkMode ? "#B6B7BF" : "#262626"}
          text={darkMode ? "#262626" : "#8B92A4"}
        >
          {darkMode ? "White" : "Dark"} Mode
        </ThemeButton>
      </Container>
    </ThemeProvider>
  );
}
