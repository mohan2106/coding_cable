import React,{useState,useEffect} from 'react';
import  {Link} from 'react-router-dom';
import {Link as Link1} from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Button} from './Button/Button.js';
import classes from './Navbar.module.css';
import debounce from '../utils/debounce.js';
import {motion} from 'framer-motion';

function Navbar({showLink = true}) {
    const [click,setClick] =  useState(false);
    const [button,setButton] =  useState(true);
    const handleClick = ()=>setClick(!click);
    // const handleButton = ()=>setButton(!button);
    const [hideNavbar, setHideNavbar] = useState(false);
    const [prevScrollpos, setPrevScrollpos] = useState(0);

    const onScrollHandleNavbar=()=>{
        const currentScrollpos = window.pageYOffset;
        if(prevScrollpos > currentScrollpos){
            setHideNavbar(true);
        }else{
            setHideNavbar(false);
        }
        setPrevScrollpos(currentScrollpos);
    }

    window.addEventListener('scroll', debounce(onScrollHandleNavbar, 200));

    const closeMobileMenu = ()=> setClick(false);

    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    useEffect(()=>{
        showButton();
    },[])
    window.addEventListener('resize',showButton);
    return (
        <>
        <IconContext.Provider value={{color:'#6B25D0'}}>
            <motion.div initial={hideNavbar? {y:'-10vh'}:{y:'0vh'}} animate={hideNavbar? {y:'0vh'}:{y:'-10vh'}} className={classes.navbar}>
                <div className={`${classes.navbar_container} ${classes.container}`}>
                    <Link to='/coding_cable' className={classes.navbar_logo} onClick={closeMobileMenu}>
                        {/* <MdFingerprint className='navbar-icon'/> */}
                        <img src={process.env.PUBLIC_URL + '/Images/logo.svg'} className={classes.navbar_icon} alt="logo" />
                        CODINGCABLE.COM
                    </Link>
                    {showLink ? 
                    <div>
                        <div className={classes.menu_icon} onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                        </div>
                        <ul className={click ? `${classes.nav_menu} ${classes.active}` : classes.nav_menu}>
                            <li className={classes.nav_item}>
                                <Link1 to='home' onClick={closeMobileMenu} className={classes.nav_links} smooth={true} duration={1000}>
                                    Home
                                </Link1>
                            </li>
                            <li className={classes.nav_item}>
                                <Link1 to='courses' onClick={closeMobileMenu} className={classes.nav_links} smooth={true} duration={1000}>
                                    Courses
                                </Link1>
                            </li>
                            <li className={classes.nav_item}>
                                <Link to='/blogs' onClick={closeMobileMenu} className={classes.nav_links}>
                                    Blogs
                                </Link>
                            </li>
                            <li className={classes.nav_item}>
                                <Link to='/aboutus' onClick={closeMobileMenu} className={classes.nav_links}>
                                    About Us
                                </Link>
                            </li>
                            <li className={classes.nav_btn} >
                                {button ? (
                                    <Link to='/signin' className={classes.btn_link}>
                                        <Button buttonStyle='btn--rounded'>
                                            LogIn/SignUp
                                        </Button>
                                    </Link>
                                ):(
                                    <Link to='/signin' className={classes.btn_link} onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn--outline'
                                                buttonSize='btn--mobile'>
                                                    SIGN IN
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        </ul> 
                    </div>  : null}
                </div> 
            </motion.div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
