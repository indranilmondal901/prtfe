import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../homepage/Home.css"

const Home = () => {
    const navigate = useNavigate();
    const [query, setquery] = useState("");
    const [data, setData] = useState("");

    const handelSearch = () => {
        // e.preventDefault();
        console.log("search triggered");
        const access_key = "jbfx-gxqsNtLRRFk2OEhCDVXD9AW-dHWhK2by6uqE24";
        const url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${query}`
        console.log(url);
        axios.get(url).then((res) => {
            console.log(res.data.results);
            setData(res.data.results)
        })
    }

    const handelAdd = () => {
        window.alert("image added to bookmark")
    }

    return (
        <>
            <div id='hb'>
                <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>React Photo Search</h1>
                <button onClick={()=>{navigate("/bm")}}>Bookmarks</button>
            </div>
            <div id="search">
                <input type="text" onChange={(e) => { setquery(e.target.value) }} value={query} />
                <button onClick={() => {handelSearch()}}>Search</button>
            </div>
            <div id="res-sec">
                {data && data?.map((sD, i) => {
                    return (
                        <div id="card" key={i} onDoubleClick={()=>{handelAdd()}}>
                            <img src={sD.urls.full} alt={sD.id} height="300px" width="300px" />
                        </div>
                    )
                })

                }
            </div>
        </>
    )
}

export default Home

