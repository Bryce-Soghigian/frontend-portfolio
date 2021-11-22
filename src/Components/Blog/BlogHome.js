import React,{useState, useEffect} from "react";
import CategoryList from "./CategoryList.js"
import LoadingBlogEntries from "./LoadingBlogEntries.js"

export default function BlogHome(){
/*
 This Component needs to
 1. Fetch Catagories From API
 2. Display Cards For all blog entries.
 */
const [state,setState] = useState('')


	return (
		<div>
			<div className='blog-header'>
			<h1> Notes, Blog Entries, and anything else useful that a developer would need. </h1>
			</div>
			{state === '' ? <LoadingBlogEntries /> : <CategoryList />}
		</div>
	)

}
