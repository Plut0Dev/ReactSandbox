import {useEffect, useState} from "react";
import {getSpotifyReleases} from "../../services/spotifyAPI.js";
import ReleaseCard from "./releaseCard.jsx";


function ReleaseCardLoader() {

    const [releases, setReleases] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const artistID = "7Jy9LT0pVmLsASefxS8v8O";


        async function fetchReleases() {
            if (!artistID) return;
            setLoading(true);
            try {
                const data = await getSpotifyReleases(artistID);
                if (!data) return;
                const sorted = data.sort((a, b) => {
                    const dateA = a.release_date;
                    const dateB = b.release_date;
                    if (dateA < dateB) {
                        return 1;
                    } else return -1;
                });
                setReleases(sorted);
            } catch (err) {
                setError(err);
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchReleases();

        console.log(releases);
    }, [])
    return (
        <>
            <div className="releaseLoader">

                {
                    error && <div>{error.message}</div>
                }
                {
                    loading && <div>Loading...</div>
                }
                {
                    releases.map((release) => (
                        <ReleaseCard key={release.id} img={release.images[0]?.url} title={release.name}
                                     artist={(release.artists || []).map((artist) => artist.name).join(", ")}
                                     type={release.total_tracks} links={release.external_urls}/>
                    ))
                }
            </div>
        </>
    )
}

export default ReleaseCardLoader;