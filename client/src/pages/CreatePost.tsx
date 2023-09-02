import { useTheme } from "@mui/material";
import { colorTokens } from "../theme";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleSubmit = (data: typeof initialValues) => {
    //console.log(data);
    const result = axios.post("http://localhost:3001/posts/createPost", data, {
      headers: {
        accessToken: sessionStorage.getItem("accessToken"),
      },
    });
    result.then((res) => {
      if (res.status === 200) {
        alert("Add success");
        navigate("/post");
      } else {
        alert(res.data);
      }
    });
  };

  return (
    <div
      style={{
        backgroundColor: colors.grey[100],
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(e) => handleSubmit(e)}
        validationSchema={postSchema}
      >
        <Form className="formContainer">
          {/**title */}
          {/**the name attribute should match the name in the backend table */}
          <label htmlFor="inputTitles">Title:</label>
          <ErrorMessage
            name="title"
            component="span"
            style={{ color: colors.redAccent[400] }}
          />
          <Field
            id="inputTitle"
            name="title"
            placeholder="title...."
            className="fieldStyle"
          />

          {/**inputPostText */}
          <label htmlFor="inputPostText">postText:</label>
          <ErrorMessage
            name="postText"
            component="span"
            style={{ color: colors.redAccent[400] }}
          />
          <Field
            id="inputPostText"
            name="postText"
            placeholder="postText...."
            className="fieldStyle"
          />

          {/**inputUername */}
          <label htmlFor="inputUername">username:</label>
          <ErrorMessage
            name="username"
            component="span"
            style={{ color: colors.redAccent[400] }}
          />
          <Field
            id="inputUername"
            name="username"
            placeholder="User Name...."
            className="fieldStyle"
          />

          <div>
            <button
              type="submit"
              style={{
                width: "200px",
                backgroundColor: colors.greenAccent[400],
                height: "50px",
                marginBottom: "20px",
              }}
            >
              Create Post
            </button>
            <Link to="/post">Posts page</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const initialValues = {
  title: "",
  postText: "",
  username: "",
};

const postSchema = yup.object().shape({
  title: yup.string().required("required"),
  postText: yup.string().required("required"),
  username: yup.string().min(3).max(50).required("required"),
});

/* const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  contact: yup
    .string()
    .matches(phoneRegExp, "phoneNumber is not valid")
    .required("required"), */

export default CreatePost;
