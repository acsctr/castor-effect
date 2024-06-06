import Image from "next/image";

export default function Barrages() {
    return (
        <div className="barrages flex justify-center bg-green-500/90">
            <Image
                src="/images/barrage_infographie.png"
                fill={true}
                alt="Schéma de la structure d'un barrage de castor"
                className="resp-img"
            />
        </div>
    );
}