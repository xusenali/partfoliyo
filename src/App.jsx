import React from 'react'
import Nav from './components/Nav'
import { RiRadioButtonFill } from 'react-icons/ri'
import Button from '@mui/material/Button'
import SkillGrid from './components/SkillGrid'
import { useTranslation } from 'react-i18next'



const App = () => {

  const { t } = useTranslation()

  return (
    <>
      <Nav />
      <div className=''>
        <div className=' w-full h-20'></div>
        <div className='flex my-5'>
          <div className='w-[50%] min-h-[600px]  p-30 '>
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
          <div className='w-[50%] min-h-[600px]'>
            <SkillGrid />
          </div>
        </div>
      </div>
    </>
  )
}

export default App