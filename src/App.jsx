import './styles/App.css'
import MainHeader from "./components/mainHeader/mainHeader.jsx";
import ReleaseCardLoader from "./components/01_releaseCard/releaseCardLoader.jsx";


function App() {



    return (
        <>
            <MainHeader></MainHeader>
            <h2 className="p_title">P01: ReleaseCard fetched from Spotify API</h2>
            <section className="pdev_project" id="p1_rC">
                <ReleaseCardLoader></ReleaseCardLoader>

            </section>
        </>
    )
}

export default App

