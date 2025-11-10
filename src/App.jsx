import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./components/layout";
import Home from "./pages/Home";
import { useState } from "react";
import { Context } from "./context";
import Cart from "./pages/Cart";

const theme = createTheme({
  palette: {
    primary: { main: "#7F4DFF", gray: "F0F2F5" },
    secondary: { main: "#ff6f00" },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          paddingBlock: 0,
        },
        text: {
          opacity: 0.8,
          "&:hover": {
            opacity: 1,
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Context.Provider value={{ cart, setCart }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Context.Provider>
    </ThemeProvider>
  );
};

export default App;
