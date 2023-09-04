import React from "react";
import "./App.css";
import Posts from "./pages/Posts";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { Provider } from "react-redux";
import { store } from "./utils/store";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <div className="app">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/createPost" element={<CreatePost />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/post" element={<Posts />} />
                <Route path="/post/:id" element={<PostDetails />} />
              </Routes>
            </div>
          </CssBaseline>
        </ThemeProvider>
      </Provider>
    </ColorModeContext.Provider>
  );
}

export default App;
