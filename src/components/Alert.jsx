import style from '../Alert.module.css'

export const Alert = ({message,action}) => {
  return(
      <div className={style.alertBody}>
        <dir className={style.alertContent}>
          <h2>Alert</h2>
          <span>{message}</span>
          <button onClick={action}>ok</button>
        </dir>
      </div>
  )
}