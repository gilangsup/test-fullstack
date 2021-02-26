import {useState} from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { useRouter} from 'next/router'

export default function Navbar(props) {
  const router = useRouter()

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search?name=${search}`)
  }

  return (
    <div className={styles.topnav}>
      <Link href="/"><a>Home</a></Link>
      <Link href="/login"><a>Login</a></Link>
      <Link href="/register"><a>Register</a></Link>
      <div className={styles.searchbar}>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search.." name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
          <input type="submit" value="Submit" className={styles.submit}/>
        </form>
      </div>
    </div>
  )
}
