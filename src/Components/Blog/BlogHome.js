import React, { useEffect, useContext } from "react";
import BlogList from "./BlogList";
import LoadingBlogEntries from "./LoadingBlogEntries";
import { GlobalContext } from "../../contexts";
import { blogData} from "./BlogData.js"
import "./blog.css";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

export default function BlogHome() {
  const { state, dispatch } = useContext(GlobalContext);
  console.log(state)
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data", blogData)
      try {
        dispatch({
          type: "fetchBlogData",
          payload: blogData  
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="blog-header">
      <div>
        <h1>My personal archive of notes and insights</h1>
        <h3>Here is to me or potentially you gaining insight from this madness</h3>
      </div>
      {state.blogs === null ? <LoadingBlogEntries /> : <BlogList state={state.blogs} />}
    </div>
  );
}

