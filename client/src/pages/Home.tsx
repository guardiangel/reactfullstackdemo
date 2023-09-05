import { useTheme } from "@mui/material";
import { colorTokens } from "../theme";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setLoginState, LoginState } from "../reducers/LoginReducerSlice";

const Home = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  const loginState = useSelector(
    (state: LoginState) => state.loginStateObject.loginState
  );

  console.log("loginState=" + loginState);

  const dispatch = useDispatch();

  const handleLoginOut = () => {
    dispatch(setLoginState({ loginState: false }));
    sessionStorage.removeItem("accessToken");
  };

  return (
    <div style={{ backgroundColor: colors.grey[100], height: "100%" }}>
      <div
        style={{
          textAlign: "center",
          paddingTop: "20px",
          lineHeight: "50px",
          fontSize: 44,
        }}
      >
        Home
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Link to="/post">Post list</Link>
          <Link to="/createPost">Create New Post</Link>
          {!loginState && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Registration</Link>
            </>
          )}

          {loginState && (
            <button
              onClick={handleLoginOut}
              style={{
                height: "50px",
                width: "100px",
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
