import React from 'react'
import './Promotion.css'
import '../../cssHelper/helper.css'

function Promotion() {
    return (
        <div className='Promotion flex flex-col white-clr pt-5 pb-3'>
            <div className="blured-banner w-full relative">
                <img src="https://www.howtowatch.ca/wp-content/uploads/2021/03/9Now-3-1024x576.jpeg" alt="Blured" className='cover size-full' />
            </div>
            <div className="decription pt-2 flex flex-col gap-1 a-center">
                <h1 className="title-promo">
                    There’s even more to watch.
                </h1>
                <p className="font-md promo-p t-center">
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.
                </p>
                <button className='join font-sm white-clr mt-1 pointer ease-4'>
                    Join now
                </button>
            </div>
        </div>
    )
}

export default Promotion
