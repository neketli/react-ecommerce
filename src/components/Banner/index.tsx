import React from 'react'
import './style.css'

function Banner() {
  return (
    <section className="banner flex h-[60vh] justify-center py-16 shadow-sm">
      <div className="wrapper flex items-center gap-8 md:gap-16">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-5xl">Газовое оборудование</h1>
          <p className="text-xl md:text-2xl">Высшего уровня</p>
        </div>
        <div className="relative">
          <img
            src="/src/assets/img/boiler/boiler.png"
            alt="Газовый котел"
            className="image"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
