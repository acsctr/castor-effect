import Image from "next/image";

export default function Conflits() {

    return (
        <div className="conflits">
            <p>Malgré ses nombreux atouts, le castor peut entraîner des effets indésirables. <strong>213</strong> conflits liés à des barrages ont été recensés par l&apos;OFB en 2021. <strong>68 %</strong> sont dus à une inondation directe de terrains (agricoles dans 40 % des cas, de bâtiments à 15 % et d&apos;infrastructures de transport à 12 %). Dans la Meuse, <a href="https://www.terre-net.fr/ravageurs/article/867719/des-castors-rongent-le-moral-des-agriculteurs-dans-la-meuse" target="_blank">des agriculteurs se plaignent de champs inondés</a> et déplorent des pertes économiques.</p>
            <Image
                src="/images/Conflits_castors.svg"
                width={500}
                height={500}
                alt="Treemap des conflits entre humains et castors"
                className="treemap"
            />
            <p>Mais des solutions existent pour permettre une cohabitation sereine entre castors et agriculteurs. <strong>Le siphon est la solution privilégiée dans 36 % des cas.</strong> Objectif : réguler l&apos;eau sans déranger l&apos;animal. Ce dispositif doit être silencieux car le bruit de l&apos;eau qui coule provoque un stimulus déclenchant l&apos;acte instinctif de colmater une brèche.</p>
        </div>
    );
}