import './Home.css'
import portfolioPic from '../../Images/personal pic.jpg'
import { useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'motion/react';
import { Tooltip } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CV from '../../CV/CV.pdf'
export default function Home() {
    const language = useSelector((state) => state.preferences.currentLang);
    const theme = useSelector((state) => state.preferences.currentTheme);
    const downloadCV = language === 'en' ? 'Download CV' : 'تحميل السيرة الذاتية';
    const openFacebook = () => { 
        window.open('https://www.facebook.com/yahya.elkenani.3', '_blank');
    }
    const openInstagram = () => { 
        window.open('https://www.instagram.com/yahya.elkenani/', '_blank');
    }
    const openLinkedIn = () => { 
        window.open('https://www.linkedin.com/in/yahya-el-kenani-b7752135b/', '_blank');
    }
    const openGithub = () => { 
        window.open('https://github.com/YahyaElKenani', 'blank');
    }
    return (
        <div className="container-fluid home mt-5">
                <div className='row home-content me-3 d-flex justify-content-evenly' id='Home'>
                    <div className='col-3 col-md-6 text-home-content'>
                        <div className='main-text'> 
                        <AnimatePresence mode='wait'>
                            <motion.span 
                                key={language}
                                initial={{x: -50, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                exit={{x: 50, opacity: 0}}
                                transition={{duration: 0.5}}
                                className={`${language === 'en' ? 'en-lang-bold' : 'ar-lang-bold'} 
                                ${theme === 'dark' ? 'darkMode-text' : 'lightMode-text' } home-title mb-2`}>
                                {
                                    language === 'en' ? 
                                    'Yahya El Kenani' 
                                    : 
                                    'يحيى الكناني'
                                }
                            </motion.span>
                        </AnimatePresence>
                        <AnimatePresence mode='wait'>
                            <motion.span
                            key={language}
                            initial={{y: -50, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: 50, opacity: 0}}
                            transition={{duration: 0.5}}
                            className={`${language === 'en' ? 'en-lang-semiBold' : 'ar-lang-semiBold'} 
                                            ${theme === 'dark' ? 'darkMode-text' : 'lightMode-text' } home-subtitle text-center`}>
                                {
                                    language === 'en' ? 
                                    'Front-end Developer'
                                    :
                                    'مُطور فرونت ايند'
                                }
                            </motion.span>
                        </AnimatePresence>
                        </div>
                        <div className='home-links'>
                            <div className='socials'>
                                        <Tooltip> 
                                            <div className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} social-button`}
                                            onClick={() => {openFacebook()}}
                                            >
                                                <FacebookIcon className='social-btn-icon' />
                                            </div>
                                        </Tooltip>
                                        <Tooltip> 
                                            <div className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} social-button`}
                                            onClick={() => {openInstagram()}}
                                            >
                                                <InstagramIcon className='social-btn-icon' />
                                            </div>
                                        </Tooltip>
                                        <Tooltip> 
                                            <div className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} social-button`}
                                            onClick={() => {openLinkedIn()}}
                                            >
                                                <LinkedInIcon className='social-btn-icon' />
                                            </div>
                                        </Tooltip>
                                        <Tooltip> 
                                            <div className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} social-button`}
                                            onClick={() => {openGithub()}}
                                            >
                                                <GitHubIcon className='social-btn-icon' />
                                            </div>
                                        </Tooltip>
                            </div>
                                        <AnimatePresence mode='wait'> 
                                            <div
                                                className='cv'>
                                                <motion.a
                                                href={CV}
                                                download='YahyaElKenani-CV.pdf'
                                                key={`cv-${language}`}
                                                initial={{x: -50, opacity: 0}}
                                                animate={{x: 0, opacity: 1}}
                                                exit={{x: 50, opacity: 0}}
                                                transition={{duration: 0.8}}
                                                className={`cv-text ${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} 
                                                ${language === 'en' ? 'en-lang-semiBold' : 'ar-lang-semiBold'}
                                                `}>{downloadCV}</motion.a>
                                            </div>
                                        </AnimatePresence>
                        </div>
                    </div>
                    <div className='col-3 col-sm-2 col-md-4'>
                            <div className='image-container'>
                            <motion.img
                                initial={{x: 50, opacity:0}}
                                animate={{x: 0, opacity:1}}
                                transition={{duration: 0.5}}
                                src={portfolioPic} loading='lazy' alt='profile-pic' 
                                className={`${theme === 'dark' ? 'darkMode-pic' : 'lightMode-pic'} portfolio-pic`} />
                            </div>
                    </div>
                </div>
            </div>
    )
}