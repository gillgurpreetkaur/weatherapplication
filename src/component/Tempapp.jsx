import React, { useEffect, useState } from "react";
import "./css/style.css";
import { IonIcon } from "@ionic/react";
import { locationOutline } from "ionicons/icons";
const Tempapp =()=>{
    const [city,setCity]= useState(null);
    const [search,setSearch] = useState("Mumbai");
    useEffect(()=>{
        const fetchApi = async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b0542c26026046f06070f7ec455f684b`;

            // const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b0542c26026046f06070f7ec455f684b`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
       fetchApi();
    },[search]);
    return(
        <>
         <h4>Weather Application</h4>
            <div className="box">
            <div className="inputData">
            <input type="search"  value={search} className="inputFeild" onChange={(event)=>{setSearch(event.target.value)}}/>
            </div>
           {!city ? (
            <p>No Data Get</p>
           ):(
            <div>
            <div className="info">
                <h2 className="location">
                <IonIcon icon={locationOutline} /> {search}
                </h2>
                <h1 className="temp">{city.temp}°Cel </h1>    
                <h3 className="tempmin_max">Min:{city.temp_min}°Cel | Max:{city.temp_max}°Cel</h3>
            </div>
            </div>
           )}
           
            </div>
        </>
    )
}
export default Tempapp;