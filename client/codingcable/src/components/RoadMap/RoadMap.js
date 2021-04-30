import React from 'react';
import classes from './RoadMap.module.css';

const RoadMap = (props)=>{
    return (
        <div className={classes.container}>
            <h3 className={classes.title}>START YOUR JOURNEY</h3>
            <div className={classes.roadmap}>
                <ul>
                    <li>
                        <div className={classes.content1}>
                            <h3>Beginner</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled
                                  it to make a type specimen book. It has survived not only 
                                  five centuries, but also the leap into electronic typesetting, 
                                  remaining essentially unchanged. It was popularised in the
                                   1960s with the release of Letraset sheets containing Lorem
                                    Ipsum passages, and more recently with desktop publishing
                                     software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                    </li>
                    <li>
                        <div className={classes.content2}>
                            <h3>Intermediate</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled
                                  it to make a type specimen book. It has survived not only 
                                  five centuries, but also the leap into electronic typesetting, 
                                  remaining essentially unchanged. It was popularised in the
                                   1960s with the release of Letraset sheets containing Lorem
                                    Ipsum passages, and more recently with desktop publishing
                                     software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                    </li>
                    <li>
                        <div className={classes.content3}>
                            <h3>Advance</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled
                                  it to make a type specimen book. It has survived not only 
                                  five centuries, but also the leap into electronic typesetting, 
                                  remaining essentially unchanged. It was popularised in the
                                   1960s with the release of Letraset sheets containing Lorem
                                    Ipsum passages, and more recently with desktop publishing
                                     software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                    </li>
                
                    <div style={{clear:'both'}}></div>
                </ul>
            </div>
            <div className={classes.imgcont}>
                <img className={classes.finish} src={process.env.PUBLIC_URL + '/Images/finish.svg'} alt='finish'/>
            </div>
            <div className={classes.floating1}></div>
            <div className={classes.floating2}></div>
            <div className={classes.floating3}></div>
            <div className={classes.floating4}></div>
            <div className={classes.floating5}></div>
            <div className={classes.triangle}></div>
            {/* <img  src={process.env.PUBLIC_URL + '/Images/Ellipse.svg'} alt='ellipse'/>
            <img className={classes.floating2} src={process.env.PUBLIC_URL + '/Images/RectangleBig.svg'} alt='ellipse'/>
            <img className={classes.floating3} src={process.env.PUBLIC_URL + '/Images/TriangleYellow.svg'} alt='ellipse'/> */}
        </div>
    );
}

export default RoadMap;