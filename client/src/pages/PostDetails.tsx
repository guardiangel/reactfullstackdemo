import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CommentMode, PostsMode } from "../interfaces/commonInterface";
import { useTheme } from "@mui/material";
import { colorTokens } from "../theme";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const PostDetails = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  const { id } = useParams(); //this is post id
  const [postDetail, setPostDetail] = useState<PostsMode>();
  const [comments, setComments] = useState<CommentMode[]>([]);
  const [newComment, setNewComment] = useState<string>();
  const [likeFlag, setLikeFlag] = useState<boolean>(false);

  const commentRef = useRef<any>();

  useEffect(() => {
    axios
      .post(
        "http://localhost:3001/posts/getPostById",
        { id: id },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        setPostDetail(res.data);
      });

    //get comments
    axios
      .post(
        "http://localhost:3001/comments/getCommentsByPostId",
        {
          PostTabId: id,
        },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      });

    //get likes
    axios
      .post(
        "http://localhost:3001/likes/getLikes",
        { PostTabId: id },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        const like = res.data;
        console.log("like===" + like);
        if (like) {
          setLikeFlag(true);
        }
      });
  }, [id]);

  //Add comments
  const addComment = () => {
    if (newComment === "") {
      alert("Please enter comments.");
      return;
    }

    axios
      .post(
        "http://localhost:3001/comments/createComments",
        {
          comments: newComment,
          PostTabId: id,
        },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        const commentToAdd = {
          id: res.data.id,
          comments: res.data.comments,
          PostTabId: res.data.PostTabId,
          username: res.data.username,
        };
        setComments([...comments, commentToAdd]);

        //After adding, clear the field
        commentRef.current.value = "";
      });
  };

  //Delete comments
  const handleDeleteComment = (id: number | undefined) => {
    axios
      .post(
        "http://localhost:3001/comments/deleteCommentById",
        {
          id: id,
        },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        if (res.data === 1) {
          setComments(comments.filter((c) => c.id !== id));
        }
      });
  };

  //handle likes
  const handleLike = () => {
    axios
      .post(
        "http://localhost:3001/likes/createLikes",
        {
          PostTabId: id,
        },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert(res.data);
          setLikeFlag(true);
        } else {
          alert(res.data);
        }
      });
  };

  //cancel likes
  const cancelLike = () => {
    axios
      .post(
        "http://localhost:3001/likes/cancelLikes",
        {
          PostTabId: id,
        },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          alert("Cancel likes successfully.");
          setLikeFlag(false);
        } else {
          alert(res.data);
        }
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
          <div
            style={{
              textAlign: "center",
              marginRight: "28%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link to="/post">Return to post list</Link>
            <Link to="/home">Return to home</Link>
          </div>
          <div>Title:{postDetail?.title}</div>
          <div>User Name:{postDetail?.username}</div>
          <div>Text:{postDetail?.postText}</div>

          {likeFlag ? (
            <ThumbUpIcon
              style={{
                height: "50px",
                width: "50px",
                cursor: "pointer",
                color: colors.redAccent[400],
              }}
              onClick={cancelLike}
            />
          ) : (
            <ThumbUpOffAltIcon
              style={{
                height: "50px",
                width: "50px",
                cursor: "pointer",
                color: colors.redAccent[400],
              }}
              onClick={handleLike}
            />
          )}

          <div style={{ color: colors.redAccent[400], fontSize: "44px" }}>
            Comment Section:
          </div>
          <div>
            {comments?.map((c, index) => (
              <div key={c.id}>
                {index + 1}:{c.comments} userName:{c.username}
                {c.username === sessionStorage.getItem("userName") && (
                  <button onClick={() => handleDeleteComment(c.id)}>
                    Delete comment
                  </button>
                )}
              </div>
            ))}
          </div>
          <div>
            comments:
            <input
              type="text"
              placeholder="Please enter comments..."
              autoComplete="off"
              ref={commentRef}
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
