import React from 'react';
import classes from './Content.module.css';
import { BsDownload } from "react-icons/bs";
import Single from './Single/Single';


const Content = (props) => {
    const data = props.modulelist.map(d => {
        return (
            <Single {...d}/>
        );
    });
    return (
        <div className={classes.container}>
            <div className={classes.title}>Course Content</div>
            <div className={classes.header}>
                <div className={classes.name}>
                    <div className={classes.name1}>
                        {props.head}
                    </div>
                    <div className={classes.name2}>
                        {props.subhead}
                    </div>
                </div>
                <div className={classes.download}>
                    <div className={classes.downloadbtn}>
                        <BsDownload/>
                        <p>Download Complete Syllabus</p>
                    </div>
                    
                </div>
                
            </div>
            <div className={classes.modules}>
                {data}
            </div>
        </div>
    );
}

export default Content;