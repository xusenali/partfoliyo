import React from 'react'
import { useTranslation } from 'react-i18next';
import { GrInstagram } from "react-icons/gr";
import { LiaConnectdevelop } from "react-icons/lia";
import { RiTelegram2Fill } from "react-icons/ri";
import i18n from '../i18n';

const Nav = () => {

    const { t } = useTranslation()

    function handleSkill() {
        let skils = document.querySelector('.skils')

        skils.classList.add('animate-skill-focus')

        setTimeout(() => {
            skils.classList.remove('animate-skill-focus');
        }, 1000);
    }

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
        localStorage.setItem('selectedLanguage', event.target.value)
    };

    return (
        <>
            <div className=' w-full h-20  m-auto bg-[#A7C1A8] fixed top-0 left-0 right-0 z-50'>
                <nav className='w-[85%] h-full  m-auto flex items-center justify-between' >
                    <div className='logo text-6xl text-[#EEEFE0]'>
                        <LiaConnectdevelop />

                    </div>
                    <ul className='text-[#EEEFE0] flex items-center gap-15' >
                        <li className='cursor-pointer text-[20px] nav-link'>{t('about_me_link')}</li>
                        <li className='cursor-pointer text-[20px] nav-link'>{t('projects_link')}</li>
                        <li className='cursor-pointer text-[20px] nav-link'>{t('contact_link')}</li>
                        <li onClick={handleSkill} className='cursor-pointer text-[20px] nav-link'>{t('my_skill_link')}</li>
                    </ul>
                    <div className='flex items-center gap-10'>
                        <a
                            href="https://www.instagram.com/xusen_xx/"
                            target='_blank'
                            className='gg'>
                            <GrInstagram className='text-2xl text-[#FCECDD] ' />
                        </a>

                        <a
                            href="https://t.me/xusen_xx"
                            target='_blank'
                            className=' gg'>
                            <RiTelegram2Fill className='text-2xl text-[#FCECDD]' />
                        </a>
                        <select name="language" onChange={changeLanguage} className='text-[#FCECDD] bg-[#A7C1A8] outline-none border p-2 rounded-2xl'>
                            <option value="uz">Uzbek</option>
                            <option value="en">English</option>
                            <option value="ru">Русский</option>
                        </select>
                    </div>
                </nav >
            </div >

        </>
    )
}

export default Nav