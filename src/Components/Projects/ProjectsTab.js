import { AnimatePresence, motion } from "motion/react"
import { useSelector } from "react-redux"
import theBudgetTracker from '../../Images/thebudgettracker-preview.png'
import './Tabs.css'
export default function ProjectsTab() { 
    const language = useSelector((state) => state.preferences.currentLang);
    const theme = useSelector((state) => state.preferences.currentTheme);
    const theBudgetTrackerDescription = language === 'en' ? 'Designed from scratch - An application for tracking your budget, save your buylist which you have full control of, store the history of your transactions , organise and managing your transactions depending on your budget and a limit you set by yourself'
    : 
    'موقع مصمم من الصفر لمتابعة ميزانيتك , حفظ قائمة مشترياتك التي تتحكم فيها بالكامل وفقا لرغبتك , تخزين عملياتك السابقة وادارة ميزانيتك بحيث لا تتجاوز الحد الادنى الذي تضعه بنفسك '
    const theBudgetTrackerTechnologies = ["HTML", "CSS", "Javascript", "Bootstrap", "React Js", 
        "Redux Toolkit", "React Redux", "React Router", 
        "React Toastify", "React Bootstrap", "GSAP", 
        "Material UI", "UUID"] 
    const technologiesUsedTitle = language === 'en' ? 'Technologies Used' : 'التقنيات المستخدمة'
    return ( 
        <div className="projects-tab container-fluid row mx-3"> 
            <AnimatePresence mode="wait">
                <motion.div 
                initial={{x: -50 , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                exit={{x: 50, opacity: 0}}
                transition={{duration: 0.5}}
                className="col d-flex justify-content-center">
                <motion.a 
                whileHover={{y: -10, opacity: .9}}
                transition={{duration: 0.15}}
                href="https://yahyaelkenani.github.io/The-Budget-Tracker/" className={`${theme === 'dark' ? 'darkMode-card' : 'lightMode-card'} card text-center`}>
                    <motion.img src={theBudgetTracker} loading="lazy" className="card-img-top" alt="Website Preview"/>
                    <div className="card-body">
                        <div className={`card-title en-lang-bold darkMode-text`}>The Budget Tracker</div>
                        <AnimatePresence mode="wait">
                            <motion.p 
                            key={`budgetTrackerDescription-${language}`}
                            initial={{x: -50 , opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: 5, opacity: 0}}
                            transition={{duration: 0.5}}
                            className={`card-text 
                                ${language === 'en' ? 'en-lang-semiBold' : 'ar-lang-semiBold'} darkMode-text`}>{theBudgetTrackerDescription}</motion.p>  
                        </AnimatePresence>
                    </div>
                    <div className="card-footer">
                        <AnimatePresence mode="wait">
                            <motion.div 
                            key={`technologies-used-${language}`}
                            initial={{x: -50 , opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: 5, opacity: 0}}
                            transition={{duration: 0.5}}
                            className={`technologies-used-title darkMode-text ${language === 'en' ? 'en-lang-bold' : 'ar-lang-bold'}`}>
                                {technologiesUsedTitle}
                            </motion.div>
                            </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                    key={`tech-${language}`}
                                    initial={{x: -50, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    exit={{x: 50, opacity: 0}}
                                    transition={{duration: 0.5}}
                                    className="technologies-used mt-3 row">
                                        {theBudgetTrackerTechnologies.map((tech) => (
                                            <motion.p 
                                            className="col-4 technology en-lang-semiBold darkMode-text">
                                                {tech}
                                            </motion.p>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                    </div>
                </motion.a>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}