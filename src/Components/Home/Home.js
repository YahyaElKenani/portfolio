import './Home.css'
import portfolioPic from '../../Images/personal pic.jpg'
import { useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'motion/react';
export default function Home() {
    const language = useSelector((state) => state.preferences.currentLang);
    const theme = useSelector((state) => state.preferences.currentTheme)
    return (
        <div className="container-fluid home mt-5">
                <div className='row home-content d-flex justify-content-evenly' id='Home'>
                    <div className='col-3 col-md-6 text-home-content'>
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
                                            ${theme === 'dark' ? 'darkMode-text' : 'lightMode-text' } home-subtitle`}>
                                {
                                    language === 'en' ? 
                                    'Front-end Developer'
                                    :
                                    'مُطور فرونت ايند'
                                }
                            </motion.span>
                        </AnimatePresence>
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