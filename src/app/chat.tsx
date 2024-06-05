import Image from "next/image";

export default function Chat() {
    return (
        <div className="chat my-5 flex justify-center">
            <Image
                src="/images/castor_chat.png"
                fill={true}
                alt="Comparatif de la taille d'un castor et d'un chat"
                className="resp-img"
            />
        </div>
    );
}