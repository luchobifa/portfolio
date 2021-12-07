import React, { useState } from "react";
import styles from "./Contact.module.css";
import {  FormControl, TextField, Button } from '@mui/material';
import axios from "axios";
import Swal from 'sweetalert2';

export default function Contact(){
    // const [name, setName] = useState('');
    // const [message, setMessage] = useState("");
    // const [email, setEmail] = useState("");
    const [form, setForm] = useState({
        name: "", 
        email: "", 
        subject: "", 
        message: ""
    })

    function handleChange(e){
        setForm({
            ...form, 
            [e.target.name] : e.target.value
        })
    }

    //console.log(form)

    function handleSubmit(){
        // if(form.name === "" || form.email === "" || form.message === "" || form.subject === ""){
        //     Swal.fire({
        //         title: 'Error',
        //         text: 'You must fill all fields',
        //         icon: 'error',
        //         confirmButtonText: 'Try again',
        //       });
        // }else{
            sendEmail();
            Swal.fire({
                title: 'Success',
                text: 'Your message was sent successfully, your will receive a response soon!',
                icon: 'success',
                confirmButtonText: 'OK',
              });
            setForm({
                name: "", 
                email: "",
                subject: "",
                message: ""
            })
        
    }

    function sendEmail(){
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/lucianobifa@gmail.com', {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    return(
        <div className = {styles.container} id = 'contact'>
            <form style = {{display: "flex", flexDirection: "column", gap: "25px", width: "50%", height: "80%",  alignItems: "center"}} onSubmit = {handleSubmit}>
                <h1>Contact Me</h1>
                <FormControl style = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    {/* <InputLabel>Name</InputLabel> */}
                    <TextField required className = {styles.input} label = "Name" name = "name" onChange = {handleChange} value = {form.name} helperText={'Your full name'}></TextField>
                </FormControl>

                <FormControl style = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <TextField id ="email-helper" required className = {styles.input} label = "Email" name = "email" onChange = {handleChange} value = {form.email} helperText={'Your personal email'}></TextField>
                </FormControl>

                <FormControl style = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <TextField  required className = {styles.input} label = "Subject" name = "subject" onChange = {handleChange} value = {form.subject} helperText={'Subject'}></TextField>
                </FormControl>

                <FormControl style = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <TextField required className = {styles.inputArea} label = "Message" name = "message" variant = "outlined" multiline = {true}  onChange = {handleChange} value = {form.message} helperText={'Your message'}rows = {10}></TextField>
                </FormControl>
                
                <Button variant="contained" type= "submit" style={{width: "36%", height: "5%"}}>Submit </Button> 
            </form>
        </div>
    )
}