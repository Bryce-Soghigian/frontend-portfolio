import React from 'react'
import styled from 'styled-components';
import ContactForm from './ContactForm';

const ContactDiv = styled.div`
/* background-image:linear-gradient(45deg, rgba(4, 23, 92, 0.45) 0%, rgba(4, 23, 92, 0.45) 25%,rgba(23, 46, 132, 0.45) 25%, rgba(23, 46, 132, 0.45) 50%,rgba(42, 70, 173, 0.45) 50%, rgba(42, 70, 173, 0.45) 75%,rgba(61, 93, 213, 0.45) 75%, rgba(61, 93, 213, 0.45) 100%),linear-gradient(135deg, rgb(8, 63, 29) 0%, rgb(8, 63, 29) 25%,rgb(39, 70, 68) 25%, rgb(39, 70, 68) 50%,rgb(69, 77, 107) 50%, rgb(69, 77, 107) 75%,rgb(100, 84, 146) 75%, rgb(100, 84, 146) 100%);
    */
    background:#011627;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100vw;
`


export default function Contact() {

    return (
        <div>
            <ContactDiv>
 <ContactForm/> 
{/* <TravestyMediaForm/> */}
            </ContactDiv>

        </div>
    )
}