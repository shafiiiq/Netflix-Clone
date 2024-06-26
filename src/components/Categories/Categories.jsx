import React, { useEffect } from 'react'
import './Categories.css'
import { useState } from 'react';
import { apiKey, baseUrl, imgUrl } from '../../Constants/constants';
import axios from '../../axios/axios'
import Trailer from '../Trailer/Trailer';

function Categories(props) {

    // used to get the movies with given genres in props and set all movies into movies useState 
    const [movies, setmovies] = useState([])
    useEffect(() => {
        axios.get(`/discover/movie?api_key=${apiKey}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${props.movieKey}
        `).then((response) => {
            setmovies(response.data.results)
            // console.log(response.data.results)
        })
    }, [props.movieKey])
    // end of that movies fetching 

    const [trailer, setTrailer] = useState(false)
    const [trailerId, setTrailerId] = useState('')

    function activeTrailer(id) {
        setTrailer(true)
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${apiKey}`).then((response) => {
            console.log(response.data.results[0]);
            setTrailerId(response.data.results[0].key)
        })
    }

    return (
        <div className='Categories w-full white-clr'>
            {/* cancel button for cancel the trailer compenent  */}
            {
                trailer ? <div onClick={() => setTrailer(false)} className="close-trailer absolute right-2 top-2 flex j-center a-center z-70 white-clr pointer">
                    <span className="material-symbols-rounded">
                        close
                    </span>
                </div> : null
            }

            {trailer ? <Trailer trailerId={trailerId} /> : null}
            <div className="row size-full flex flex-col p-inline-2 pb-1">
                <p className="title bold-500">
                    {props.title}
                </p>
                <div className="wrapper scroll-hidden w-full">
                    <div className="slider w-full flex scroll-x scroll-hidden-y">
                        {
                            movies.map((movie) =>
                                <div onClick={() => activeTrailer(movie.id)} className={`poster flex a-center flex-col relative pointer ease-3 ${props.large ? 'poster-lg' : 'poster-sm'}`}>
                                    {movie.backdrop_path ? (
                                        <img src={`${imgUrl + movie.backdrop_path}`} className="poster-img inset w-full cover" />
                                    ) : (
                                        <p className='not-available flex j-center a-center font-xl t-center bold-600'>No Preview Available</p>
                                    )}
                                    <p className="category-title t-center moveUp">
                                        {movie.title}
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories