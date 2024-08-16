import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./dashboard.module.css"
import { socket } from '../socket'

export default function Dashboard() {

  const navigate = useNavigate()
  const [user, setUser] = useState()
  const [typeSearching, setTypeSearching] = useState('Users')
  const [listInfo, setListInfo] = useState([])
  const [search, setSearch] = useState('')

  function handelTypeSearching(e){
    setTypeSearching(e.target.value)
    setSearch('')
  }

  function handleSearch(e){
      setSearch(e.target.value)
      socket.emit(`search ${typeSearching}`, search)
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) {
      navigate("/")
    }
    setUser(user.name)
    socket.on('searching', (data) => {
      console.log(data)
      setListInfo(data.info)
    })
  }, [])

  return (
    <div className={style.principalDashboard}>
      <div className={style.slidebar}>
        <h3 className={style.titleDashboard}>Dashboard</h3>
        <div className={style.contenedorDashboard}>
          <ul className={style.menu}>
            <li><h3>{user}</h3></li>
            <li className={style.opcion}><button onClick={handelTypeSearching} value={'Users'}>Users</button></li>
            <li className={style.opcion}><button onClick={handelTypeSearching} value={'Movies'}>Movies</button></li>
            <li className={style.opcion}><button onClick={handelTypeSearching} value={'Comments'}>Comments</button></li>
          </ul>
        </div>
      </div>
      <div className={style.showInfoDashboard}>
        Contenedro donde iran los datos dependiendo la seleccion
        <input type="text" value={search} onChange={handleSearch} />
        <ul>
          {listInfo?.map((item, i)=>{
              return (
                <li key={i}>{item.name || item.title}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
