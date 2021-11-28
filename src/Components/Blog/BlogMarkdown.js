import React from 'react'
import ReactMarkdown from 'react-markdown'


export default function BlogMarkdown(props) {


    return (
        <div className='align-left'>
        <ReactMarkdown>{props.content}</ReactMarkdown>
        </div>
    )
}
