import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CommentMode, PostsMode } from "../interfaces/commonInterface";
import { useTheme } from "@mui/material";
import { colorTokens } from "../theme";

const PostDetails = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  const { id } = useParams();
  const [postDetail, setPostDetail] = useState<PostsMode>();
  const [comments, setCommetns] = useState<CommentMode[]>([]);
  const [newComment, setNewComment] = useState<string>();

  useEffect(() => {
    axios
      .post("http://localhost:3001/posts/getPostById", { id: id })
      .then((res) => {
        setPostDetail(res.data);
      });
    axios
      .post("http://localhost:3001/comments/getCommentsByPostId", {
        PostTabId: id,
      })
      .then((res) => {
        setCommetns(res.data);
      });
  }, []);

  const addComment = () => {
    axios
      .post("http://localhost:3001/comments/createComments", {
        comments: newComment,
        PostTabId: id,
      })
      .then((res) => {
        const commentToAdd = {
          id: res.data.id,
          comments: res.data.comments,
          PostTabId: res.data.PostTabId,
        };
        setCommetns([...comments, commentToAdd]);
      });
  };

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
          <div style={{ textAlign: "center", marginRight: "28%" }}>
            <Link to="/post">Return to post list</Link>
          </div>
          <div>Title:{postDetail?.title}</div>
          <div>User Name:{postDetail?.username}</div>
          <div>Text:{postDetail?.postText}</div>
          <div style={{ color: colors.redAccent[400], fontSize: "44px" }}>
            Comment Section:
          </div>
          <div>
            {comments?.map((c, index) => (
              <div key={c.id}>
                {index + 1}:{c.comments}
              </div>
            ))}
          </div>
          <div>
            comments:
            <input
              type="text"
              placeholder="Please enter comments..."
              autoComplete="off"
              onChange={(e) => setNewComment(e.target.value)}
              style={{ height: "50px", width: "30%" }}
            />
          </div>
          <div>
            <button
              style={{
                height: "40px",
                width: "150px",
                backgroundColor: colors.greenAccent[200],
              }}
              onClick={addComment}
            >
              Submit Comments
            </button>
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
