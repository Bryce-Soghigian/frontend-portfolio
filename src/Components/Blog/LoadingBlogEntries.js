import React from 'react'
import LoadingSpinner from '../Schedule/Calendar/LoadingSpinner'
export default function LoadingBlogEntries() {
    return (
        <div className='loading-screen'>
            <h2>Give the api a moment to wake up and provide you the information you requested!</h2>
            <LoadingSpinner />
        </div>
    )
}
