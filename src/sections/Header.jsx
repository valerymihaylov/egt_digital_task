import {useState,useEffect} from 'react';
import './Header.css'
import Nav from "../components/Nav.jsx";

export default function Header() {

    // const [data,setData]=useState([]);
    // const getData=()=>{
    //     fetch('src/records.js'
    //         ,{
    //             headers : {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function(response){
    //             console.log(response)
    //             return response.json();
    //         })
    //         .then(function(myJson) {
    //             console.log(myJson);
    //             setData(myJson)
    //         });
    // }
    //
    // useEffect(()=>{
    //     getData()
    // },[])

    return (
        <header>
            <Nav />
        </header>
    )
}