import React from 'react'
import './style.css'

type Props = {}

function Banner(props: Props) {
  return (
    <div className="banner flex justify-center py-4">
      <div className="wrapper flex items-center gap-8 md:gap-16">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-5xl">Газовое оборудование</h1>
          <p className="text-xl md:text-2xl">Высшего уровня</p>
        </div>
        <div className="relative">
          <img
            src="/src/img/boiler/boiler.png"
            alt="Газовый котел"
            className="image"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
