import React, { useEffect } from 'react'
import Nav from './components/Nav'
import { RiRadioButtonFill } from 'react-icons/ri'
import Button from '@mui/material/Button'
import SkillGrid from './components/SkillGrid'
import { useTranslation } from 'react-i18next'
import AOS from 'aos';
import 'aos/dist/aos.css';



const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { t } = useTranslation()

  return (
    <>
      <Nav />
      <div className='w-[85%] mx-auto '>
        <div className=' w-full h-20'></div>
        <div className='flex my-5'>
          <div className='w-[50%] min-h-[600px]  py-30 '>
            <h1 className='text-[50px] text-[#EEEFE0]'>{t('header_title_part1')}</h1>
            <p className="text-2xl mt-4 text-[#EEEFE0] ">{t('header_age_creative')}</p>
            <p className="text-xl mt-2 text-[#EEEFE0]">{t('header_description')}</p>
            <Button
              className='!text-[#ADEED9] !border-[#ADEED9] !mt-5 !h-12 !px-8 !py-3 '
              variant="outlined"
              href="#projects"
            >
              {t('view_my_work')}
            </Button>
          </div>
          <div className='w-[50%] '>
          </div>
        </div>
      </div>
      <div data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500" className='flex justify-center items-center m-30'>
        <SkillGrid />
      </div>
    </>
  )
}

export default App