import Axios from 'axios'
import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './blog.css'
export default function TitleList() {
    const [state,setState] = useState('')
    useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/notes/v1/notes/titles/try`)
    .then(res => {
        setState(res.data)
    })
    .catch(err => {
        console.log(err)
    })
    }, [])
    if(state === ''){
        return ''
    }
    return (
        <div className='sidebar'>
            {state.map( x => {

                return (
                    <div key={x.id} className='title-card'>
                        <Link to={`${x.id}`} className='black'>
                        {x.entry_title}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
