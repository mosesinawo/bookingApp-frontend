import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import "./login.css";
import { login, useLoginUserMutation } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import SmallLoader from "../../components/loaders/smallLoader";
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const [credentials, setCredentials] = useState({});

  const initialValues = {
    email: "",
    password: "",
  };

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(3, "Password is too short - should be 3 chars minimum"),
  });
  const [res, setRes] = useState({
    data: [],
    isLoading: false,
    error: false
  })
  const dispatch = useDispatch()

  const [loginUser, {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  }] = useLoginUserMutation()

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    // e.preventDefault()
    await loginUser(credentials)
    console.log(credentials)
    //  formik.resetForm()
  }

  const formik = useFormik({
    initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      handleSubmit()
      setCredentials(values)
      console.log(values)
    }

  })



  useEffect(() => {
    if (data !== undefined) {
      dispatch(login(data.details))
      navigate("/")

    }
  }, [data])

 


  return (
    <div className="login">
      <form className="lContainer"
        onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.errors.email && formik.touched.email ?
              "input-error" : "register-input"}
          />
          {formik.errors.email && formik.touched.email && (
            <span className="error">{formik.errors.email}</span>
          )}
        </div>
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.errors.password && formik.touched.password ?
              "input-error" : "register-input"}
          />
          {formik.errors.password && formik.touched.password && (
            <span className="error">{formik.errors.password}</span>
          )}
        </div>
        <button type="submit" className="lButton">
          {isLoading ? <SmallLoader width={20} /> : "Login"}
        </button>
        {error && <span>{error.message}</span>}
      </form>
    </div>
  );
};

export default Login;
