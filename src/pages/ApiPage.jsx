import { ApiCard } from "../components/ApiCard"
import style from '../App.module.css'
import { Alert } from "../components/Alert"
import { useEffect, useState } from "react"
import {api} from "../api/rmApi"

export const ApiPage = () => {
    const [page, setPage] = useState("")
    const [name, setName] = useState("")
    const [data, setData] = useState([])
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        api.get(`/character/?page=${page}&name=${name}`).then((response) => {
            if (!response.data.results) {
                console.log("Vazio")
            }
            setData(response.data.results)
        }).catch((error) => {
            if (error.response.status === 404) {
                setAlert(true)
                setData([])
            }

            console.error(error)
        })

    }, [page, name])

    return (
        <>
            {
                alert && <Alert message="Esta pagina nao contem este personagem" action={() => { setAlert(false); setName(""); setPage("") }} />
            }
            <h2>Rick and Morty API</h2>
            <div >
                <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)} />
                <input type="text" placeholder="Digite um nome" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className={style.cardEnvelop}>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <ApiCard {...item} />
                            {/* <button onClick={() => {}}>Info</button> */}
                        </div>
                    )
                })}
            </div>
        </>
    )
}