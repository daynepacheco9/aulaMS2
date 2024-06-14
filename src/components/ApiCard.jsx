import style from '../App.module.css'

export const ApiCard = ({name,species,gender,image}) => {
  return(
      <div className={style.editCards}>
          <h1>{name}</h1>
          <h2>{species}</h2>
          <p>{gender}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}
