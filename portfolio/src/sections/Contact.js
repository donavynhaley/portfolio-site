import React, { useState } from 'react';
import Divider from '../common/Divider'
import Button from '../common/Button'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string()
        .min(5, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),
});

const Contact = () => {
    const [showLabel, setShowLabel] = useState(false);

    return (
        <section className="page-section contact" id="contact">
            <h2 className="section-heading" >Contact</h2>
            <Divider isDark={true} />
            <div className="form-container">
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                    validationSchema={ContactSchema}
                    onSubmit={values => {
                        // same shape as initial values
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
                                console.log(response);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
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
                                <Field name="message" className={`input ${errors.message && touched.message ? "input-error" : ""}`} placeholder="Message" id="message-input" />
                                {errors.message && touched.message ? (
                                    <div className="error">{errors.message}</div>
                                ) : null}
                            </div>
                            <Button type="submit" text="Send" addClass="xl" />
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default Contact
