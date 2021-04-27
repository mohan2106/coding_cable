import React from 'react';
import classes from './BlogHome.module.css';
import {Link} from 'react-router-dom';


const Single = (props) => {
    return (
        <div className={classes.single}>
            <div className={classes.singlecontainer}>
                <div className={classes.item1}>
                    <div className={classes.username}>Written By: {props.UserName}</div>
                    <div className={classes.title}>{props.Title}</div>
                    <div className={classes.desc}>{props.Description}</div>
                    <div className={classes.date}>{props.Date}</div>
                </div>
                <div className={classes.item2}>
                    <img src={props.TitleImageLink} alt="img"/>
                </div>
            </div>
            <div className={classes.line}></div>
        </div>
    );
}

const BlogBanner = ()=>{
    return (
        <div className={classes.banner}>
            <div className={classes.blogs}>
                <img className={classes.blogImg} src={process.env.PUBLIC_URL + "/Images/BlogHeader.jpg"} alt="blogimage"/>
            </div>
        </div>
    );
}

const data = [
    {
		ID:'ID1',
        Title: 'Sample Blog 1',
        TitleImageLink: 'https://images.unsplash.com/photo-1619314367068-f1ba7b7ebfaf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        Description: 'This is a sample description, Once apon a time in mumbai',
        UserName: 'Mohan Kumar',
        UserPic: 'NOthing',
        Date: '25th Dec 1998'
    },
    {
		ID:'ID2',
        Title: 'Sample Blog 2',
        TitleImageLink: 'https://images.unsplash.com/photo-1619478691745-af923eed4601?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        Description: 'This is a sample description',
        UserName: 'Mohan Kumar',
        UserPic: 'NOthing',
        Date: '25th Dec 1998'
    },
    {
		ID:'ID1',
        Title: 'Sample Blog 3',
        TitleImageLink: 'https://images.unsplash.com/photo-1619314367068-f1ba7b7ebfaf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        Description: 'This is a sample description',
        UserName: 'Mohan Kumar',
        UserPic: 'NOthing',
        Date: '25th Dec 1998'
    },

]

function BlogHome() {
    const dataList = data.map(d => {
        const link = "/blogs/id/"+d.ID;
        return (<Link to={link} style={{ textDecoration: 'none' }}>
            <Single {...d}/>
        </Link>);
    })
    return (
        <div className={classes.container}  >
            <BlogBanner/>
            <div className={classes.blogsContainer}></div>
            {dataList}
        </div>
    )
}

export default BlogHome
