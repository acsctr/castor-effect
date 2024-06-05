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
                    <button className="rounded-md" id="7">7</button>
                    <button className="rounded-md" id="27">27</button>
                </div>
            </div>
        </div>
    );
}