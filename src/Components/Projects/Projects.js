import { useSelector } from 'react-redux'
import './Projects.css'
import { AnimatePresence, motion } from 'motion/react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import ProjectsTab from './ProjectsTab';
import TasksTab from './TasksTab';
export default function Projects() { 
    const language = useSelector((state) => state.preferences.currentLang);
    const theme = useSelector((state) => state.preferences.currentTheme); 
    const projectsPageTitle = language === 'en' ? 'Projects' : 'المشاريع'
    const completedProjectsTitle = language === 'en' ? 'Real Projects' : 'المشروعات الحقيقية'
    const unCompletedProjectsTitle = language === 'en' ? 'Small Tasks' : 'مهام صغيرة'
    const navigate = useNavigate(); 
    const location = useLocation();
    useLayoutEffect(() => {
        console.log(location.pathname);
    }, [location])
    const switchProductTab = (e) => { 
        navigate(e.currentTarget.id);
    }
    return ( 
        <div className='projects-page container-fluid'>
                <AnimatePresence mode='wait'>
                    <motion.div
                        id='Projects'
                        key={`projects-${language}`}
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`${language === 'en' ? 'en-lang-bold' : 'ar-lang-bold'} ${
                            theme === 'dark' ? 'darkMode-text darkMode-subtext' : 'lightMode-text lightMode-subtext'
                        } text-center projects-page-title`}
                    >
                        {projectsPageTitle}
                    </motion.div>
                </AnimatePresence>
                <div className='projects-tabs row'> 
                    <AnimatePresence mode='wait'> 
                        <motion.div 
                            id='completed-projects'
                            key={`projects-tabs1-${language}`}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            onClick={(e) => {switchProductTab(e)}}
                            className={`${language === 'en' ? 'en-lang-bold' : 'ar-lang-bold'} ${
                                theme === 'dark' ? 'darkMode-text darkMode-subtext' : 'lightMode-text lightMode-subtext'
                            } ${location.pathname === '/tasks' ? '' : 'active'} text-center projects-tabs-title col-6`}>
                                {completedProjectsTitle}
                        </motion.div>
                        <motion.div 
                            id='tasks'
                            key={`projects-tabs2-${language}`}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            onClick={(e) => {switchProductTab(e)}}
                            className={`${language === 'en' ? 'en-lang-bold' : 'ar-lang-bold'} ${
                                theme === 'dark' ? 'darkMode-text darkMode-subtext' : 'lightMode-text lightMode-subtext'
                            } ${location.pathname === '/tasks' ? 'active' : ''} text-center projects-tabs-title col-6`}>
                            {unCompletedProjectsTitle}
                        </motion.div>
                    </AnimatePresence>
                </div>
                <Routes>
                    <Route path='/completed-projects' element={<ProjectsTab/>}/>
                    <Route path='/' element={<ProjectsTab/>}/>
                    <Route path='/tasks' element={<TasksTab/>}/>
                </Routes>
        </div>
    )
}