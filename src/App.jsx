import './styles/App.css'
import MainHeader from "./components/mainHeader/mainHeader.jsx";
import ReleaseCardLoader from "./components/01_releaseCard/releaseCardLoader.jsx";
import FirstScene from "./components/02_three_js/first_scene.jsx";

function App() {



    return (
        <>
            <MainHeader></MainHeader>
            <h2 className="p_title">P01: ReleaseCard fetched from Spotify API</h2>
            <section className="pdev_project" id="p1_rC">
                <ReleaseCardLoader></ReleaseCardLoader>

            </section>
            <section className="pdev_project" id="p2_tjs">
                <FirstScene></FirstScene>
            </section>
        </>
    )
}

export default App

