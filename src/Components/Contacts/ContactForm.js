import React,{useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import * as Yup from "yup";

const H5 = styled.h6`
  color:white;
`;
const H1 = styled.h1`
font-size:3rem;
color:#61DBFB;
margin:0px;
margin-right:10px;
margin-bottom:.5px;
text-shadow: 2px 2px 2px black;
font-family:'Changa One';

`
const FormContainer = styled.div`

 margin: 1em ;
 padding: 2em;
 display: flex;
 flex-wrap: wrap;
 flex-direction: column;
 align-content: center;
 justify-content: space-evenly;
 /* box-shadow: 0px 12px 22px -1px #545309; */
 font-family: "Ubuntu", sans-serif;

`
const TopForm = styled.div`
display:flex;
flex-direction:column;

justify-content:center;

margin:.5em;

`
const TextArea = styled.textarea`
border-style:solid;
border-color:#E7A46F;
font-family: 'Bowlby One SC';

margin:4%;
 width:50vw;
 resize: none;
height:17vh;

&:focus {
    outline-color:#61DBFB;
}
`
const Input = styled.input`
border-style:solid;
border-color:white;
font-family: 'Bowlby One SC';
&:focus {
  outline-color:#61DBFB;
}

margin:4%;
width:50vw;
height:3vh;
`
const Center=styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Button = styled.button`
font-size:.7rem;
margin:1em;
width:9vw;
height:3vh;
border-style:solid;
border-color:black;
background:#61DBFB;
font-family:'Changa One';
cursor: pointer;
min-width:50px;
:hover{
 color:white;
 border-style:solid;
border-color:white;
 transform:scale(1.5);
 transition:.5s;
}
`
export default function ContactForm({touched,errors}) {
  const [state, setState] = useState({})

  const defaultForm = {
    name: '',
    email: '',
    company: '',
    message: '',
    error: ''
  }

  const [form, setForm] = useState(defaultForm);

  const setError = error => {
    setForm({
      ...form,
      error
    })
  }

  const sendMessage = e => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const company = form.company.trim();
    const message = form.message.trim();

    setState({
      ...state,
  
    })
  


    axios.post('https://nodemailer-to-bsoghigian.herokuapp.com/send', {
      name,
      email,
      company,
      message
    })
    .then(() => {
      setState({
        ...state

      })
      setForm(defaultForm);
    })
    .catch(err => {
      setState({
        ...state

      })
    })
    Swal.fire({
      position:"center",
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500

    })
    console.log(state)
    document.getElementById("FormClear").reset();
  }

  const handleChange = e => {
    setError('');
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

 return (
   <div>
     <H1>Contact Me Below!</H1>
     <form id="FormClear">
       <FormContainer>

        
        <Input  type='text' name='name' value={form.name} onChange={handleChange} placeholder="Name"/>
      

       
        <Input  type='email' name='email' value={form.email} onChange={handleChange} placeholder="Email"/>
   

  
        <Input  type='text' name='company' value={form.company} onChange={handleChange} placeholder="Company"/>
   

        
        <TextArea  name='message' value={form.message} onChange={handleChange} placeholder="Message"/>
      

      <Center>
      <Button  onClick={sendMessage}>Send!</Button>
      </Center>
      </FormContainer>
    </form>


   </div>
 )
}