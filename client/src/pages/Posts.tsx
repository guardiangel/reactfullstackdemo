import { useState, useEffect } from "react";
import axios from "axios";
import { PostsMode } from "../interfaces/commonInterface";
import { Box, useTheme } from "@mui/material";
import { colorTokens } from "../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

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
    <Box m="5px">
      <Box
        m="40px 0 0 0 "
        height="90vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          //defined in the above columns
          "& .name-column-cell": {
            color: colors.redAccent[500],
          },

          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[200],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.grey[200], //400 or 900 works better
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.blueAccent[200],
            borderTop: "none",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[100]} !important`,
          },
          "& .MuiTablePagination-selectLabel": {
            fontSize: "16px",
            color: colors.blueAccent[400],
          },
          "& .MuiTablePagination-displayedRows": {
            fontSize: "16px",
            color: colors.blueAccent[400],
          },
          "& .MuiInputBase-input": {
            fontSize: "16px",
            color: colors.blueAccent[400],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.blueAccent[400]} !important`,
            fontSize: "18px",
          },
        }}
      >
        <DataGrid
          sx={{
            fontSize: "20px",
          }}
          checkboxSelection
          rows={posts}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 25, page: 0 },
            },
          }}
          slots={{ toolbar: GridToolbar }}
        />
        <Link
          to="/createPost"
          style={{ fontSize: "28px", color: colors.redAccent[400] }}
        >
          Create New Posts
        </Link>
      </Box>
    </Box>
  );
};

const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.5,
  },
  {
    field: "title",
    headerName: "Title",
    flex: 1,
    cellClassName: "name-column-cell",
  },
  {
    field: "postText",
    headerName: "Post Text",
    flex: 1,
  },

  {
    field: "username",
    headerName: "User Name",
    flex: 1,
  },

  {
    field: "createdAt",
    headerName: "Create Time",
    flex: 1,
  },
  {
    field: "updatedAt",
    headerName: "Update Time",
    flex: 1,
  },
];

export default Posts;
