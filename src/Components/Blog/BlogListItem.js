import React from 'react'
import {Link} from 'react-router-dom'
import './blog.css'
export default function BlogListItem(props) {
    // On click we want to redirect to article with id
    return (
        <>
        <Link to={`blog/${props.id}`} className='link-styling'>
        <div className='blog-container'> 
            <div className='top-blog'>
                <h2>{props.title}</h2>
                <h4>{props.date}</h4>
            </div>
            <br/>
            <p>{props.description}</p>
        </div>
        </Link>
        </>
    )
}
