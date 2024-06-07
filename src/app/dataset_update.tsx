'use client'

import { useState, useEffect, useCallback } from 'react'

let url = process.env.NEXT_PUBLIC_ODS_BASE_URL + "catalog/datasets/resultat_reintroductions_castors?select=modified&timezone=UTC&include_links=false&include_app_metas=false&apikey=" + process.env.NEXT_PUBLIC_ODS_API_KEY;
console.log(url);



export default function Datasetupdate() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const date_options: any = { year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                data = (new Intl.DateTimeFormat('fr-FR', date_options).format(new Date(Date.parse(data.modified))));
                setData(data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <p>Récupération de la date de mise à jour en cours...</p>
    if (!data) return <p>Date de mise à jour inconnue</p>

    return (
        <p className="text-xs text-center">
            Date de dernière mise à jour des données sur opendatasoft : {data}
        </p>
    )
}
