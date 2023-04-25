import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Bookmark = () => {
    const { id } = useParams();
    console.log(id);
    const [bd,setbd]= useState("");

    useEffect(()=>{
        const access_key = "jbfx-gxqsNtLRRFk2OEhCDVXD9AW-dHWhK2by6uqE24";
        const url = `https://api.unsplash.com/photos/${id}?client_id=${access_key}`;
        // console.log(url);
        axios.get(url).then((res)=>{
            console.log(res.data.urls.full)
            setbd(res.data.urls.full)
        }).catch((err)=>{
            console.log(err);
        })
    },[id])
    // console.log(bd);

    return (
        <>
        <div>
            <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}> YOUR BOOKMARKS </h1>
        </div>
        <div>
            {
              <img src={bd} alt={id} height="300px" width="300px" />
            }
        </div>
        </>
    )
}

export default Bookmark
