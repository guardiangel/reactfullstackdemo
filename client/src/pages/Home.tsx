import { useTheme } from "@mui/material";
import { colorTokens } from "../theme";
import { Link } from "react-router-dom";

const Home = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/post">Post list</Link>
          <Link to="/createPost">Create New Post</Link>
          <Link to="/login">login</Link>
          <Link to="/register">registratoin</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
