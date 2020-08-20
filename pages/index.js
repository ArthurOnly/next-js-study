import { useState } from "react"

function Home() {
  const [name, setName] = useState("tete")
  return (
    <div id="login-page" className="login-page">
      <div className="form">
        <img
          src="https://suap.ifrn.edu.br/static/comum/img/logo-login.png"
          className="logo"
        />
        <div className="form-label">
          <img src="" />
          <h4>Login</h4>
        </div>
        <form>
          <div class="input-block"></div>
        </form>
      </div>
      <aside className="aside-menu"></aside>
      <footer></footer>

      <style jsx>{`
        #login-page {
          width: 100%;
          height: 100%;

          background-color: var(--background-dark);
          display: flex;
          flex-direction: column;
        }
        .form {
          background-color: var(--background-light);
          width: 90%;
          align-self: center;
          margin: auto 0;
          border-radius: var(--border-sm);
        }
        .form .logo {
          padding: 10px;
          display: block;
          margin: 0 auto;
        }
        .form .form-label {
          display: flex;
          flex-direction: row;
          margin: auto 20px;
          border-bottom: 1px solid var(--text-in-light);
          padding-bottom: 0.5rem;
        }
        .form .form-label h4 {
          font-weight: 300;
          font-size: 1.2rem;
          color: var(--text-in-light);
        }
      `}</style>
    </div>
  )
}

export default Home
