import * as THREE from 'three';
import {useEffect, useRef} from "react";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import star_3d from "../../assets/3d/star_3d.glb"

function FirstScene() {
    //Reference to the Object i want to put the renderer on
    const mountRef = useRef(null);
    //Reference to the 3d Object
    const starRef = useRef(null);

    useEffect(() => {
        //Current Dom Element
        let delm = mountRef.current
        //Creating a transparent Scene
        const scene = new THREE.Scene();
        scene.background = null;
        //Creating a camera and position it in front of the scene looking on the scene
        const camera = new THREE.PerspectiveCamera(
            75,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;
        camera.lookAt(0,0,0)
        //Creating a renderer sized as the div container it's added to
        const renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        delm.appendChild(renderer.domElement);

        //Load the 3d Object I generated
        const loader = new GLTFLoader();
        loader.load(star_3d,(gltf)=>{
            const star = gltf.scene;
            starRef.current = star;
            scene.add(star);
            //Position it right in the center and size it up
            star.position.set(0, 0, 0);
            star.scale.set(3,3,3)

        })
        //Add some ambient Light
        const light = new THREE.AmbientLight(0xffffff, 10);
        scene.add(light);
        renderer.render(scene, camera);
        //Rotate the Star
        function animate() {
            requestAnimationFrame(animate);

            if (starRef.current) {
                starRef.current.rotation.y += 0.005;
            }
            renderer.render(scene, camera);
        }
        animate()
        //Cleanup
        return () => {
           delm.removeChild(renderer.domElement);
           renderer.dispose();
        }

    }, [mountRef]);

    return (
        //Element i want to add the scene to.
        <div ref={mountRef} className="first_scene"></div>
    )
}
export default FirstScene;