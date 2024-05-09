 import {useState,useEffect} from 'react';
import Records from "../records.json";
import DropdownMenus from '../components/DropdownMenus.jsx';
import Logo from '../components/Logo.jsx';
import Links from "../components/Links.jsx";

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
                <Logo />
                <DropdownMenus />
                <Links />
            </div>
        </header>
    );
}