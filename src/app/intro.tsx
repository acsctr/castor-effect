import Game from "./game";

export default function Intro() {

    return (
        <div id="intro">
            <p>Le castor revient en force et compte bien nous aider dans la lutte contre la sécheresse.</p>
            <Game />
            <p id="gametext7" hidden>BONNE RÉPONSE ! Considéré comme nuisible, chassé pour sa fourrure, pour ses glandes odorantes... Il ne restait que sept castors en France dans les années 1930, selon le comptage de l&apos;Office national de la chasse et de la faune sauvage (ONCFS). Il était pourtant le premier mammifère à faire l&apos;objet d&apos;une protection dès 1909.</p>
            <p id="gametext27" hidden>EH NON ! Considéré comme nuisible, chassé pour sa fourrure, pour ses glandes odorantes... Il ne restait que sept castors en France dans les années 1930, selon le comptage de l&apos;Office national de la chasse et de la faune sauvage (ONCFS). Il était pourtant le premier mammifère à faire l&apos;objet d&apos;une protection dès 1909.</p>
            <h3>Une espèce parapluie</h3>
            <p>Si l&apos;Hexagone a failli voir disparaître cette &quot;espèce parapluie&quot;, qui en favorise tant d&apos;autres, la tendance s&apos;est heureusement inversée. En un siècle, la population a été multipliée par 150 ! On compte donc, en cette &quot;année officielle du castor&quot; plus de 20 000 individus, dans une soixantaine de départements.</p>
            <p>Il faut s&apos;en réjouir : cet animal, véritable &quot;ingénieur des cours d&apos;eau&quot;, est un marqueur de la bonne santé de nos rivières et participe activement à la lutte contre les inondations et la sécheresse.</p>
        </div>
    );
}