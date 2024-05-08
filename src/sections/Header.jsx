import {useState,useEffect} from 'react';
import Records from "../records.json";
import DropdownMenu from '../components/dropdown-menu.jsx';

export default function Header() {

    // const [data,setData]=useState([]);
    // const getData=()=>{
    //     fetch('src/records.json'
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
            <div className="container">
                <div className="logo">
                    <img src="" alt=""/>
                </div>
                <DropdownMenu />
                <div className="right"></div>
            </div>
        </header>
    );
}