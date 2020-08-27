import { useState } from "react"
import { useRouter } from "next/router"

import Button from "../components/Button"

export async function getStaticProps() {
  //Executado antes da pagina ser entregue ao cliente
  return {
    props: {
      posts: { hi: "hello" },
    },
  }
}

function Home({ posts }) {
  const router = useRouter()

  return (
    <div id="login-page" className="login-page">
      <h1>{JSON.stringify(posts)}</h1>
      <h1 onClick={() => router.push("/help", "teste")}>router</h1>
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
          <div className="input-block">
            <label htmlFor="login">Usuário</label>
            <input name="login" type="text"></input>
          </div>
          <div className="input-block">
            <label htmlFor="login">Usuário</label>
            <input name="login" type="text"></input>
          </div>
          <button type="submit">Acessar</button>
        </form>
        <div className="help">
          <a href="#">Esqueceu ou deseja alterar sua senha?</a>
        </div>
      </div>
      <aside className="aside-menu"></aside>
      <footer>
        <Button />
      </footer>

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
          max-width: 600px;
          align-self: center;
          margin: auto 0;
          padding: 45px 0;
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
          border-bottom: 1px solid #eee;
          padding-bottom: 0.5rem;
        }
        .form .form-label h4 {
          font-weight: 300;
          font-size: 1.2rem;
          color: #999;
        }

        .form form {
          display: flex;
          flex-direction: column;
          margin: auto 20px;
          margin-top: 1.5rem;
        }

        .form .input-block {
          display: flex;
          flex-direction: column;
        }

        .form .input-block label {
          font-size: 0.8rem;
          color: var(--text-in-light);
          margin-bottom: 0.3rem;
        }
        .form .input-block input {
          height: 2.8rem;
          border: 2px solid var(--text-in-label);
          border-radius: var(--border-sm);
          padding: 0 0.8rem;
        }
        .form .input-block input:focus {
          border: 2px solid var(--primary);
          outline: 0;
        }
        .form .input-block + .input-block {
          margin-top: 1rem;
        }

        .form form button {
          margin-top: 1rem;
          border-radius: 2rem;
          height: 2.8rem;
          background-color: var(--primary);
          color: #fff;
          font-size: 1rem;
          font-weight: 300;
          cursor: pointer;
        }
        .form form button:hover {
          background-color: var(--primary-hover);
        }
        .form .help {
          margin-top: 1rem;
          display: flex;
          justify-content: flex-end;
        }
        .form a {
          font-size: 0.8rem;
          color: var(--primary);
          margin: auto 20px;
          align-self: flex-end;
        }
      `}</style>
    </div>
  )
}

export default Home
