import React from 'react'
import './Home.css'
import '../../cssHelper/helper.css'
import logo from '../../assets/netflix-logo.png'
import Categories from '../Categories/Categories'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../axios/axios'
import { apiKey, imgUrl } from '../../Constants/constants'
import Trailer from '../Trailer/Trailer'
import Sidebar from '../Sidebar/Sidebar'

function Home() {

  // axios for getting the all treding movies for put a single random movie in banner 
  const [trending, setTrending] = useState([])
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${apiKey}&language=en`).then((respose) => [
      setTrending(respose.data.results[7])
    ])
  }, [])
  // end of that -----------

  // ---------------------------------------------------------------------------------------------------------------------------------------

  // axios for geting all traiers from youtube with movie id that present in the banner using youtube react library 
  const [trailerId, setTrailerId] = useState('')
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${trending.id}/videos?language=en-US&api_key=${apiKey}`).then((respose) => {
      setTrailerId(respose.data.results[0].key)
    }).catch(err => {
      console.log(err);
      alert("Network Err on banner trailer " + err)
    })
  }, [])
  // end of that  ------ 

  // ---------------------------------------------------------------------------------------------------------------------------------------

  // for playing the trailer when click on play button 
  const [trailer, setTrailer] = useState(false)
  function playTrailer(id) {
    setTrailer(true)
  }
  // end of that open trailer component 

  const [sidebar, setSidebar] = useState(false)

  // ---------------------------------------------------------------------------------------------------------------------------------------

  // actual jsx file start here 
  return (
    // start of the home compoent 
    <div className='Home'>

      {sidebar ? (
        <div onClick={() => setSidebar(false)} className="close-sidebar absolute right-2 ease-4 flex j-center a-center white-clr pointer">
          <span className="material-symbols-rounded">
            close
          </span>
        </div>
      ) : null}
      {sidebar ? <Sidebar sidebar /> : ''}

      {/* end of sidebar  */}

      {/* cancel button for cancel the trailer compenent  */}
      {
        trailer ? <div onClick={() => setTrailer(false)} className="close-trailer absolute left-2 top-2 flex j-center a-center z-70 white-clr pointer">
          <span className="material-symbols-rounded">
            close
          </span>
        </div> : null
      }
      {trailer ? <Trailer trailerId={trailerId} /> : ''}
      {/* end of traile */}

      {/* ---------------------------------------------------------------------------------------------------------------------------------- */}

      <div className="banner relative flex j-end pl-4 pb-2 flex-col gap-2 scroll-hidden pt-4">

        {/* header section  */}
        <div className='Header flex j-between a-center glass  absolute top left p-inline-2'>

          {/* left side of header   */}
          <div className="left flex j-between a-center flex gap-2">
            <img src={logo} alt="Netflix" className='logo' />
            <ul className='navs flex gap-1 bold-600 white-clr'>
              <li className='pointer ease-4 nav-li'>
                Home
              </li>
              <li className='pointer ease-4 nav-li'>
                Tv Shows
              </li>
              <li className='pointer ease-4 nav-li'>
                Movies
              </li>
              <li className='pointer ease-4 nav-li'>
                Recently Added
              </li>
              <li className='pointer ease-4 nav-li'>
                My Lists
              </li>
            </ul>
          </div>

          {/* right side of header */}
          <div className="right white-clr flex gap-1 a-center">
            <div className='flex gap-1 right-controls a-center'>
              <span className="material-symbols-rounded">
                search
              </span>
              <span className='upper bold-600'>Kids</span>
              <span className='upper bold-600'>dvd</span>
              <span className="material-symbols-rounded">
                notifications
              </span>
            </div>
            <div onClick={() => setSidebar(true)} className="hamburger flex a-center pointer">
              <span class="material-symbols-rounded">
                menu_open
              </span>
            </div>
          </div>
        </div>
        {/* header section ends  */}

        {/* -------------------------------------------------------------------------------------------------------------------------- */}

        {/* start of the banner  */}
        <img src={`${imgUrl + trending.backdrop_path}`} alt="" className="absolute inset cover size-full" />
        <span className="flex z-3 white-clr a-center">
          <p className='this-title t-center bold-700'>
            {trending.title}
          </p>
        </span>
        <span className="btns z-3 flex gap-1">
          <button onClick={() => playTrailer(trending.id)} className='btn pointer ease-10 r-6 white-clr bold-600 font-sm'>Play</button>
          <button className='btn pointer ease-10 r-6 white-clr bold-600 font-sm'>My List</button>
        </span>
        <span className="description flex flex-col z-3 white-clr">
          <span className="head upper">
            Watch episode 1 Now
          </span>
          <span className='des-p'>{trending.overview}</span>
        </span>
      </div>
      {/* end of the bannaer  */}

      {/* -------------------------------------------------------------------------------------------------------------------------- */}
      {/* end of the home compenent  */}

      {/* -------------------------------------------------------------------------------------------------------------------------- */}

      {/* Categories component  */}
      <Categories large title='Adventure' movieKey='12' />
      <Categories small title='Romance' movieKey='10749' />
      <Categories large title='Fantasy' movieKey='14' />
      <Categories small title='Mystery' movieKey='9648' />
      <Categories large title='Horror' movieKey='27' />
      <Categories small title='Mystery' movieKey='9648' />
      <Categories large title='Family' movieKey='10751' />
      <Categories small title='Thriller' movieKey='53' />
      <Categories large title='War' movieKey='10752' />
      <Categories large title='Western' movieKey='37' />
      <Categories small title='Science Fiction' movieKey='878' />
    </div>

  )
}

export default Home
