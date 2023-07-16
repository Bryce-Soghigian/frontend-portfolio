import React from 'react'
import BlogListItem from './BlogListItem'


export default function BlogList(props) {
    return (
        <div className='blog-list'>
            {props.state.map(x => {
                return <BlogListItem
                id={x.id}
                title={x.entry_title}
                date={x.date_created}
                description={x.entry_description}
                content={"hi"}
                key={Math.random().toString().substr(2, 8)}  
                /> 
            })}
        </div>
    )
}
