/* eslint-disable react/prop-types */
import style from './Card.module.css'

export const Card = ({name,desc,value,image,status,category}) => {
  return(
      <div className={style.cardStyle}>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <p>{value}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
          {status ? <div>🔴</div>:<div>🟢</div>}
      </div>
  )
}
