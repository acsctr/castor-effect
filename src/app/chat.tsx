import Image from "next/image";

export default function Chat() {
    return (
        <div className="chat">
            <h2>Les mensurations du castor</h2>
            <Image
                src="/images/castor_chat.png"
                width={390}
                height={400}
                alt="Castor vs chat"
            />
        </div>
    );
}