import React, { useEffect, useRef } from 'react';
import Nav from './components/Nav';
import Button from '@mui/material/Button';
import SkillGrid from './components/SkillGrid';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const App = () => {
  const { t } = useTranslation();
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  const handleProject = () => {
    const projectSection = document.querySelector('#projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_ojzg73b',           // Service ID
      'template_ywqdj7i',        // Template ID
      form.current,
      'LputyAqYA-mDG8tJX'             // Public key (YOUR user ID)
    ).then(
      () => {
        ('Xabar yuborildi!');
        e.target.reset();
      },
      (error) => {
        console.log('Xatolik yuz berdi: ' + error.text);
      }
    );
  };

  return (
    <>
      <Nav />

      <div className='w-[85%] mx-auto '>
        <div className='flex my-5'>
          <div className='w-[50%] min-h-[600px]  py-30 '>
            <h1 className='text-[50px] text-[#EEEFE0]'>{t('header_title_part1')}</h1>
            <p className="text-2xl mt-4 text-[#EEEFE0] ">{t('header_age_creative')}</p>
            <p className="text-xl mt-2 text-[#EEEFE0]">{t('header_description')}</p>
            <Button
              onClick={handleProject}
              className='!text-[#ADEED9] !border-[#ADEED9] !mt-5 !h-12 !px-8 !py-3 '
              variant="outlined"
            >
              {t('view_my_work')}
            </Button>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className='flex justify-center items-center m-30 mb-50'>
        <SkillGrid />
      </div>

      <div data-aos="fade-up" id='projects' className='w-[85%] h-200 mx-auto shadowStyle pt-5 rounded scroll-mt-6cd     0'>
        <h1 className='text-4xl text-white text-center'>My Project</h1>
        <div className='w-full h-full '></div>
      </div>

      <section data-aos="fade-up" id="resume" className="w-[85%] mx-auto my-10 text-[#EEEFE0] shadowStyle rounded mt-50 pt-10 scroll-mt-50">
        <h2 className="text-4xl font-bold text-center mb-8">{t('resume_link')}</h2>
        <div className="p-6 rounded-2xl shadow-lg space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{t('personal_info')}</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>{t('full_name')}: Xusen Bozorov</li>
              <li>{t('age')}: 19</li>
              <li>{t('email')}: xusenbozorov3@gmail.com</li>
              <li>{t('location')}: Samarqand, Uzbekistan</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{t('education')}</h3>
            <p>Najot Ta'lim - {t('frontend_developer')} (2024)</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{t('skills')}</h3>
            <ul className='flex gap-4'>
              <li className='shadowStyle p-1 rounded'>HTML</li>
              <li className='shadowStyle p-1 rounded'>CSS</li>
              <li className='shadowStyle p-1 rounded'>TailwindCSS</li>
              <li className='shadowStyle p-1 rounded'>JavaScript</li>
              <li className='shadowStyle p-1 rounded'>React</li>
              <li className='shadowStyle p-1 rounded'>Redux Toolkit</li>
              <li className='shadowStyle p-1 rounded'>React Query</li>
              <li className='shadowStyle p-1 rounded'>Formik</li>
              <li className='shadowStyle p-1 rounded'>API Integration</li>
              <li className='shadowStyle p-1 rounded'>Next.js</li>
              <li className='shadowStyle p-1 rounded'>TypeScript</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{t('experience')}</h3>
            <p>{t('junior_dev')} - Freelance (2024 - now)</p>
          </div>
        </div>
      </section>

      <div data-aos="fade-up" id="contact" className="w-[85%] mx-auto py-10 text-[#EEEFE0] shadowStyle m-30 p-3 rounded scroll-mt-60">
        <h2 className="text-4xl font-bold text-center mb-10">{t('contact_title')}</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MdOutlineMail className="text-2xl text-[#ADEED9]" />
              <p>xusenbozorov3@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-[#ADEED9]" />
              <p>+998 91 701 61 21</p>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationDot className="text-2xl text-[#ADEED9]" />
              <p>{t('contact_location')}</p>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded text-white shadowStyle outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded text-white shadowStyle outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-3 rounded text-white shadowStyle outline-none"
              rows="5"
              required
            />
            <input type="hidden" name="title" value="Portfolio Contact Form" />
            <input type="hidden" name="time" value={new Date().toLocaleString()} />
            <button
              type="submit"
              className="p-3 rounded text-white shadowStyle outline-none hover:bg-[#005577] transition"
            >
              Send
            </button>
          </form>

        </div>
      </div>
    </>
  );
};

export default App;
