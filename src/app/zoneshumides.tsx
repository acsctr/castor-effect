import Image from "next/image";

export default function Zoneshumides() {
    return (
        <div className="zoneshumides">
            <p>Présence du castor ne signifie pas automatiquement présence d’un barrage. Mais lorsque le cours d’eau
                n’est pas large (moins de 7/8 mètres), que la nourriture vient à manquer et les prédateurs rôdent, les
                castors peuvent construire des digues de branches. « Ces barrages permettent de recréer des zones
                humides en augmentant la surface d’expansion de l’eau », explique Paul Hurel, responsable du réseau
                Castor à l’OFB. Le castor retrouve alors tous les éléments nécessaires à sa survie.</p>
            <p>Elles offrent en plus des habitats diversifiés pour d’autres d'espèces comme les poissons, les amphibiens, les oiseaux aquatiques et les mammifères, augmentant ainsi la diversité biologique globale : + 33 % de plantes et + 26 % de coléoptères en plus par rapport aux zones humides non créées par les castors, selon une étude de l'Université de Stirling menée sur un cours d’eau en Angleterre.</p>
            <Image
                src="/images/boxplot.svg"
                width={500}
                height={500}
                alt="Boxplot"
                className="boxplot"
            />
            <p>L’utilité du « roi du climat » va plus loin : ces zones humides sont de véritables station d’épuration en filtrant l’eau et en favorisant son absorption dans le sol, ce qui recharge les nappes phréatiques et les temporise les pics de crues. Elles luttent donc activement contre les effets du réchauffement climatique. Pourtant, ce sont des milieux extrêmement fragiles : 64 % des zones humides de la planète auraient disparu depuis 1900 ! Et pour celles qui subsistent en France, 41 % se sont dégradées entre 2010 et 2020. Il faut donc les protéger.</p>
            <p>Le fonds européen LIFE a accordé à la France 65 millions d’euros entre 2014 et 2020 pour préserver ces sites sensibles. Sur ce point encore, le castor est une aide précieuse, économique et écologique ! Néanmoins sa présence dérange les humains. Pas moins de deux cents conflits liés ont été enregistrés, dont 40 % liés à l’activité agricole.</p>
        </div>
    );
}