import { ProdCard } from "../components/ProdCard"
import produtos from '../constants/produtos.json'
import style from '../App.module.css'

export const ProdPage = () => {
    return (
        <>
            <h2>Showroom de produtos</h2>
            <div className={style.cardEnvelop}>
                {produtos.map((item) => {
                    return (
                        <ProdCard name={item.name} desc={item.desc} value={item.value} image={item.image} status={item.status} key={item.id} />
                    )
                })}
            </div>
        </>
    )

}