import { createContext } from "react"

export const themes = {
  light: {
    foreground: "red",
    background: "yellow"
  },
  dark: {
    foreground: "white",
    background: "grey"
  }
};

export const ThemeContext = createContext(themes.light)