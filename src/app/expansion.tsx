import Image from "next/image";
import Reintroduction from "./reintroduction";
import Datasetupdate from './dataset_update';

export default function Expansion() {
    return (
        <div>
            <p>Au début du XX<sup>e</sup> siècle, le castor est tout proche de la disparition. Sa population en France est estimée à une centaine d&apos;individus. Plusieurs mesures vont permettre sa recolonisation : l&apos;interdiction de sa chasse au niveau local en 1909, son classement en &quot;espèce protégée&quot; en 1968 et de nombreuses réintroductions.</p>
            <h2>La réintroduction des castors, un succès</h2>
            <p>Plusieurs opérations de réintroduction des castors ont été menées en France à partir de 1957. Le nombre de castors réintroduits variait de 3 à 21. La plupart des réintroductions se sont conclues par un succès.</p>
            <Reintroduction />
            <Datasetupdate />
            <p className="text-xs text-center mb-5">Source : Faune sauvage n<sup>o</sup> 297 - 4<sup>e</sup> trimestre 2012</p>
            <p>En 1965, sa population était estimée à 3 000 castors, 5 000 en 1986 et 9 000 en 1997. En un siècle leur nombre a été multiplié par 150 ! Aujourd&apos;hui, il y aurait une population d&apos;au moins 20 000 individus sur plus de 18 000 km de cours d&apos;eau.</p>
            <Image
                src="/images/reintroduction.png"
                width={390}
                height={100}
                alt="Réintroduction"
            />
            <p>Le Système d&apos;information de l&apos;inventaire du patrimoine naturel (SINP) recense les observations de castors à l&apos;échelle nationale. Elles ne permettent pas une estimation précise du nombre de mammifères mais montrent une tendance.</p>
            <strong>Les observations de castors en France de 1958 à 2022</strong>
            <Image
                src="/images/observations_evolution.svg"
                width={390}
                height={100}
                alt="Nombre d&apos;observations de castors en France de 1958 à 2022"
            />
            <p>Sur ce graphique, on constate une très forte hausse du nombre d&apos;observations à partir des années 2000. La particularité de la répartition géographique du castor (sud-est, nord-est et Loire et Bretagne) s&apos;explique en grande partie par ses lieux de réintroduction.</p>
            <Image
                src="/images/carte_departements.svg"
                alt="Carte départements"
                width={390}
                height={400}
            />
            <Image
                src="/images/cours_deau.png"
                alt="Cours d&apos;eau"
                width={390}
                height={400}
            />
            <Image
                src="/images/observations_2021.png"
                alt="Observations 2021"
                width={390}
                height={400}
            />
        </div>
    );
}