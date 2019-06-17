import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import { loginUser } from "../../store/actions/authActions";

const Login = props => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password to short")
      .required("Password is required")
  });
  const initialValues = {
    email: "",
    password: ""
  };
  return (
    <div
      className="register fixed w-11/12 w-2/4 border p-8 shadow-xl border-gray-100"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        left: "0",
        right: "0",
        margin: "0 auto"
      }}
    >
      {props.authError.email ? (
        <h3 className="text-red-400 text-center">{props.authError.email}</h3>
      ) : null}
      {props.authError.password ? (
        <h3 className="text-red-400 text-center">{props.authError.password}</h3>
      ) : null}
      <h2 className="text-4xl text-center mb-4">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={values => {
          props.loginUser(values, props.history);
        }}
        render={props => (
          <Form>
            <label>Email</label>
            <Field className="w-full border-b" type="email" name="email" />
            <ErrorMessage name="email">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label>Password</label>
            <Field
              className="w-full border-b"
              type="password"
              name="password"
            />
            <ErrorMessage name="password">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>
            <button
              type="submit"
              className="border border-teal-500 p-2 py-1 mt-4"
            >
              Login
            </button>
          </Form>
        )}
      />
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state.auth.error);
  return {
    authError: state.auth.error
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
