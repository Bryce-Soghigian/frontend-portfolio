import React,{useState, useEffect} from "react";
import BlogList from "./BlogList"
import LoadingBlogEntries from "./LoadingBlogEntries.js"
import Axios from "axios";
import "./blog.css"
export default function BlogHome(){
/*
 This Component needs to
 1. Fetch Catagories From API
 2. Display Cards For all blog entries.
 */
const [state,setState] = useState('')
const base_url = "http://127.0.0.1:8000"
useEffect(() => {
	Axios.get(`${base_url}/notes/v1/notes/entry`)
	.then(res => {
		
		console.log(res.data,"RES.data")
		setState([res.data])
	})
	.catch(err => {
		console.log(err)
	})
}, [])

	return (
		<div className='blog-header'>
			<div>
			<h1> My personal archive of notes and insights </h1>
			<h3>Click on a note to expand and read its contents</h3>
			</div>
			{state.length === 0 ? <LoadingBlogEntries /> : <BlogList state={state[0]} />}
		</div>
	)

}
