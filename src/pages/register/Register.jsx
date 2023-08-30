import React, { useEffect, useState } from 'react';
import { useRegisterUserMutation } from '../../store/authSlice';
import SmallLoader from '../../components/loaders/smallLoader';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import './register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [credentials, setCredentials] = useState({})
    const navigate = useNavigate()

    const [registerUser, {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    }] = useRegisterUserMutation()
    const initialValues = {
        username: "",
        email: "",
        password_confirm: "",
        password: "",
        city: "",
        country: "",
        phone: ""
    };

    const SignUpSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Firstname is required"),

        country: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Add a country"),
        city: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Add a country"),

        phone: Yup.string()
            .required("Phone number is required")
            .matches(
                /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
                "Invalid phone number"
            ),

        email: Yup.string().email().required("Email is required"),

        password: Yup.string()
            .required("Password is required")
            .min(6, "Password is too short - should be 6 chars minimum"),
        password_confirm: Yup.string()
            .required('Please confirm your password')
            .oneOf([Yup.ref('password')], 'Passwords do not match'),
    });
    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid Email";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password too short";
        }
        return errors;
    };

    const formik = useFormik({
        initialValues,
        validationSchema: SignUpSchema,
        onSubmit: (values) => {
            handleSubmit()
            setCredentials(values)
        }

    })

    const handleSubmit = async (e) => {
        // e.preventDefault()
        await registerUser(credentials)
        console.log(credentials)
        formik.resetForm()
    }
    useEffect(() => {
    if(  isSuccess) return navigate('/login')
    }, [  isSuccess,])
    
    

    // const handleChange = (e) => {
    //     setCredentials((prev) => ({ ...prev, [e.target.name]: [e.target.value] }))
    // }

    return (
        <div className="container">
            <form
                onSubmit={formik.handleSubmit}
                className='form-wrapper'
            >

                <h1>Sign in to continue</h1>
                <div className="signup-row">
                    <div className="form-row">
                        <label htmlFor="email">username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.errors.username && formik.touched.username ?
                                "input-error" : "register-input"}
                        />
                        {formik.errors.username && formik.touched.username && (
                            <span className="error">{formik.errors.username}</span>
                        )}
                    </div>
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
                </div>
                <div className="signup-row">
                    <div className="form-row">
                        <label htmlFor="email">City</label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.errors.city && formik.touched.city ?
                                "input-error" : "register-input"}
                        />
                        {formik.errors.city && formik.touched.city && (
                            <span className="error">{formik.errors.city}</span>
                        )}
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">Country</label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.errors.country && formik.touched.country ?
                                "input-error" : "register-input"}
                        />
                        {formik.errors.country && formik.touched.country && (
                            <span className="error">{formik.errors.country}</span>
                        )}
                    </div>
                </div>

                <div className="signup-row">
                    <div className="form-row">
                        <label htmlFor="email">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.errors.phone && formik.touched.phone ?
                                "input-error" : "register-input"}
                        />
                        {formik.errors.phone && formik.touched.phone && (
                            <span className="error">{formik.errors.phone}</span>
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

                </div>
                <div className="signup-row-2">
                    <div className="form-row">
                        <label htmlFor="password"> Confirm Password</label>
                        <input
                            type="password"
                            name="password_confirm"
                            id="password_confirm"
                            value={formik.values.password_confirm}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.errors.password_confirm && formik.touched.password_confirm ?
                                "input-error" : "register-input"}
                        />
                        {formik.errors.password_confirm && formik.touched.password_confirm && (
                            <span className="error">{formik.errors.password_confirm}</span>
                        )}
                    </div>

                    < button type='submit' className="s-button" >
                        {isLoading ? <SmallLoader width={20} /> : "Reister"}
                    </button >

                </div>


            </form>
        </div >
    );
}

export default Register

