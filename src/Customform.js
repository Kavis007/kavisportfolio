import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';  // Import Yup here
import { Card, Button } from 'react-bootstrap';
import submit from './Portfolio/submiticon.png';
import './contact.css';
const Customform = () => {

    const validationSchema = Yup.object({
        name: Yup.string()
          .required('Name is required')
          .min(2, 'Name must be at least 2 characters')
          .max(50, 'Name must be at most 50 characters'),
      
        email: Yup.string()
          .required('Email is required')
          .email('Invalid email format'),
      
        phoneNumber: Yup.string()
          .required('Phone number is required')
          .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
      
        content: Yup.string()
          .required('Content is required')
          .min(10, 'Content must be at least 10 characters')
          .max(500, 'Content must be at most 500 characters'),
      });
      
      return (
        <Card className="card-slide-in" style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
          <Card.Body>
            <Card.Title className="text-center">Contact Us</Card.Title>
            <Formik
              initialValues={{ name: '', email: '', phoneNumber: '', content: '' }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                alert(`Form Submitted:\nName: ${values.name}\nEmail: ${values.email}\nPhone Number: ${values.phoneNumber}\nContent: ${values.content}`);
              }}
            >
              {() => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label contactcontent">Name:</label>
                    <Field type="text" id="name" name="name" className="form-control" />
                    <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label contactcontent">Email:</label>
                    <Field type="email" id="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label contactcontent">Phone Number:</label>
                    <Field type="text" id="phoneNumber" name="phoneNumber" className="form-control" />
                    <ErrorMessage name="phoneNumber" component="div" style={{ color: 'red' }} />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="content" className="form-label contactcontent">Content:</label>
                    <Field as="textarea" id="content" name="content" className="form-control" />
                    <ErrorMessage name="content" component="div" style={{ color: 'red' }} />
                  </div>
    
                  <Button type="submit" variant="danger" className="w-100">Message me <img src={submit} style={{Color:'red'}}></img></Button>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      );
    };

export default Customform
