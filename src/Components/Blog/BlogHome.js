import React,{useEffect, useContext} from "react";
import BlogList from "./BlogList"
import LoadingBlogEntries from "./LoadingBlogEntries.js"
import Axios from "axios";
import { GlobalContext } from "../../contexts";
import "./blog.css"

export default function BlogHome(){
const { state, dispatch } = useContext(GlobalContext);
const base_url = "http://127.0.0.1:8000"
useEffect(() => {
	Axios.get(`${base_url}/notes/v1/notes/entry`)
	.then(res => {
		

		dispatch({
			type:"fetchBlogData",
			payload:res.data
		})
	})
	.catch(err => {
		console.log(err)
	})
}, [dispatch])


	return (
		<div className='blog-header'>
			<div>
			<h1> My personal archive of notes and insights </h1>
			<h3>Here is to me or potentially you gaining insight from this madness</h3>
			</div>
			{state.blogs === null ? <LoadingBlogEntries /> : <BlogList state={state.blogs} />}
		</div>
	)

}
