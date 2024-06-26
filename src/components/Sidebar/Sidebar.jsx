import React from 'react'
import '../../cssHelper/helper.css'
import './Sidebar.css'

function Sidebar(props) {
    return (
        <div className={`Sidebar pt-3 pl-2 ${props.sidebar ? 'anim-sidebar' : ''} `}>
            <div className='relative size-full'>
                <ul className='sidebar-nav flex flex-col gap-2 bold-600 white-clr'>
                    <li className='pointer ease-4 nav-li flex side-li'>
                        <span class="material-symbols-rounded">
                            home
                        </span>
                        Home
                    </li>
                    <li className='pointer ease-4 nav-li flex side-li'>
                        <span class="material-symbols-rounded">
                            tv
                        </span>
                        Tv Shows
                    </li>
                    <li className='pointer ease-4 nav-li flex side-li'>
                        <span class="material-symbols-rounded">
                            movie
                        </span>
                        Movies
                    </li>
                    <li className='pointer ease-4 nav-li flex side-li'>
                        <span class="material-symbols-rounded">
                            schedule
                        </span>
                        Recently Added
                    </li>
                    <li className='pointer ease-4 nav-li flex side-li'>
                        <span class="material-symbols-rounded">
                            format_list_bulleted
                        </span>
                        My Lists
                    </li>
                </ul>
                <span className="account absolute bottom-3 left-1 white-clr bold side-li flex pointer ease-4 nav-li">
                    <span class="material-symbols-rounded">
                        account_circle
                    </span>
                    Account
                </span>
            </div>
        </div>
    )
}

export default Sidebar
