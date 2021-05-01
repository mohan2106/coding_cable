import React,{useState,useEffect} from 'react';
import classes from './BlogHome.module.css';
import loadingclass from './loading.module.css';
import {Link} from 'react-router-dom';
import ErrorPage from '../../ErrorPage/ErrorPage'; 
import axios from 'axios';


const Single = (props) => {
    // const timestamp = props.TimeStamp;
    const date = new Date(props.TimeStamp);
    const stringdate = date.toDateString();
    return (
        <div className={classes.single}>
            <div className={classes.singlecontainer}>
                <div className={classes.item1}>
                    <div className={classes.username}>Written By: {props.UserName}</div>
                    <div className={classes.title}>{props.Title}</div>
                    <div className={classes.desc}>{props.Description}</div>
                    <div className={classes.date}>{stringdate}</div>
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

const SingleLoading = () => {
    return (
        <div className={loadingclass.single}>
            <div className={loadingclass.item1}>
                <div className={loadingclass.name}></div>
                <div className={loadingclass.head}></div>
                <div className={loadingclass.subhead}></div>
            </div>
            <div className={loadingclass.item2}></div>
        </div>
    );
}
const Loading = () => {
    const data = [0,1,2,3,4,5,6,7,8,9].map(i=>{
        return <SingleLoading/>;
    })
    return (
        <div className={loadingclass.loading}>
            {data}
        </div>
    );
}


function BlogHome(props) {

    const [index,setIndex] = useState(0);
    const [loading,setLoading] = useState(false);
    const [blogs,setBlogs] = useState({});
    const [error,setError] = useState('');
    const [blogComponent,setBlogComponent] = useState(null);
    // console.log('Props called',props.blogData);
    // if(blogData === ''){
    //     
    // }
    // setBlog(props.blogData);
    
    const blogFetch = () => {
        setLoading(true);
        setBlogs({});
        setError('');
        setBlogComponent(Loading())
    }
    const blogSuccess = (data) => {
        setLoading(false);
        setBlogs(data);
        setError('');
        const dataList = data.BlogList.map(d => {
            const link = "/blogs/id/"+d._id;
            return (<Link to={link} style={{ textDecoration: 'none' }}>
                <Single {...d}/>
            </Link>);
        });
        // setBlogComponent(Loading())
        setBlogComponent(dataList);
    }
    const blogFailure = (data) => {
        setLoading(false);
        setBlogs({});
        setError(data);
        
        setBlogComponent(<ErrorPage message={data}/>);
    }

    useEffect(() => {
        var data = JSON.stringify(
            {
                "st":10*index,
                "end":(10*(index+1)-1)
            }
        );
        var config = {
            method: 'post',
            url: 'http://localhost:4000/blogs/getRange',
            headers: { 
                'Content-Type': 'application/json',
            },
            data : data  
        };
        blogFetch();
        axios(config)
        .then(response => {
            const blogDetail = response.data;
            console.log(blogDetail);
            blogSuccess(blogDetail);
        }).catch(error => {
            const errorMsg = error.message;
            blogFailure(errorMsg);
            console.log(errorMsg);
        })
        
    }, [])
    
    return (
        <div className={classes.container}  >
            <BlogBanner/>
            <div className={classes.blogsContainer}></div>
            {blogComponent}
        </div>
    )
}

export default BlogHome
