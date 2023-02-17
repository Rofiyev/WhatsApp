import './Section.css';
import user1 from './img/user-0.png';
import user2 from './img/user-1.png';
import user3 from './img/user-2.png';
import user4 from './img/user-3.png';
import user5 from './img/user-4.png';
import user6 from './img/user-5.png';
import user7 from './img/user-6.png';
import user8 from './img/user-7.png';
import { TbChecks } from 'react-icons/tb';
import { TbCheck } from 'react-icons/tb';
import { MdChat } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
import { MdContactPhone } from 'react-icons/md';
import ThemeContext from '../ThemeContext/ThemeContext';
import React, { useContext } from 'react';

const UsersChats = [
  {
    id: 1,
    img: user1,
    name: 'Abhishek Bro',
    time: '3:20pm',
    check: 'check',
    massege: 'Ma dami 👌 caption ma post garchu hai vai...',
  },
  {
    id: 2,
    img: user2,
    name: 'Sagar Bro',
    time: '10:03 am',
    check: 'noCheck',
    massege: 'euta ticket ma 18 flim tyo pani barsae vari v...',
  },
  {
    id: 3,
    img: user3,
    name: 'Niranjan vai UX Designer',
    time: 'Yesterday',
    check: 'check',
    massege: 'Like colombia, ko fox movies haru metro g...',
  },
  {
    id: 4,
    img: user4,
    name: 'Balram vai',
    time: '29/04/2021',
    check: 'check',
    massege: 'Yeso freelancing haniyo bhane sajilo hunch...',
  },
  {
    id: 5,
    img: user5,
    name: 'clickEAT Project',
    time: '28/04/2021',
    check: 'check',
    massege: 'Order now lai download now rakhdaa k hol...',
  },
  {
    id: 6,
    img: user6,
    name: 'Jeeven vai',
    time: '28/04/2021',
    check: 'check',
    massege: 'Design by maa tpai lai tag garxu 😂 ni ki ka...',
  },
  {
    id: 7,
    img: user7,
    name: 'Cinemaghar App Project',
    time: '28/04/2021',
    check: 'photeo',
    massege: 'Photo',
  },
  {
    id: 8,
    img: user8,
    name: 'Digital Ghumti Team',
    time: '27/04/2021',
    check: 'check',
    massege: 'https://drive.google.com/file/d/1z5w01j15...',
  },
];

const Section = () => {
  const { theme } = useContext(ThemeContext);
  console.log('Section render');
  return (
    <div id='section' className={theme}>
      <div className="usersChat p-2">
        {
          UsersChats.map((userChat) => {
            return (
              <div key={userChat.id} className="userChat mb-1 d-flex align-items-center">
                <div className="image">
                  <img src={userChat.img} alt="Rasm" />
                </div>
                <div className="info ms-2">
                  <div className="title d-flex align-items-center justify-content-between">
                    <h4 className='heading'>{userChat.name}</h4>
                    <h6>{userChat.time}</h6>
                  </div>
                  <span>{userChat.check === 'check' ? <TbChecks id='iconCheck' className={`check`} /> : <TbCheck className={`greyCheck`} />} {userChat.massege}</span>
                </div>
              </div>
            )
          })
        }
      </div>
      <footer className={theme}>
        <div className="row d-flex">
          <div className="icons">
            <MdChat className='icon active' />
            <span className='active'>Chat</span>
          </div>
          <div className="icons">
            <MdCall className='icon' />
            <span>Call</span>
          </div>
          <div className="icons">
            <MdContactPhone className='icon' />
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default React.memo(Section);
