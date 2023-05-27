import GalleryItem from "./GalleryItem"

function Gallery(props){

    const display = props.data.map((song, i)=> <GalleryItem item={song} key={i} />)

    return(
        <div>
            <h1><GalleryItem /></h1>
            {display}
        </div>
    )
}

export default Gallery