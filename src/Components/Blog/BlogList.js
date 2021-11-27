import React from 'react'
import Blog from './Blog'
export default function BlogList(props) {
    

    return (
        <div className='blog-list'>
            {props.state.map(x => {
                console.log(x, "X")
                return <Blog
                 title={x.entry_title}
                 date={x.date_created}
                content={x.entry_content}
                    description={x.entry_description}
                    key={Math.random().toString().substr(2, 8)}  
                /> 
            })}
        </div>
    )
}
