import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";
export default function Cards() {
    const [data, setData] = useState([
        {
            id: 1,
            head: "Sed volutput vitea id eleifend. Commando... ",
            para: "Interdum pretium porttitor nibh cursus...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 2,
            head: "Rises natoque port eget vestibulum... ",
            para: "Nec facilisis duis venetis null porta...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 3,
            head: "foreign country volutput vitea id eleifend... ",
            para: "Interdum pretium porttitor nibh cursus...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 4,
            head: "any state of which one is not a citizen... ",
            para: "Nec facilisis duis venetis null porta...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 5,
            head: "first put the animal on its coat of arms... ",
            para: "Nec facilisis duis venetis null porta...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 6,
            head: "this species is not found in Japan...",
            para: "Interdum pretium porttitor nibh cursus...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 7,
            head: "Sed volutput vitea id eleifend. Commando... ",
            para: "Interdum pretium porttitor nibh cursus...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 8,
            head: "Rises natoque port eget vestibulum... ",
            para: "Nec facilisis duis venetis null porta...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 9,
            head: "foreign country volutput vitea id eleifend... ",
            para: "Interdum pretium porttitor nibh cursus...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 10,
            head: "any state of which one is not a citizen... ",
            para: "Nec facilisis duis venetis null porta...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 11,
            head: "first put the animal on its coat of arms... ",
            para: "Nec facilisis duis venetis null porta...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 12,
            head: "this species is not found in Japan...",
            para: "Interdum pretium porttitor nibh cursus...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 13,
            head: "Sed volutput vitea id eleifend. Commando... ",
            para: "Interdum pretium porttitor nibh cursus...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 14,
            head: "Rises natoque port eget vestibulum... ",
            para: "Nec facilisis duis venetis null porta...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 15,
            head: "foreign country volutput vitea id eleifend... ",
            para: "Interdum pretium porttitor nibh cursus...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 16,
            head: "any state of which one is not a citizen... ",
            para: "Nec facilisis duis venetis null porta...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 17,
            head: "first put the animal on its coat of arms... ",
            para: "Nec facilisis duis venetis null porta...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
        {
            id: 18,
            head: "this species is not found in Japan...",
            para: "Interdum pretium porttitor nibh cursus...",
            date: "Mon, 21 Dec 2020 14:57 GMT",
            img: "abc.jpg"
        },
    ]);
    const [loading,setLoading] = useState(true);
    const [currentpage,setCurrentpage] = useState(1);
    const cardperPage = 6;

    const handlepageChange=(page)=>{
        setCurrentpage(page)
    }
    const startIndex = (currentpage-1)*cardperPage;
    const endIndex = startIndex + cardperPage;
    const cardstoDisplay = data.slice(startIndex,endIndex);

    const handleRemove = (index) => {
         // Create a copy of the data array
        const dataCopy = [...data];
        // Remove the element at the specified index
        dataCopy.splice(index, 1);
        // Update the state with the modified array
        setData(dataCopy); 
    }

    const handleAddcard=(index)=>{
        const dataCopy = [...data];
        const newdata=data.splice(index+1,1);
        console.log(newdata);
        dataCopy.push(...newdata);
        console.log(dataCopy);
        setData(dataCopy);
    }
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);

    const NextCard =(cardIndex)=>{
        console.log(cardIndex)
    }
    return (
        <div style={{display: "grid"}}>
            {loading?(<h1 style={{display: "flex", placeSelf: "center"}}>Loading...</h1>):(
                <div>
                {
                    cardstoDisplay.map((a, index) => {
                        return (
                            <div className='mail'>
                                <div className='cards'>
                                    <div className='id'>{a.id}</div>
                                    <h3>{a.head}</h3>
                                    <div className='paragraph'>{a.para}</div>
                                    <div className='date'>{a.date}</div>
                                    <div><img src={a.img} alt="" /></div>
                                    <button onClick={(e) => handleRemove(index)}>Remove</button>
                                    <button onClick={(e) => handleAddcard(index)}>Addcard</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            )}
            {/* Pagination  page
            <div style={{display: "flex", placeSelf: "center", padding: 10}}>
                {data.length>cardperPage&&(
                    <Pagination 
                     currentpage={currentpage}hello
                     totalpages={Math.ceil(data.length/cardperPage)}
                     onPageChange={handlepageChange}
                    />
                )}
            </div> */}
            
            <div style={{display: "flex", placeSelf: "center"}}>
                {data.map((item, index) => (
                    <div style={{marginRight:8, cursor:"pointer"}} onClick={(e) =>NextCard(index)}><img src={item.img}></img> </div>
                ))}
            </div>
            {/* <Outlet/> */}
            <Link to='/tableEdit' style={{placeSelf: "center", fontSize:30,padding:30}}>TableEdit</Link>
        </div>
    )
}
