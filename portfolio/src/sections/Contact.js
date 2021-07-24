import React from 'react';
import Divider from '../common/Divider'
import Button from '../common/Button'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import checkIcon from '../assets/check.svg'
import errorIcon from '../assets/error.svg'

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string()
        .min(5, 'Message Too Short!')
        .max(1000, 'Message Too Long! < 1000 Characters')
        .required('Message is required'),
});

const initialFormValues = {
    name: '',
    email: '',
    message: '',
}

const Contact = ({ toastList, setToastList, toastCount, setToastCount }) => {

    const sendEmail = (values) => {
        // Shaping data to send to backend
        const data = {
            service_id: process.env.REACT_APP_SERVICE_ID,
            template_id: process.env.REACT_APP_TEMPLATE_ID,
            user_id: process.env.REACT_APP_USER_ID,
            template_params: {
                'name': values.name,
                'email': values.email,
                'message': values.message,
            }
        }

        axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
            .then(function (response) {
                // upon sucess adds toast notification
                addToast(true)
            })
            .catch(function (error) {
                addToast(false);
            });
    }

    const addToast = (isSuccess) => {
        let toast = {}
        if (isSuccess) {
            toast = {
                id: toastCount,
                title: 'Success',
                description: 'Message sent!',
                backgroundColor: '#5cb85c',
                icon: checkIcon
            }
        }
        else {
            toast = {
                id: toastCount,
                title: 'Failed',
                description: 'Something went wrong. Please try again later',
                backgroundColor: '#5cb85c',
                icon: errorIcon
            }
        }
        const newToastList = toastList;
        newToastList.push(toast)
        setToastList(newToastList)
        setToastCount(toastCount + 1)

    }

    const resetForm = (values) => {
        Object.keys(values).forEach(key => (values[key] = ""));  //<- Reseting all fields using blank space
    }

    return (
        <section className="page-section contact" id="contact">
            <h2 className="section-heading" >Contact</h2>
            <Divider isDark={true} />
            <div className="form-container">
                <Formik
                    initialValues={initialFormValues}
                    validationSchema={ContactSchema}
                    onSubmit={values => {
                        sendEmail(values)
                        resetForm(values)
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="form">
                            <div className="form-group">
                                <Field name="name" className={`input ${errors.name && touched.name ? "input-error" : ""}`} placeholder="Name" />
                                {errors.name && touched.name ? (
                                    <div className="error">{errors.name}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <Field name="email" type="email" className={`input ${errors.email && touched.namemaile ? "input-error" : ""}`} placeholder="Email" />
                                {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
                            </div>
                            <div className="form-group">
                                <Field as="textarea" name="message" className={`input ${errors.message && touched.message ? "input-error" : ""}`} placeholder="Message" id="message-input" />
                                {errors.message && touched.message ? (
                                    <div className="error">{errors.message}</div>
                                ) : null}
                            </div>
                            <Button variant="contained" color="primary">
                                Primary
</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default Contact
