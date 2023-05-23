import React from 'react'
import { Header } from '../Components/Landing/Header'
import { Hero } from '../Components/Landing/Hero'
import { Categories } from '../Components/Landing/Categories'
import { Ofertas } from '../Components/Landing/Ofertas'
import { Marcas } from '../Components/Landing/Marcas'
import { Footer } from '../Components/Landing/Footer'

export const Landing = () => {
  return (
    <div className='font-D-DIN'>
      <Header />
      <Hero />
      <Categories />
      <Ofertas />
      <Marcas />
      <Footer />
    </div>
  )
}