import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Fetch = () => {
  const[num,setNum] = useState();
  const[name,setName] = useState();

  useEffect(() => {
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      console.log(res.data.name)
      setName(res.data.name)
    }
    getData()
  })

  return (
    <>
      <select value={num} onChange={(event) => {
        setNum(event.target.value)
      }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="25">25</option>
      </select>

      <h1>Your Choose {num} value</h1>
      <h1>Pokemon Name: {name} </h1>
    </>
  )
}

export default Fetch