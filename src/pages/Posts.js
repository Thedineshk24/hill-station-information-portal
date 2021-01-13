import React, { useState } from 'react';
import "./css/posts.css";

// post
import Post from "./Post";

import {
    selectEmail,
} from "../features/user/SignInSlice";

import {useSelector} from "react-redux";

const Posts = () => {
  let email = useSelector(selectEmail);
  console.log(selectEmail);
  console.log(email);


    return (
        <div className="posts">
        <h2>post's {email ? email : ""} </h2>
            <div className="post">
                <Post
                    imageUrl="https://uttarakhandtourism.gov.in/wp-content/uploads/2018/11/naintal_pic3.jpg"
                    placeName="nainital"
                    description="nainital is named after the name of holy maa naina." />

                <Post
                    imageUrl="https://uttarakhandtourism.gov.in/wp-content/uploads/2018/11/naintal_pic3.jpg"
                    placeName="nainital"
                    description="nainital is named after the name of holy maa naina." />

                <Post
                    imageUrl="https://uttarakhandtourism.gov.in/wp-content/uploads/2018/11/naintal_pic3.jpg"
                    placeName="nainital"
                    description="nainital is named after the name of holy maa naina." />


                <Post
                    imageUrl="https://uttarakhandtourism.gov.in/wp-content/uploads/2018/11/naintal_pic3.jpg"
                    placeName="nainital"
                    description="nainital is named after the name of holy maa naina." />

                <Post
                    imageUrl="https://uttarakhandtourism.gov.in/wp-content/uploads/2018/11/naintal_pic3.jpg"
                    placeName="nainital"
                    description="nainital is named after the name of holy maa naina." />

                <Post
                    imageUrl="https://uttarakhandtourism.gov.in/wp-content/uploads/2018/11/naintal_pic3.jpg"
                    placeName="nainital"
                    description="nainital is named after the name of holy maa naina." />

                <Post
                    imageUrl="https://uttarakhandtourism.gov.in/wp-content/uploads/2018/11/naintal_pic3.jpg"
                    placeName="nainital"
                    description="nainital is named after the name of holy maa naina." />

                <Post
                    imageUrl="https://uttarakhandtourism.gov.in/wp-content/uploads/2018/11/naintal_pic3.jpg"
                    placeName="nainital"
                    description="nainital is named after the name of holy maa naina." />
            </div>
        </div>
    )
}

export default Posts
