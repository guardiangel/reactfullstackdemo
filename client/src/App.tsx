import React from "react";
import "./App.css";
import Posts from "./pages/Posts";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/createPost" element={<CreatePost />} />
              <Route path="/post" element={<Posts />} />
              <Route path="/post/:id" element={<PostDetails />} />
            </Routes>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
