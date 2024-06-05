import Image from "next/image";

export default function Barrages() {
    return (
        <div className="barrages flex justify-center">
            <Image
                src="/images/barrage_infographie.png"
                fill={true}
                alt="Schéma de la structure d'un barrage de castor"
                className="resp-img"
            />
        </div>
    );
}