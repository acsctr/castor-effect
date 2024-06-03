import Image from "next/image";

export default function Barrages() {
    return (
        <div className="barrages">
            <Image
                src="/images/barrage_infographie.png"
                width={390}
                height={400}
                alt="Nombre d'observations de castors en France de 1958 à 2022"
            />
        </div>
    );
}