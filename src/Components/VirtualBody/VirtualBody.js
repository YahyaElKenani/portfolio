import { motion } from "motion/react"
import { useSelector } from "react-redux"
import './VirtualBody.css'
// this component replaces the actual body so i can control the body styles depending on the user preferences` 
export default function VirtualBody({children}) { 
    const theme = useSelector((state) => state.preferences.currentTheme);
    return (
        <motion.div
            className="root-layout"
            animate={{
                backgroundColor: theme === 'dark' ? '#070f2b' : '#c9c6c3',
                color: theme === 'dark' ? '#c9c6c3' : '#070f2b',
            }}
        >
            {children}
        </motion.div>
    )
}