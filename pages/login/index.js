import React from 'react'
import styles from './login.module.css'

export default function Login() {
  return (
    <div>
      <form>
        <div className={styles.container}>
          <h1>Login</h1>
          <hr></hr>
          <label><b>Email/No Handphone</b></label>
          <input id={styles.email} type="text" placeholder="Enter Email/No Handphone"/>
          <label><b>Password</b></label>
          <input id={styles.password} type="password" placeholder="Enter Email"/>
          <button className={styles.login} type="submit">LOGIN</button>
        </div>
      </form>
</div>
  )
}