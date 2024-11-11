import PropTypes from "prop-types";
import {useState} from "react";

function ReleaseCard(props) {
    let [clicked, setClicked] = useState(false);
    let [backside, setBackside] = useState(false);
    let cover = new URL(props.img, import.meta.url).href;
    let artist = props.artist;
    let title = props.title;
    let type = props?.type;
    let links = props.links;
    if (type < 3) {
        type = "Single"
    } else if (type > 3 && type < 8) {
        type = "EP"
    } else {
        type = "Album"
    }


    const cardClicked = (e) => {
        const target = e.currentTarget
        if (!clicked) {
            setClicked(true);
            setTimeout(() => {
                setClicked(false);
            }, 1000,)

            if (backside) {
                setTimeout(() => {
                    setBackside(false);
                    target.classList.remove("backside");
                },)
            } else {
                setTimeout(() => {
                    setBackside(true);
                    target.classList.add("backside");
                },)
            }

        }
    };
    return (
        <>
            <div className={`releaseCard`} onClick={cardClicked}>
                <div className="cover">
                    <img src={cover} alt={`Cover: ${title} by ${artist}`}/>
                </div>
                <h3>{title}</h3>
                <p className="artist_name">{artist}</p>
                <div className="type_badge">
                    {type ? type : "Release"}
                </div>
                <div className="backside">
                    {
                        links.spotify && <a href={links.spotify}>Spotify</a>

                    }
                    {
                        links.apple_music && <a href="">Apple Music</a>
                    }
                    {
                        links.youtube && <a href="">Youtube</a>

                    }


                </div>
            </div>

        </>


    )
}

export default ReleaseCard;
ReleaseCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    type: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.string)
}