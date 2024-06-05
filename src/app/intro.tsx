import Game from "./game";

export default function Intro() {

    return (
        <div id="intro" className="flex flex-col justify-center">
            <p>Le castor revient en force et compte bien nous aider dans la lutte contre la sécheresse.</p>
            <p>Si l&apos;Hexagone a failli voir disparaître cette <strong>espèce parapluie</strong>, qui en favorise tant d&apos;autres, la tendance s&apos;est heureusement inversée.</p>
            <Game />
            <p className="text-xs leading-snug mb-5" id="gametext7" hidden>BONNE RÉPONSE ! Considéré comme nuisible, chassé pour sa fourrure, pour ses glandes odorantes... Il ne restait que sept castors en France dans les années 1930, selon le comptage de l&apos;Office national de la chasse et de la faune sauvage (ONCFS). Il était pourtant le premier mammifère à faire l&apos;objet d&apos;une protection dès 1909.</p>
            <p className="text-xs leading-snug mb-5" id="gametext27" hidden>EH NON ! Considéré comme nuisible, chassé pour sa fourrure, pour ses glandes odorantes... Il ne restait que sept castors en France dans les années 1930, selon le comptage de l&apos;Office national de la chasse et de la faune sauvage (ONCFS). Il était pourtant le premier mammifère à faire l&apos;objet d&apos;une protection dès 1909.</p>
            <p>En un siècle, la population a été multipliée par 150 ! On compte donc, en cette &quot;année officielle du castor&quot; plus de 20 000 individus, dans une soixantaine de départements.</p>
            <p>Il faut s&apos;en réjouir : cet animal, véritable &quot;ingénieur des cours d&apos;eau&quot;, est un marqueur de la bonne santé de nos rivières et participe activement à la lutte contre les inondations et la sécheresse.</p>
        </div>
    );
}