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
import PageNotFound from "./pages/PageNotFound";
import { Provider } from "react-redux";
import { store, persistor } from "./utils/store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </div>
            </CssBaseline>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ColorModeContext.Provider>
  );
}

export default App;
