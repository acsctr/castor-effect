import Image from "next/image";
import Reintroduction from "./reintroduction";

export default function Expansion() {
    return (
        <div className="expansion">
            <p>Au début du XX<sup>e</sup> siècle, le castor est tout proche de la disparition. Sa population en France est estimée à une centaine d'individus. Plusieurs mesures vont permettre sa recolonisation : l'interdiction de sa chasse au niveau local en 1909, son classement en "espèce protégée" en 1968 et de nombreuses réintroductions.</p>
            <h2>La réintroduction des castors, un succès</h2>
            <Reintroduction />
            <p>Ce graphique permet de constater que 87 % des réintrouctions.</p>
            <p>En 1965, sa population était estimée à 3 000 castors, 5 000 en 1986 et 9 000 en 1997. En un siècle leur nombre a été multiplié par 150 ! Aujourd'hui, il y aurait une population d'au moins 20 000 individus sur plus de 18 000 km de cours d'eau.</p>
            <Image
                src="/images/reintroduction.png"
                width={390}
                height={100}
                alt="Réintroduction"
            />
            <p>Le Système d'information de l'inventaire du patrimoine naturel (SINP) recense les observations de castors à l'échelle nationale. Elles ne permettent pas une estimation précise du nombre de mammifères mais montrent une tendance.</p>
            <h3>Les observations de castors en France de 1958 à 2022</h3>
           <Image
                src="/images/observations_evolution.svg"
                width={390}
                height={100}
                alt="Nombre d'observations de castors en France de 1958 à 2022"
            />
            <p>Sur ce graphique, on constate une très forte hausse du nombre d'observations à partir des années 2000. La particularité de la répartition géographique du castor (sud-est, nord-est et Loire et Bretagne) s'explique en grande partie par ses lieux de réintroduction.</p>
            <img src="/images/carte_departements.svg" alt="Carte départements"/>
            <img src="/images/cours_deau.png" alt="Cours d'eau"/>
            <img src="/images/observations_2021.png" alt="Observations 2021"/>

        </div>
    );
}