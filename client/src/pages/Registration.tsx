import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Box from "@mui/material/Box";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { useTheme } from "@mui/material";
import { colorTokens } from "../theme";

export default function Registration() {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleSubmit = (data: any) => {
    console.log(data);
    axios
      .post("http://localhost:3001/user/register", {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("User created successfully, forward to login page.");
          navigate("/login");
        } else {
          alert(res.data);
        }
      });
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "30%" }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AppRegistrationIcon />
        </Avatar>
        <Typography variant="h2">Registration</Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={(e) => handleSubmit(e)}
          validationSchema={userSchema}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "60%",
              padding: "20px",
            }}
          >
            <ErrorMessage
              name="username"
              component="span"
              style={{ color: colors.redAccent[400] }}
            />

            <Field
              id="username"
              name="username"
              placeholder="username...."
              style={{
                margin: "0px 0px 20px 0px",
                height: "50px",
              }}
            />

            <ErrorMessage
              name="password"
              component="span"
              style={{ color: colors.redAccent[400] }}
            />

            <Field
              id="password"
              name="password"
              placeholder="password...."
              style={{
                margin: "0px 0px 20px 0px",
                height: "50px",
              }}
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
                Registration
              </button>
            </div>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}

const initialValues = {
  username: "",
  password: "",
};

const userSchema = yup.object().shape({
  username: yup.string().required("required username"),
  password: yup.string().min(3).max(25).required("required password"),
});
