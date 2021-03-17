import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import classes from './Header.module.css';
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
      },
    header: {
       backgroundColor: "#ffffff",
        paddingRight: "79px",
        paddingLeft: "118px",
        paddingTop: "20px",
        paddingBottom: "20px"
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#000000",
        textAlign: "left",
        margin : '0 8px 0 8px'
      },
      menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
     },
 }));

 const headersData = [
    {
      label: "Listings",
      href: "/listings",
    },
    {
      label: "Mentors",
      href: "/mentors",
    },
    {
      label: "My Account",
      href: "/account",
    },
    {
      label: "Log Out",
      href: "/logout",
    },
  ];

function Header() {
    const { toolbar, header, logo, menuButton } = useStyles();
    const displayDesktop = () => {
        return <Toolbar class={toolbar}>
            <img src={process.env.PUBLIC_URL + '/logo2.svg'} className={classes.logo} alt="logo" />
            {codingcableLogo}
            <div>{getMenuButtons()}</div>
            </Toolbar>;
        };

    const codingcableLogo = (
    <Typography variant="h6" component="h1" className={logo}>
         CodingCable
    </Typography>
    );
    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button 
              {...{
                key: label,
                color: "black",
                to: href,
                component: RouterLink,
                className: menuButton
              }}
            >
              {label}
            </Button>
          );
        });
      };
    return (
        <header>
        <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    );
}

export default Header;

