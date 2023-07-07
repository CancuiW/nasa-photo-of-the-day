import React from "react";

export default function NasaPhoto (props){
    return (
        <div className="flex flex-col items-center">
        <h3>{props.datas.title}</h3>
        <p>{props.datas.date}</p>
            <img src={props.datas.hdurl} className="w-3/4 h-auto" /> 
        <p>{props.datas.explanation}</p>
        </div>


    )



}
/*
需要在original data中找到的信息
date: "2023-07-05"

explanation: "What if you could see out to the edge of the observable universe? You would see galaxies, galaxies, galaxies, and then, well, quasars, which are the bright centers of distant galaxies.  To expand understanding of the very largest scales that humanity can see, a map of the galaxies and quasars found by the Sloan Digital Sky Survey from 2000 to 2020 -- out to near the edge of the observable universe -- has been composed. Featured here, one wedge from this survey encompasses about 200,000 galaxies and quasars out beyond a look-back time of 12 billion years and cosmological redshift 5.  Almost every dot in the nearby lower part of the illustration represents a galaxy, with redness indicating increasing redshift and distance. Similarly, almost every dot on the upper part represents a distant quasar, with blue-shaded dots being closer than red. Clearly shown among many discoveries, gravity between galaxies has caused the nearby universe to condense and become increasingly more filamentary than the distant universe.   More Detailed Maps: Related to Today's APOD"

hdurl: "https://apod.nasa.gov/apod/image/2307/MapObsUni_SDSS_2400.jpg"

title: "A Map of the Observable Universe"

*/