import classes from "./SingleBlog.module.css";
import React,{useState,useContext} from "react";
import Editor from "rich-markdown-editor";
import {light as Light,dark as Dark} from '../theme.ts';

const data =  {
    UserName: 'Mohan Kumar',
    UserImage: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    TitleImage: 'https://images.unsplash.com/photo-1619478691745-af923eed4601?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    Title: 'Tim Cook’s 5-Word Response to Facebook Is Brutal and Brilliant at the Same Time',
    Date: '25th Dec 2020',
    // Content: 'Hello World2',
    Content: '---    __Advertisement :)__\n - __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image \n  resize in browser. \n    - __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly \n   i18n with plurals support and easy syntax. \n    You will like those projects! \n  --- \n  # h1 Heading 8-) \n ## h2 Heading \n ### h3 Heading  \n   #### h4 Heading \n ##### h5 Heading \n  ###### h6 Heading \n',
    Description:'Apple’s CEO is clear that he isn’t making decisions based on what’s best for Facebook, but for Apple and its customers',
}
    

function SingleBlog() {
    // var [MDValue,setMDValue] = useState('');
    // useContext(()=>{
    //     setMDValue(data.Content);
    // },[])
    return (
        <div className={classes.container}>
            <div className={classes.title}>{data.Title}</div>
            <div className={classes.desc}>{data.Description}</div>
            <div className={classes.user}>
                <div className={classes.item1}>
                    <img className={classes.userImage} src={data.UserImage} alt="userImage"/>
                </div>
                <div className={classes.item2}>
                    <div className={classes.username}>{data.UserName}</div>
                    <div className={classes.date}>{data.Date}</div>
                </div>
            </div>
            <div >
                <img className={classes.titleimage} src={data.TitleImage} alt="title-img"/>
            </div>
            <div className={classes.content}>
                <Editor 
                    defaultValue={data.Content}
                    readOnly={true}
                    theme = {Light}
                />
            </div>
            
        </div>
    )
}

export default SingleBlog
