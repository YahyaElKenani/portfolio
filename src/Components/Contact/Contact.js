import { AnimatePresence, motion } from 'motion/react'
import './Contact.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux'
import { Tooltip } from '@mui/material';
export default function Contact() { 
    const language = useSelector((state) => state.preferences.currentLang);
    const theme = useSelector((state) => state.preferences.currentTheme);
    const title = language === 'en' ? 'Contact' : 'التواصل'
    const phoneNumber = '+201113612859'
    const emailAddress = 'yahyaelkenani283@gmail.com' 
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
    const contactWithWhatsapp = () => { 
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    }
    const contactWithGmail = () => { 
        window.open(gmailUrl, '_blank');
    }
    return ( 
        <motion.div className='contact-page container'>
            <AnimatePresence mode='wait'> 
            <motion.div
                    key={`about-${language}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${language === 'en' ? 'en-lang-bold' : 'ar-lang-bold'} ${
                        theme === 'dark' ? 'darkMode-text darkMode-subtext' : 'lightMode-text lightMode-subtext'
                    } text-center contact-page-title`}
                >
                    {title}
                </motion.div>
            </AnimatePresence>
            <div className='contact-buttons row d-flex justify-content-center mt-3'>
                <Tooltip title='Whatsapp'>
                    <div id='Contact' className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} contact-button col-4 en-lang-semiBold d-flex align-items-center justify-content-center`} onClick={() => {contactWithWhatsapp()}}>
                        <WhatsAppIcon className='btn-icon' />
                    </div>
                </Tooltip>
                <Tooltip title='Gmail'>
                    <div className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} contact-button col-4 en-lang-semiBold d-flex align-items-center justify-content-center`} onClick={() => {contactWithGmail()}}>
                        <MailIcon className='btn-icon' />
                    </div>
                </Tooltip>
                    {/* <WhatsAppIcon className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} contact-button col-4 en-lang-semiBold d-flex align-items-center justify-content-center`} onClick={() => {contactWithWhatsapp()}} />
                    <MailIcon className={`${theme === 'dark' ? 'darkMode-text' : 'lightMode-text'} contact-button col-4 en-lang-semiBold d-flex align-items-center justify-content-center`} onClick={() => {contactWithGmail()}} /> */}
            </div>
        </motion.div>
    )
}