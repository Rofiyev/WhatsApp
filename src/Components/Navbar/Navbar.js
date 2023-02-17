import './Navbar.css';
import person1 from './img/my-account.png';
import person2 from './img/account-1.png';
import person3 from './img/account-2.png';
import person4 from './img/account-3.png';
import person5 from './img/account-4.png';
import { BsSearch } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { AiFillCamera } from 'react-icons/ai';
import ThemeContext from '../ThemeContext/ThemeContext';
import React, { useContext } from 'react';


const users = [
  {
    id: 1,
    img: person1,
    title: 'My status',
    story: false,
    meAccount: true,
  },
  {
    id: 2,
    img: person2,
    title: 'Digital Ghumti',
    story: true,
    meAccount: false,
  },
  {
    id: 3,
    img: person3,
    title: 'Cinemaghar App',
    story: true,
    meAccount: false,
  },
  {
    id: 4,
    img: person4,
    title: 'Abhishek Dai',
    story: true,
    meAccount: false,
  },
  {
    id: 5,
    img: person5,
    title: 'Sagar Dai',
    story: true,
    meAccount: false,
  },
];


const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log('Navbar render');
  return (
    <div className={`navbar ${theme}`}>
      <div className="text d-flex align-items-center justify-content-between">
        <div className="heading">
          <h5>WhatsApp</h5>
        </div>
        <div className="icons d-flex align-items-center">
          <BsSearch className='icon' />
          <FiMoreVertical className='icon' />
          <button id="mode" onClick={() => toggleTheme()}>
            <BsFillMoonFill id='moon' className='icon' />
            <BsFillSunFill id='sun' className='icon' />
          </button>
        </div>
      </div>
      <div className="images">
        {
          users.map((v) => {
            return (<div key={v.id} className="user">
              <div className={`image ${v.story && 'active'}`} >
                <img id='active' src={v.img} alt="Rasm" />
              </div>
              {v.meAccount && <AiFillCamera id='camera' />}
              <div className="info">
                <span>{v.title}</span>
              </div>
            </div>
            )
          })
        }
      </div>
    </div >
  )
}
export default React.memo(Navbar);