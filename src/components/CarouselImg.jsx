import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function CarouselImg() {
  return (
    <div name='picture'>
      <Carousel className='max-w-[1240px] mx-auto py-16 flex flex-col justify-center items-center text-center px-4'>
        <div>
          <img src='https://images.unsplash.com/photo-1516370873344-fb7c61054fa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' />
        </div>
        <div>
          <img src='https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' />
        </div>
        <div>
          <img src='https://images.unsplash.com/photo-1531983598325-a62c7a407251?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' />
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselImg
