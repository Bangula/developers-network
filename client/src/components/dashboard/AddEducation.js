import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import { addEducation } from "../../services/endpoints/profiles";

const AddEducation = props => {
  const handleSubmit = async values => {
    const { data, error } = await addEducation(values);
    if (data) {
      console.log(data);
      props.history.push("/dashboard");
    } else if (error) {
      console.log(error);
    }
  };

  const schema = Yup.object().shape({
    school: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    degree: Yup.string().required("Required"),
    fieldofstudy: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!"),
    description: Yup.string()
      .min(5, "Too Short!")
      .max(70, "Too Long!")
  });

  const initialValues = {
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: ""
  };
  const goBackBtn = e => {
    e.preventDefault();
    props.history.goBack();
  };
  return (
    <div
      style={{ marginTop: "150px" }}
      className="createProfile container border p-16 mt-32 shadow-lg"
    >
      <h1 className="text-green-800 text-4xl font-semibold my-2">
        Add Your Education
      </h1>
      <h3 className="text-green-800 text-md font-semibold mt-2 mb-8">
        Add any school, bootcamp, etc that you have attended
      </h3>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={values => {
          handleSubmit(values);
        }}
        render={props => (
          <Form>
            <label className="text-green-600 italic text-sm">
              School Or Bootcamp
            </label>
            <Field className="w-full border-b" type="text" name="school" />
            <ErrorMessage name="school">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">
              Degree Or Certificate
            </label>
            <Field className="w-full border-b" type="text" name="degree" />
            <ErrorMessage name="degree">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">
              Field Of Study
            </label>
            <Field
              className="w-full border-b"
              type="text"
              name="fieldofstudy"
            />
            <ErrorMessage name="fieldofstudy">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">From Date</label>
            <Field className="w-full border-b" type="date" name="from" />
            <ErrorMessage name="from">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">To Date</label>
            <Field className="w-full border-b" type="date" name="to" />
            <ErrorMessage name="to">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">Current</label>
            <Field className="w-full border-b" type="checkbox" name="current" />
            <ErrorMessage name="current">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">Description</label>
            <Field
              className="w-full border-b"
              component="textarea"
              name="description"
            />
            <ErrorMessage name="description">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <button
              type="submit"
              className="border text-white bg-teal-500 border-teal-500 p-2 py-1 mt-4 home-btn hover:bg-white hover:text-teal-500 mr-2"
            >
              Submit
            </button>
            <button
              onClick={e => goBackBtn(e)}
              className="border text-teal-500 border-teal-500 p-2 py-1 mt-4 home-btn hover:bg-teal-500 hover:text-white"
            >
              Go Back
            </button>
          </Form>
        )}
      />
    </div>
  );
};

export default AddEducation;
