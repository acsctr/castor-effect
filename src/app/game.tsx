import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";


export default function Game() {
    return (
        <div className="game my-5 p-4 rounded-md max-w-lg text-center">
            <h2>Jouer</h2>
            <FontAwesomeIcon icon={faCircleQuestion} size="4x" style={{ color: "white" }} beat
                id="mark" className="mt-2"></FontAwesomeIcon>
            <div id="jeu" hidden>
                <p className="mt-3">À votre avis, combien de castors restait-il en France dans les années 1930 ?</p>
                <div className="buttonLine mt-10">
                    <button className="rounded-md bg-white hover:bg-yellow-50 text-black hover:text-white mr-4 py-0.5 px-4" id="7">7</button>
                    <button className="rounded-md bg-white hover:bg-yellow-50 text-black hover:text-white py-0.5 px-4" id="27">27</button>
                </div>
            </div>
        </div>
    );
}