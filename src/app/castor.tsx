import Point from "./point";
import React from "react";

export default function Castor() {
    
    return (
        <div className="castor-parent">
            <Point numero="dot-1" />
            <Point numero="dot-2" />
            <Point numero="dot-3" />

            <span className="tooltip" id="text-1">Sa queue plate lui sert d'outil, de gouvernail et d'avertisseur pour les dangers.</span>
            <span className="tooltip" id="text-3">Le poids moyen de ce mammifère s'élève à 21 kg et il peut mesurer jusqu'à 1,20 m.</span>
            <span className="tooltip" id="text-2">Il se nourrit de branches, d'écorces, de feuilles...</span>


            <img id="castor" src="/images/castor.png" alt="Dessin de castor" />



        </div>
    );
}
