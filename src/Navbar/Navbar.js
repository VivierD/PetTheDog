import {useEffect, useState} from 'react'
import './Navbar.css'
import cat from '../img/cat.png'
import dog from '../img/happy.png'

export default function Navbar(props) {
    const [animal, setAnimal] = useState(true)

    const title = ['P','E','T','','T','H','E','','D','O','G']

    useEffect(()=>{
        props.func(animal)
    },[animal])
    


  return (
    <div className='nav-container'>
        {animal ?  <img className='cat-icone' src={cat} alt="icone chat" title='Je préfère les chats !' onClick={() => setAnimal(!animal)} />
        : <img className='dog-icone' src={dog} alt="icone chien" title='Je préfère les chiens !' onClick={() => setAnimal(!animal)} />}
        <h1 className='title'>
            {title.map((lettre, index)=>{
                return <p key={index} className={'char'+ index}>{lettre}</p>
            })}
        </h1>
        <p></p>
    </div>
  )
}
