import { useSelector } from 'react-redux'
import './About.css'
import { AnimatePresence, motion } from 'motion/react';
import htmlLogo from '../../Images/html-logo.png'
import cssLogo from '../../Images/css-logo.png'
import jsLogo from '../../Images/javascript-logo.png'
import reactLogo from '../../Images/react-logo.png'
import reduxLogo from '../../Images/redux-logo.png'
import bootstrapLogo from '../../Images/bootstrap-logo.png'
import muiLogo from '../../Images/mui-logo2.png'
import motionLogo from '../../Images/framermotion-logo3.png'
export default function About() { 
    const language = useSelector((state) => state.preferences.currentLang);
    const theme = useSelector((state) => state.preferences.currentTheme);
    const title = language === 'en' ? 'About' : 'المعلومات الشخصية'
    const brief = language === 'en' ?
    "I'm Yahya El Kenani, a 20-year-old front-end developer (React.js) from Alexandria, Egypt. Though studying Agricultural Engineering, my passion lies in building responsive, user-friendly websites. Seeking internships, freelance work, or junior roles to grow as a professional developer" 
    : 
    "انا يحيى الكناني مطور فرونت ايند (React.js) في عمر العشرين من الإسكندرية , مصر. بالرغم من أن دراستي الاكاديمية في مجال الهندسة الزراعية إلا أنني وجدت شغفي في بناء مواقع متجاوبة ودقيقة. حاليا ابحث عن فرص للتدريب, العمل الحر أو منصب مناسب في شركة"
    const skillsTitle = language === 'en' ? 'Skills' : "المهارات"
    const graduateTitle = language === 'en' ? 'Graduation' : 'الدراسة'
    const logoWrapperClass = theme === 'dark' ? 'logo-wrapper darkModeWrapper' : 'logo-wrapper lightModeWrapper'
    const graduation = language === 'en' ? 
    'Studies at faculty of Agriculture - Engineering department, Alexandria university ( 2024 - present )'
    : 
    'ادرس في كلية الزراعة - قسم الهندسة الزراعية ,  جامعة الاسكندرية ( 2024 - الآن )'
    

    return (
        <div className='container-fluid about-page'>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={`about-${language}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${language === 'en' ? 'en-lang-bold' : 'ar-lang-bold about-ar'} ${
                        theme === 'dark' ? 'darkMode-text darkMode-subtext' : 'lightMode-text lightMode-subtext'
                    } text-center about-title`}
                >
                    {title}
                </motion.div>
            </AnimatePresence>
            <AnimatePresence mode='wait'>
                <motion.div
                key={`brief-${language}`}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`${language === 'en' ? 'en-lang-semiBold' : 'ar-lang-semiBold'} ${
                    theme === 'dark' ? 'darkMode-text darkMode-subtext' : 'lightMode-text lightMode-subtext'
                } text-center section-details brief`}>
                    {brief}
                </motion.div>
            </AnimatePresence>

                <motion.div className='graduate-container'>
                    <AnimatePresence mode='wait'> 
                        <motion.div
                        key={`graduation-${language}`}
                        id='About'
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{duration: 0.5}}
                        className={`${language === 'en' ? 'en-lang-bold' : 'ar-lang-bold'} ${
                        theme === 'dark' ? 'darkMode-text darkMode-subtext' : 'lightMode-text lightMode-subtext'
                    } text-center section-title mx-auto`}>
                        {graduateTitle}
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                        <motion.div 
                        key={`gradiuate-${language}`}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 50, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`${language === 'en' ? 'en-lang-semiBold' : 'ar-lang-semiBold'} ${
                            theme === 'dark' ? 'darkMode-text darkMode-subtext' : 'lightMode-text lightMode-subtext'
                        } text-center section-details`}>
                            {graduation}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                <motion.div className='skills-container'> 
                <AnimatePresence mode='wait'>
                    <motion.div
                    key={`skill-${language}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{duration: 0.5}}
                    className={`${language === 'en' ? 'en-lang-bold' : 'ar-lang-bold'} ${
                    theme === 'dark' ? 'darkMode-text darkMode-subtext' : 'lightMode-text lightMode-subtext'
                } text-center section-title mx-auto`}>
                    {skillsTitle}
                    </motion.div>
                </AnimatePresence> 

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={`skills-${language}`}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{duration: 0.5}}
                            className='skills row'>
                            <div className='skill col'>
                                <div className={logoWrapperClass}>
                                    <img src={htmlLogo} alt='HTML' className='skill-logo'/>
                                </div>
                                <span className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} skill-name en-lang-semiBold`}>HTML</span>
                            </div>
                            <div className='skill col'>
                            <div className={logoWrapperClass}>
                                    <img src={cssLogo} alt='css' className='skill-logo'/>
                                </div>
                                <span className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} skill-name en-lang-semiBold`}>CSS</span>
                            </div>
                            <div className='skill col'>
                            <div className={logoWrapperClass}>
                                    <img src={jsLogo} alt='js' className='skill-logo'/>
                                </div>
                                <span className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} skill-name en-lang-semiBold`}>Javascript</span>
                            </div>
                            <div className='skill col'>
                            <div className={logoWrapperClass}>
                                    <img src={reactLogo} alt='react' className='skill-logo'/>
                                </div>
                                <span className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} skill-name en-lang-semiBold`}>React</span>
                            </div>
                            <div className='skill col'>
                            <div className={logoWrapperClass}>
                                    <img src={reduxLogo} alt='redux' className='skill-logo'/>
                                </div>
                                <span className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} skill-name en-lang-semiBold`}>Redux</span>
                            </div>
                            <div className='skill col'>
                            <div className={logoWrapperClass}>
                                    <img src={bootstrapLogo} alt='bootstrap' className='skill-logo'/>
                                </div>
                                <span className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} skill-name en-lang-semiBold`}>Bootstrap</span>
                            </div>
                            <div className='skill col'>
                            <div className={logoWrapperClass}>
                                    <img src={motionLogo} alt='motion' className='skill-logo'/>
                                </div>
                                <span className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} skill-name en-lang-semiBold`}>Framer Motion</span>
                            </div>
                            <div className='skill col'>
                            <div className={logoWrapperClass}>
                                    <img src={muiLogo} alt='mui' className='skill-logo'/>
                                </div>
                                <span className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} skill-name en-lang-semiBold`}>Material UI</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
        </div>
    );
}