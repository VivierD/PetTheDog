import React, { useEffect, useState } from 'react'
import dog from '../img/dog.png'
import './Main.css'
import Navbar from '../Navbar/Navbar'

export default function Main() {
    const [count, setCount] = useState(0)
    const [ani, setAnimal] = useState()

    const pullData = (data) => {
        setAnimal(data)
        console.log(data)
    }


  return (
    <>
        <Navbar func={pullData}/>
        <div className='main-container'>
            <div className='score'>
                Niveau de caresse : {count}
            </div>
            <div className='click-side'>
                <img src={dog} className='dog-img' onClick={() => setCount(count + 1)} alt='Chien souriant' />
            </div>
            <div className='menu-container'>
            <div className='upgrade-1'>
                <div className='upgrade-item' onClick={() => {setCount(count - 3)}}>test</div>
                <div className='upgrade-item'>test</div>
            </div>
            </div>
        </div>
    </>
  )
}
