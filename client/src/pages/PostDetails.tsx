import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { PostsMode } from "../interfaces/commonInterface";
import { useTheme } from "@mui/material";
import { colorTokens } from "../theme";

const PostDetails = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  const { id } = useParams();
  const [postDetail, setPostDetail] = useState<PostsMode>();

  useEffect(() => {
    axios
      .post("http://localhost:3001/posts/getPostById", { id: id })
      .then((res) => {
        setPostDetail(res.data);
      });
  }, []);

  return (
    <div style={{ backgroundColor: colors.grey[100], height: "100vh" }}>
      <div
        style={{
          paddingTop: "20vh",
          marginLeft: "30%",
        }}
      >
        <div
          style={{
            backgroundColor: colors.blueAccent[200],
            height: "2vh",
            width: "30vw",
          }}
        />
        <div style={{ margin: "15px 15px 15px 50px", fontSize: "28px" }}>
          <div>Title:{postDetail?.title}</div>
          <div>User Name:{postDetail?.username}</div>
          <div>Text:{postDetail?.postText}</div>
          <div style={{ textAlign: "center", marginRight: "28%" }}>
            <Link to="/post">Return to post list</Link>
          </div>
        </div>
        <div
          style={{
            backgroundColor: colors.blueAccent[200],
            height: "2vh",
            width: "30vw",
          }}
        />
      </div>
    </div>
  );
};

export default PostDetails;
