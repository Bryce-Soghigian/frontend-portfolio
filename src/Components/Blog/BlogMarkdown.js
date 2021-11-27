import React,{useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import LoadingSpinner from '../Schedule/Calendar/LoadingSpinner'



function BlogMarkdownContent(props){


    return (
        <div>
        <ReactMarkdown>{props.content}</ReactMarkdown>
        </div>
    )

}
export default function BlogMarkdown(props) {
    console.log(props)
    const [load, setLoad] = useState(true)
    const [processedContent, setProcessedContent] = useState('')
    useEffect(() => {
    setLoad(!setLoad)
    setProcessedContent(props.blog_content)
    }, [])

    return (  
        <div>
        {load === true ? <LoadingSpinner />: <BlogMarkdownContent content={processedContent} />}    
        </div>
    )
}
