import React from 'react'
import CenterColumnScrollable from '../components/CenterColumnScrollable'
import PostAnnounceCard from '../components/PostsCard/PostAnnounceCard'
import PostCard from '../components/PostsCard/PostCard'

const IndexPage = () => {

    return (
        <CenterColumnScrollable>
            <PostCard/>
            <PostAnnounceCard users={Array(10).fill({avatar:"",fullName:"jhony"})} />
            <PostAnnounceCard users={Array(10).fill({avatar:"",fullName:"jhony"})} />
            <PostAnnounceCard users={Array(10).fill({avatar:"",fullName:"jhony"})} />
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </CenterColumnScrollable>
    )
}

export default IndexPage
