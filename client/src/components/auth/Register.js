import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { registerUser } from "../../store/actions/authActions";

const Register = props => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password to short")
      .required("Password is required"),
    password2: Yup.string()
      .required("Required")
      .test("passwords-match", "Passwords must match", function(value) {
        return this.parent.password === value;
      })
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };
  return (
    <div
      className="register fixed w-11/12 md:w-2/4 border p-8 shadow-xl border-gray-100"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        left: "0",
        right: "0",
        margin: "0 auto"
      }}
    >
      <h2 className="text-4xl text-center mb-4">Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={values => {
          props.registerUser(values, props.history);
        }}
        render={props => (
          <Form>
            <label>Name</label>
            <Field className="w-full border-b" type="text" name="name" />
            <ErrorMessage name="name">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

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
            <label>Confirm password</label>
            <Field
              className="w-full border-b"
              type="password"
              name="password2"
            />
            <ErrorMessage name="password2">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>
            <button
              type="submit"
              className="border border-teal-500 p-2 py-1 mt-4"
            >
              Register
            </button>
          </Form>
        )}
      />
    </div>
  );
};

export default connect(
  null,
  { registerUser }
)(Register);
