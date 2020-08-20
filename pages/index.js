import { useState } from "react"

function Home() {
  const [name, setName] = useState("tete")
  return (
    <div id="login-page" className="login-page">
      <div className="form">
        <img src="" className="logo" />
        <div className="form-label">
          <img src="" />
          <h4>Login</h4>
        </div>
      </div>
      <aside className="aside-menu"></aside>
      <footer></footer>

      <style jsx>{`
        #login-page {
          width: 100%;
          height: 100%;

          background-color: var(--background-dark);
        }
      `}</style>
    </div>
  )
}

export default Home
