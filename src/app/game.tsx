export default function Game() {
    return (
        <div className="game my-5 p-4 rounded-md max-w-lg">
            <p>À votre avis, combien de castors restait-il en France dans les années 1930 ?</p>
            <div className="buttonLine mt-10">
                <button className="rounded-md" id="7">7</button>
                <button className="rounded-md" id="27">27</button>
            </div>
        </div>
    );
}