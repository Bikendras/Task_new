import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function Cards() {
    const data = [
        {   id:   "1",
            head: "Sed volutput vitea id eleifend. Commando... ",
            para: "Interdum pretium porttitor nibh cursus...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id:   "2",
            head: "Rises natoque port eget vestibulum... ",
            para: "Nec facilisis duis venetis null porta...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id:   "3",
            head: "Rises natoque port eget vestibulum... ",
            para: "Nec facilisis duis venetis null porta...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id:   "4",
            head: "Rises natoque port eget vestibulum... ",
            para: "Nec facilisis duis venetis null porta...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id:   "5",
            head: "Rises natoque port eget vestibulum... ",
            para: "Nec facilisis duis venetis null porta...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id:   "6",
            head: "Sed volutput vitea id eleifend. Commando... ",
            para: "Interdum pretium porttitor nibh cursus...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
    ]
const [remove,setRemove] = useState("")
const navigate = useNavigate()
const handleRemove=()=>{
    console.log("Function called");
    axios.post("http//localhost:3000/remove").then=((res)=>{
        console.log(res);
        if(res?.data?.status==1){
            navigate('/nextpage')
        }
    }).catch=((error)=>{
        console.log(error);
    })
}
    return (
        <div>
            {
                data.map((a) => {
                    return (
                        <div className='mail'>
                            <div className='cards'>
                                <div className='id'>{a.id}</div>
                                <h3>{a.head}</h3>
                                <div className='paragraph'>{a.para}</div>
                                <div className='date'>{a.date}</div>
                                <div><img src={a.img} alt="" /></div>
                                <button onClick={handleRemove}>Remove</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
