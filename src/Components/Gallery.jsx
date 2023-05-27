import GalleryItem from "./GalleryItem"
import React,{ useContext } from "react"
import { DataContext } from "../Context/DataContext"



function Gallery(){
    const data = useContext(DataContext)

    const display = data.map((song, i) => {
        return (
            <GalleryItem item={song} key={i} />
        )
    })

    return(
        <div>
            <h1>Gallery</h1>
            {display}
        </div>
    )
}

export default Gallery