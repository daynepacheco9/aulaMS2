import { useState, useEffect } from 'react'
import { ProdCard } from './components/ProdCard'
import { ApiCard } from './components/ApiCard' 
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import { Alert } from './components/Alert'
import style from './App.module.css'
import {Map} from './Map'

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const [alert, setAlert] = useState(false)


  useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        setAlert(true)
        setData([])
      }

      console.error(error)
    })

  }, [page,name])

  return (
    <>
    {
      alert && <Alert message="Esta pagina nao contem este personagem" action={()=> {setAlert(false); setName(""); setPage("")}}/>
    }
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.cardEnvelop}>
            {produtos.map((item) => {
              return(
                <ProdCard name={item.name} desc={item.desc} value={item.value} image={item.image} status={item.status} key={item.id}/>
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>
            <div >
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="Digite um nome" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className={style.cardEnvelop}>
            {data.map((item) => { 
             return(
              <div key={item.id}>
                <ApiCard {...item} />
                {/* <button onClick={() => {}}>Info</button> */}
              </div>
              )
           })}
            </div>
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa Senai Celso Charuri</h2>
          <div>
             <Map/>
          </div>
         </>
      }
    </div>
    </>
  )
}

export default App
