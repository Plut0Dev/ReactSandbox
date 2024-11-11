import axios from 'axios';

const TokenURL="https://accounts.spotify.com/api/token";

async function getSpotifyToken(){
    const response = await axios.post(
        TokenURL,
        new URLSearchParams({grant_type: 'client_credentials'}),
        {
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${btoa(`${import.meta.env.VITE_SPOTIFY_ID}:${import.meta.env.VITE_SPOTIFY_SECRET}`)} `,
            }
        }
    )
    return response.data.access_token;
}
async function getSpotifyReleases(artistID){
    const token = await getSpotifyToken();
    const link = `https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album,single,compilation&limit=50`
    const response=await axios.get(link,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
        }

    )

    return response.data.items;
}
export{getSpotifyToken, getSpotifyReleases}