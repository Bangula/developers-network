import React, { useContext } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import { createProfile } from "../../services/endpoints/profiles";
import { ProfilesContext } from "../../context/ProfilesProvider";

const CreateProfile = props => {
  const { state, dispatch } = useContext(ProfilesContext);

  const handleSubmit = async values => {
    values.id = props.userId;
    const { data, error } = await createProfile(values);
    if (data) {
      dispatch({
        type: "SET_PROFILE",
        payload: data.data
      });
      if (props.location.state) {
        props.history.goBack();
      } else {
        props.history.push("/dashboard");
      }
    } else {
      console.log(error.response.data);
    }
  };

  const schema = Yup.object().shape({
    handle: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    company: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    website: Yup.string().url("Not a valid URL"),
    location: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!"),
    bio: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!"),
    status: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    githubusername: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!"),
    skills: Yup.string().required("Required"),
    youtube: Yup.string().url("Not a valid URL"),
    twitter: Yup.string().url("Not a valid URL"),
    instagram: Yup.string().url("Not a valid URL"),
    facebook: Yup.string().url("Not a valid URL"),
    linkedin: Yup.string().url("Not a valid URL")
  });

  let skillsString;
  let youtube, twitter, facebook, linkedin, instagram;
  if (props.location.state) {
    skillsString = props.location.state.data.skills.join(",");
    if (props.location.state.data.social) {
      youtube = props.location.state.data.social.youtube;
      twitter = props.location.state.data.social.twitter;
      facebook = props.location.state.data.social.facebook;
      linkedin = props.location.state.data.social.linkedin;
      instagram = props.location.state.data.social.instagram;
    }
  }

  const initialValues = {
    handle: props.location.state ? props.location.state.data.handle : "",
    company: props.location.state ? props.location.state.data.company : "",
    website: props.location.state ? props.location.state.data.website : "",
    location: props.location.state ? props.location.state.data.location : "",
    bio: props.location.state ? props.location.state.data.bio : "",
    status: props.location.state
      ? props.location.state.data.status
      : "developer",
    githubusername: props.location.state
      ? props.location.state.data.githubusername
      : "",
    skills: props.location.state ? skillsString : "",
    youtube: props.location.state ? youtube : "",
    twitter: props.location.state ? twitter : "",
    facebook: props.location.state ? facebook : "",
    linkedin: props.location.state ? linkedin : "",
    instagram: props.location.state ? instagram : ""
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
      <h1 className="text-green-800 text-2xl font-semibold my-2">
        {props.location.state ? "Edit" : "Create"} Your Profile
      </h1>
      <h3 className="text-green-800 text-md font-semibold mt-2 mb-8">
        {props.location.state
          ? ""
          : "Let's get some information to make your profile stand out"}
      </h3>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={values => {
          handleSubmit(values);
        }}
        render={props => (
          <Form>
            <label className="text-green-600 italic text-sm">Handle</label>
            <Field className="w-full border-b" type="text" name="handle" />
            <ErrorMessage name="handle">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">Company</label>
            <Field className="w-full border-b" type="text" name="company" />
            <ErrorMessage name="company">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">
              Your Website
            </label>
            <Field className="w-full border-b" type="text" name="website" />
            <ErrorMessage name="website">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">
              Your Location
            </label>
            <Field className="w-full border-b" type="text" name="location" />
            <ErrorMessage name="location">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">Short Bio</label>
            <Field className="w-full border-b" type="text" name="bio" />
            <ErrorMessage name="bio">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">Status</label>
            <Field className="w-full border-b" component="select" name="status">
              <option value="developer">Developer</option>
              <option value="juniordeveloper">Junior Developer</option>
              <option value="seniordeveloper">Senior Developer</option>
              <option value="manager">Manager</option>
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
              <option value="intern">Intern</option>
              <option value="other">other</option>
            </Field>
            <ErrorMessage name="status">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">
              Github Username
            </label>
            <Field
              className="w-full border-b"
              type="text"
              name="githubusername"
            />
            <ErrorMessage name="githubusername">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">
              Skills (separated with comma)
            </label>
            <Field className="w-full border-b" type="text" name="skills" />
            <ErrorMessage name="skills">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">Youtube</label>
            <Field className="w-full border-b" type="text" name="youtube" />
            <ErrorMessage name="youtube">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">Twitter</label>
            <Field className="w-full border-b" type="text" name="twitter" />
            <ErrorMessage name="twitter">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">Facebook</label>
            <Field className="w-full border-b" type="text" name="facebook" />
            <ErrorMessage name="facebook">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">Linkedin</label>
            <Field className="w-full border-b" type="text" name="linkedin" />
            <ErrorMessage name="skills">
              {mssg => (
                <small className="block text-red-400 text-center">{mssg}</small>
              )}
            </ErrorMessage>

            <label className="text-green-600 italic text-sm">Instagram</label>
            <Field className="w-full border-b" type="text" name="instagram" />
            <ErrorMessage name="instagram">
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

const mapStateToProps = state => {
  console.log(state.auth.user.id);
  return {
    userId: state.auth.user.id
  };
};

export default connect(mapStateToProps)(CreateProfile);
