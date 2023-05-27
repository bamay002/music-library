import React,{ useState } from 'react'

function GalleryItem(props){
    let [view, setView] = useState(false)

    const simpleView = () => {
        return(
            <div>
                <h3>{props.song.trackName}</h3>
                <h4>{props.song.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return(
            <div>
                <h3>{props.song.trackName}</h3>
                <h4>{props.song.collectionName}</h4>
                <h4>{props.song.primaryGenreName}</h4>
                <h4>{props.song.releaseDate}</h4>
            </div>
        )
    }
    
    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
          { view ? detailView() : simpleView() }
        </div>
    )
}

export default GalleryItem
