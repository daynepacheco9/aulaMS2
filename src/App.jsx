
import style from './App.module.css'

function App({children}) {
  return (
    <>
      <div className={style.wrapBtns}>
        <a href="/">Produtos</a>
        <a href="/api">API</a>
        <a href="/map">Maps</a>
        <a href="/graphs">Graficos</a>
      </div>
      <div className={style.wrapPage}>
        {children}
      </div>
    </>
  )
}

export default App
