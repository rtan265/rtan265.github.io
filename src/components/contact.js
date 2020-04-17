import React from 'react';
import * as emailjs from 'emailjs-com';
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap';

import { AwesomeButtonProgress } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

class Contact extends React.Component{
    constructor(props){
        super(props);

    this.state = {
        name: '',
        email: '',
        subject: '',
        message: ''
        }

    this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleSubmit(e){
        e.preventDefault();

        const {name, email, subject, message } = this.state;

        let templateParams = {
            from_name: email,
            to_name: 'rtan265@gmail.com',
            subject: subject,
            message_html: message,
        }
        // console.log(templateParams);
        console.log("sending");
        // emailjs.send(
        //     'gmail',
        //     'template_sVNMlz53',
        //     templateParams,
        //     'user_l30fz0jZLX29ItnS7Mzf5'
        // )
        console.log("sent!");

        this.resetForm();
    }

    resetForm(){
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render(){
        return (
            <div className="contact-info-from-user">
                <h1>Let's chat!</h1>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="formBasicEmail">
                    <Label className="text-muted">Email address</Label>
                    <Input
                        type="email"
                        name="email"
                        value={this.state.email}
                        className="text-primary"
                        onChange={this.handleChange.bind(this, 'email')}
                        placeholder="Enter email"
                    />
                    </FormGroup>
                    <FormGroup controlId="formBasicName">
                    <Label className="text-muted">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        value={this.state.name}
                        className="text-primary"
                        onChange={this.handleChange.bind(this, 'name')}
                        placeholder="Name"
                    />
                    </FormGroup>
                        <FormGroup controlId="formBasicSubject">
                    <Label className="text-muted">Subject</Label>
                    <Input
                        type="text"
                        name="subject"
                        className="text-primary"
                        value={this.state.subject}
                        onChange={this.handleChange.bind(this, 'subject')}
                        placeholder="Subject"
                    />
                    </FormGroup>
                    <FormGroup controlId="formBasicMessage">
                    <Label className="text-muted">Message</Label>
                    <Input
                        type="textarea"
                        name="message"
                        className="text-primary"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this, 'message')}
                    />
                    </FormGroup>
                    <div className = "progress-button-contact">
                    <AwesomeButtonProgress
                        type="secondary"
                        size="medium"
                        action={(element, next) => {('clicked!'); setTimeout(() => {next();}, 600);}}>
                            Submit
                    </AwesomeButtonProgress>
                    </div>
                </Form>
            </div>
        )
    }
}

export default Contact;