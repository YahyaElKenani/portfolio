import { useSelector } from "react-redux"
import { AnimatePresence, motion } from "motion/react";
import animeWebsite from '../../Images/anime-preview.png'
import furni from '../../Images/furni-preview.png'
import ticTacToe from '../../Images/tictactoe-preview.png'
import todolist from '../../Images/todolist-preview.png'
import './Tabs.css'
export default function TasksTab() { 
    const language = useSelector((state) => state.preferences.currentLang);
    const theme = useSelector((state) => state.preferences.currentTheme); 
    const technologiesUsedTitle = language === 'en' ? 'Technologies Used' : 'التقنيات المستخدمة'
    const animeDescription = language === 'en' ? 'Cloned, non-responsive website' : 'موقع مُقلد غير متجاوب'
    const furniDescription = language === 'en' ? 'Cloned, non-responsive website' : 'موقع مُقلد غير متجاوب'
    const ticTacToeDescription = language === 'en' ? 'Simple Tic-Tac-Toe game' : 'لعبة Tic-Tac-Toe بسيطة';
    const toDoListDescription = language === 'en' ? 'Simple To-do-list website' : 'موقع بسيط للمهام';
    const animeTechnologies = ["HTML", "CSS", "Javascript", "Bootstrap"];
    const furniTechnologies = ["HTML", "CSS", "Javascript", "Bootstrap"];
    const ticTacToeTechnologies = ["HTML", "CSS", "Javascript", "Bootstrap"];
    const toDoListTechnologies = ["HTML", "CSS", "Javascript"];
    return ( 
        <div className="projects-tab container-fluid row mx-3">
                <motion.div 
                initial={{x: -50 , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                exit={{x: 50, opacity: 0}}
                transition={{duration: 0.5}}
                className="col d-flex justify-content-center">
                <motion.a 
                whileHover={{y: -10, opacity: .9}}
                transition={{duration: 0.15}}
                href="https://yahyaelkenani.github.io/anime/" className={`${theme === 'dark' ? 'darkMode-card' : 'lightMode-card'} card text-center`}>
                    <motion.img loading="lazy" src={animeWebsite} className="card-img-top" alt="Website Preview"/>
                    <div className="card-body">
                        <div className={`card-title en-lang-bold darkMode-text`}>Anime</div>
                        <AnimatePresence mode="wait">
                            <motion.p 
                            key={`budgetTrackerDescription-${language}`}
                            initial={{x: -50 , opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: 5, opacity: 0}}
                            transition={{duration: 0.5}}
                            className={`card-text 
                                ${language === 'en' ? 'en-lang-semiBold' : 'ar-lang-semiBold'} darkMode-text`}> 
                                {animeDescription}
                                </motion.p>
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
                                    <motion.div
                                    initial={{x: -50, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 0.5}}
                                    className="technologies-used mt-3 row">
                                        {animeTechnologies.map((tech) => (
                                            <motion.p 
                                            className="col-4 technology en-lang-semiBold darkMode-text">
                                                {tech}
                                            </motion.p>
                                        ))}
                                    </motion.div>
                    </div>
                </motion.a>
                </motion.div>

                {/* {2nd card} */}
                <motion.div 
                initial={{x: -50 , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                exit={{x: 50, opacity: 0}}
                transition={{duration: 0.5}}
                className="col d-flex justify-content-center">
                <motion.a 
                whileHover={{y: -10, opacity: .9}}
                transition={{duration: 0.15}}
                href="https://yahyaelkenani.github.io/Furni/" className={`${theme === 'dark' ? 'darkMode-card' : 'lightMode-card'} card text-center`}>
                    <motion.img loading="lazy" src={furni} className="card-img-top" alt="Website Preview"/>
                    <div className="card-body">
                        <div className={`card-title en-lang-bold darkMode-text`}>Furni</div>
                        <AnimatePresence mode="wait">
                            <motion.p 
                            key={`budgetTrackerDescription-${language}`}
                            initial={{x: -50 , opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: 5, opacity: 0}}
                            transition={{duration: 0.5}}
                            className={`card-text 
                                ${language === 'en' ? 'en-lang-semiBold' : 'ar-lang-semiBold'} darkMode-text`}> 
                                {furniDescription}
                                </motion.p>
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
                                    <motion.div
                                    initial={{x: -50, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 0.5}}
                                    className="technologies-used mt-3 row">
                                        {furniTechnologies.map((tech) => (
                                            <motion.p 
                                            className="col-4 technology en-lang-semiBold darkMode-text">
                                                {tech}
                                            </motion.p>
                                        ))}
                                    </motion.div>
                    </div>
                </motion.a>
                </motion.div>

                {/* {3rd card} */}
                <motion.div 
                initial={{x: -50 , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                exit={{x: 50, opacity: 0}}
                transition={{duration: 0.5}}
                className="col d-flex justify-content-center">
                <motion.a 
                whileHover={{y: -10, opacity: .9}}
                transition={{duration: 0.15}}
                href="https://yahyaelkenani.github.io/TicTacToe/" className={`${theme === 'dark' ? 'darkMode-card' : 'lightMode-card'} card text-center`}>
                    <motion.img loading="lazy" src={ticTacToe} className="card-img-top" alt="Website Preview"/>
                    <div className="card-body">
                        <div className={`card-title en-lang-bold darkMode-text`}>Tic Tac Toe</div>
                        <AnimatePresence mode="wait">
                            <motion.p 
                            key={`budgetTrackerDescription-${language}`}
                            initial={{x: -50 , opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: 5, opacity: 0}}
                            transition={{duration: 0.5}}
                            className={`card-text 
                                ${language === 'en' ? 'en-lang-semiBold' : 'ar-lang-semiBold'} darkMode-text`}> 
                                {ticTacToeDescription}
                                </motion.p>
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
                                    <motion.div
                                    initial={{x: -50, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 0.5}}
                                    className="technologies-used mt-3 row">
                                        {ticTacToeTechnologies.map((tech) => (
                                            <motion.p 
                                            className="col-4 technology en-lang-semiBold darkMode-text">
                                                {tech}
                                            </motion.p>
                                        ))}
                                    </motion.div>
                    </div>
                </motion.a>
                </motion.div>

                {/* {4th card} */}
                <motion.div 
                initial={{x: -50 , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                exit={{x: 50, opacity: 0}}
                transition={{duration: 0.5}}
                className="col d-flex justify-content-center">
                <motion.a 
                whileHover={{y: -10, opacity: .9}}
                transition={{duration: 0.15}}
                href="https://yahyaelkenani.github.io/ToDoList/" className={`${theme === 'dark' ? 'darkMode-card' : 'lightMode-card'} card text-center`}>
                    <motion.img loading="lazy" src={todolist} className="card-img-top" alt="Website Preview"/>
                    <div className="card-body">
                        <div className={`card-title en-lang-bold darkMode-text`}>To-do List</div>
                        <AnimatePresence mode="wait">
                            <motion.p 
                            key={`budgetTrackerDescription-${language}`}
                            initial={{x: -50 , opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: 5, opacity: 0}}
                            transition={{duration: 0.5}}
                            className={`card-text 
                                ${language === 'en' ? 'en-lang-semiBold' : 'ar-lang-semiBold'} darkMode-text`}> 
                                {toDoListDescription}
                                </motion.p>
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
                                    <motion.div
                                    initial={{x: -50, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 0.5}}
                                    className="technologies-used mt-3 row">
                                        {toDoListTechnologies.map((tech) => (
                                            <motion.p 
                                            className="col-4 technology en-lang-semiBold darkMode-text">
                                                {tech}
                                            </motion.p>
                                        ))}
                                    </motion.div>
                    </div>
                </motion.a>
                </motion.div>
        </div>
    )
}