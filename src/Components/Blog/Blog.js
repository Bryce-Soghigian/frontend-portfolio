import React,{useState} from 'react'
import BlogMarkdown from './BlogMarkdown'
import './blog.css'
export default function Blog(props) {
    const [toggle, setToggle] = useState(true)
    return (
        <div onClick={() => setToggle(!toggle)} className='blog-container'>
            <div className='top-blog'>
                <h2>{props.title}</h2>
                <h4>{props.date}</h4>
            </div>
            <p>{props.description}</p>

            {toggle === true ? <BlogMarkdown blog_content={props.content}/>: "GOOOSE"}
        </div>
    )
}
