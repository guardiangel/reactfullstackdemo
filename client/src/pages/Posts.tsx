import { useState, useEffect } from "react";
import axios from "axios";
import { PostsMode } from "../interfaces/commonInterface";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { colorTokens } from "../theme";

const Posts = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [posts, setPosts] = useState<PostsMode[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts/getAllPosts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <Box bgcolor={colors.grey[100]} height="100vh">
      {posts?.map((post) => (
        <Box
          key={post.id}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gridAutoRows="200px"
            gap="20px"
            alignItems="center"
          >
            <Box
              gridColumn="span 2"
              bgcolor={colors.grey[200]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography variant="h2" color={colors.primary[400]} mb="20px">
                {post.title}
              </Typography>
              <Typography variant="h5" m="5px 10px 20px">
                {post.postText}
              </Typography>
              <Box bgcolor={colors.grey[200]} display="flex">
                <Typography variant="h5" m="5px 10px 20px">
                  {post.username}
                </Typography>
                <Typography variant="h5" m="5px 10px 20px">
                  {post.createdAt.toLocaleString()}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

{
  /* <div key={post.id}>
          <div>{post.title}</div>
          <div>{post.postText}</div>
          <div>{post.createdAt.toLocaleString()}</div>
        </div> */
}

export default Posts;
