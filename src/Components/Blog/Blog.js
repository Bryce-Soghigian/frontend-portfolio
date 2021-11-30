import React, { useState, useEffect } from 'react'
import BlogMarkdown from './BlogMarkdown'
import './blog.css'
import Axios from 'axios'
import LoadingBlogEntries from './LoadingBlogEntries'
export default function Blog({ match }) {
    const [state, setState] = useState('')
    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/notes/v1/notes/retrieve/${match.params.blog_id}`)
            .then(res => {
                setState(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [match.params.blog_id])
    if (state === "") {
        return <LoadingBlogEntries />
    }

    return (
        <div className='entry-container'>

            <div className='top-container'>


            <div className='entry-top'>
            <h1 className='title'>{state.entry_title}</h1>
                <h4 className='margin-none'>Written By: Bryce Soghigian</h4>
                
                <div className='sub-topics'>
                    <h3 className='margin-none'>{state.date_created}</h3>
                    <h6 className='margin-none'>Topic: {state.category}</h6>
                </div>
            </div>
            <div>
            <h5>Short Description:</h5>
            <p className='entry-description'>{state.entry_description}</p>
            </div>

            </div>
            <div className='entry-content'>
                <BlogMarkdown content={state.entry_content} />
            </div>

        </div>
    )
}
