import {useState,useEffect} from 'react';
import Records from "../records.json";
import './Header.css'
import Logo from '../components/Logo.jsx';
import Hamburger from '../components/Hamburger.jsx';
import LeftMenu from '../components/Left Menu.jsx';
import RightMenu from "../components/Right Menu.jsx";

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
                <Hamburger />
                <div className="menu">
                    <LeftMenu />
                    <RightMenu />
                </div>
            </div>
        </header>
    );
}