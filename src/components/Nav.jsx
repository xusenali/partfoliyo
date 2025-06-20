import React from 'react'
import { useTranslation } from 'react-i18next';
import { GrInstagram } from "react-icons/gr";
import { LiaConnectdevelop } from "react-icons/lia";
import { RiTelegram2Fill } from "react-icons/ri";
import i18n from '../i18n';

const Nav = () => {

    const { t } = useTranslation()

    function handleSkill() {
        const skils = document.querySelector('#skill');
        if (skils) {
            skils.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                skils.classList.remove('animate-skill-focus');
            }, 2000);
        }
    }
    function handleProject() {
        const projectSection = document.querySelector('#projects');
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    }


    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
        localStorage.setItem('selectedLanguage', event.target.value)
    };

    function handleScrollToResume() {
        const resumeSection = document.getElementById('resume');
        if (resumeSection) {
            resumeSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function handleScrollToContact() {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <>
            <div className='shadowStyle w-full h-20 mx-auto '>
                <nav className='w-[85%] h-full  m-auto flex items-center justify-between' >
                    <div className='logo text-6xl text-[#EEEFE0]'>
                        <LiaConnectdevelop />

                    </div>
                    <ul className='text-[#EEEFE0] flex items-center gap-15' >
                        <li onClick={handleScrollToResume} className='cursor-pointer text-[20px] nav-link'>{t('about_me_link')}</li>
                        <li onClick={handleProject} className='cursor-pointer text-[20px] nav-link'>{t('projects_link')}</li>
                        <li onClick={handleScrollToContact} className='cursor-pointer text-[20px] nav-link'>{t('contact_link')}</li>
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
                        <select
                            className="appearance-none text-[#FCECDD] border p-2 rounded"
                            onChange={changeLanguage}
                        >
                            <option className="bg-[#03001d] text-white" value="en">English</option>
                            <option className="bg-[#03001d] text-white" value="uz">Uzbek</option>
                            <option className="bg-[#03001d] text-white" value="ru">Русский</option>
                        </select>


                    </div>
                </nav >
            </div >

        </>
    )
}

export default Nav;