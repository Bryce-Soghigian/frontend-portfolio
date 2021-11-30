import React from 'react'
import { Link } from 'react-router-dom'
import './blog.css'
export default function BlogListItem(props) {
    // On click we want to redirect to article with id
    return (
        <>
            <Link to={`blog/${props.id}`} className='link-styling'>
                <div className='blog-container'>
                    <div className='top-list'>
                        <h1>{props.title}</h1>
                    </div>
                    <div>
                        <p>{props.description}</p>
                        <Link to={`blog/${props.id}`}>
                            Read more...
                        </Link>
                    </div>
                </div>

                <div>
                    <div className='tags-container'>
                    {props?.tags?.length != 0 ? (props.tags.map(x => {
                        return <Tag tag={x} />
                    })): ""}
                    </div>
                    <p>{props.date}</p>
                </div>
            </Link>
        </>
    )
}
