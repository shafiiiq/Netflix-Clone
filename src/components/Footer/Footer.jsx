import React from 'react'
import '../../cssHelper/helper.css'
import './Footer.css'

function Footer() {
  return (
    <div className='Footer flex flex-col gap-1 pt-4 pl-5 pb-6 '>
      <span className='ease-5 grey-clr footer-hover pointer'>
        Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.
      </span>
      <span className='ease-5 grey-clr footer-hover mt-5 pointer'>
        Questions? Contact us.
      </span>
      <span className="footer-wrap flex gap-8 mt-2">

        <span className='flex one gap-8'>
          <ul className='flex flex-col gap-1'>
            <li className='grey-clr ease-4 footer-hover pointer'>
              FAQ
            </li>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Investor Relations
            </li>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Privacy
            </li>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Speed Test
            </li>
          </ul>
          <ul className='flex flex-col gap-1'>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Helpe Center
            </li>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Jobs
            </li>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Cookie Preferences
            </li>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Legal Notices
            </li>
          </ul>
        </span>

        <span className='flex one gap-8'>
          <ul className='flex flex-col gap-1'>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Account
            </li>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Ways to Watch
            </li>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Corporate Information
            </li>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Only on Netflix
            </li>
          </ul>
          <ul className='flex flex-col gap-1'>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Media Centre
            </li>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Terms of Use
            </li>
            <li className='grey-clr ease-4 footer-hover pointer'>
              Contact Us
            </li>
          </ul>
        </span>


      </span>
      <button className='language white-clr pointer mt-2'>
        English
      </button>
    </div>
  )
}

export default Footer
