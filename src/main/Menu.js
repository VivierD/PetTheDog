import React, { useEffect, useState } from 'react'
import './Menu.css'

export default function Menu({count}) {
  const [menu, setMenu] = useState(count)

    useEffect(() => {
        setMenu(count + 1)
        console.log(menu)
    }, [count])

  return (
    <div className='menu-container'>
        <div className='upgrade-1'>
            <div className='upgrade-item' onClick={() => {setMenu(menu - 3)}}>test</div>
            <div className='upgrade-item'>test</div>
        </div>
    </div>
  )
}
