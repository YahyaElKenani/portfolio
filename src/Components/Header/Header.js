import { useDispatch, useSelector } from 'react-redux';
import './Header.css'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LanguageIcon from '@mui/icons-material/Language';
import { IconButton } from '@mui/material';
import { changeLang, changeTheme } from '../../Store/prefSlice';
import { AnimatePresence, motion, useScroll } from 'motion/react';
export default function Header() { 
    const language = useSelector((state) => state.preferences.currentLang);
    const theme = useSelector((state) => state.preferences.currentTheme);
    const dispatch = useDispatch();
    const MotionIconButton = motion(IconButton);
    const {scrollYProgress} = useScroll();
    const tabs = [
        {id: 1, en: 'Home', ar: 'الصفحة الرئيسية'},
        {id: 2, en: 'About', ar: 'المعلومات الشخصية'}, 
        {id: 3, en: 'Projects', ar: 'المشاريع'},
        {id: 4, en: 'Contact', ar: 'تواصل معي'}
    ]
    const handleTabClick = (e, tabId) => {
        e.preventDefault();
        const element = document.getElementById(tabId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className='header-placeholder'>
            <AnimatePresence mode='wait'>
            <motion.div 
            animate={{backgroundColor: theme === 'dark' ? '#070f2b' : '#c9c6c3'}}
            transition={{duration: 0.5}}
            className={`${theme === 'dark' ? 'darkMode-header' : 'lightMode-header'} header-container`}>
                <div className='header-content row'>
                    <div className='col-3 d-none d-md-block'></div>
                    <div className='tabs col-9 col-md-6'>
                        {
                        ( language === 'ar' ? [...tabs.reverse()] : tabs ).map((tab) => (
                                <AnimatePresence mode='wait'> 
                                    <motion.a
                                    href={`#${tab.en}`}
                                    onClick={(e) => {handleTabClick(e, tab.en)}}
                                    layout
                                    key={language}
                                    initial={{y: -35, opacity: 0}} 
                                    animate={{y: 0, opacity: 1}}
                                    exit={{y: 35, opacity: 0}}
                                    transition={{duration: 0.3}}
                                    className={`${language === 'en' ? 'en-lang-semiBold' : 'ar-lang-semiBold ar-header'}
                                    ${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} tab`}
                                    >
                                        {language === 'en' ? tab.en : tab.ar} 
                                    </motion.a>
                                </AnimatePresence>
                            ))}
                    </div>
                    <div className='preferences col-2 col-md-3'>
                        <div className='theme-changer'>
                            <AnimatePresence mode='wait'>
                        {
                                theme === 'dark' ? 
                                <MotionIconButton
                                key={theme}
                                exit={{rotate: '360deg', opacity: 0}}
                                transition={{duration: 0.5}}
                                onClick={() => {dispatch(changeTheme())}} className='preferences-btn preferences-btn-dark'>
                                    <LightModeIcon/>
                                </MotionIconButton>
                                :
                                <MotionIconButton 
                                key={theme}
                                exit={{rotate: '360deg', opacity: 0}}
                                transition={{duration: 0.5}}
                                onClick={() => {dispatch(changeTheme())}} className='preferences-btn .preferences-btn-light'>
                                    <DarkModeIcon/>
                                </MotionIconButton>
                            }
                            </AnimatePresence>
                            <div className='lang-changer'>
                                <AnimatePresence mode='wait'>
                            {
                            
                                theme === 'dark' ? 
                                <MotionIconButton
                                key={language}
                                exit={{rotate: '360deg', opacity: 0}}
                                transition={{duration: 0.5}}
                                onClick={() => {dispatch(changeLang())}} className='preferences-btn preferences-btn-dark'>
                                    <LanguageIcon/>
                                </MotionIconButton>
                                :
                                <MotionIconButton
                                key={language}
                                exit={{rotate: '360deg', opacity: 0}}
                                transition={{duration: 0.5}}
                                onClick={() => {dispatch(changeLang())}} className='preferences-btn preferences-btn-light'>
                                    <LanguageIcon/>
                                </MotionIconButton>
                            }
                            </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div 
                id='scrollProgress'
                style={{
                    scaleX: scrollYProgress,
                    position: 'fixed',
                    top: 100,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#006a67",
                }}
                >
                </motion.div>
            </motion.div>
            </AnimatePresence>
        </div>
    )
}