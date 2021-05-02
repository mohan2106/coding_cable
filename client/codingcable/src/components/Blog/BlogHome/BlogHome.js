import React,{useState,useEffect} from 'react';
import classes from './BlogHome.module.css';
import loadingclass from './loading.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Link} from 'react-router-dom';
import ErrorPage from '../../ErrorPage/ErrorPage'; 
import { connect } from "react-redux";
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

const BlogBanner = ({user})=>{
    return (
        <div className={classes.banner}>
            <div className={classes.blogs}>
                <div className={classes.banner_item1}>BLOGS</div>
                <div>
                {user.isAuthenticated ? 
                <Link to='/blogs/addblog' style={{ textDecoration: 'none' }}>
                    <button className={classes.banner_item2}>Add Blog</button>
                </Link>
                    
                     : null}
                </div>
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
    const data = [0,1,2].map(i=>{
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
    const [blogComponent,setBlogComponent] = useState([]);
    const [hasmore,setHasmore] = useState(true);
    
    

    const fetchMoreData = () => {
        console.log("Fetch More called");
        if(blogComponent.length < 10*index){
            return;
        }
        
        if(!hasmore){
            console.log("No more data to fetch")
            return;
        }else{
            console.log("Data left index:",index);
                const jsondata = JSON.stringify(
                    {
                        "st":10*index,
                        "end":(10*(index+1)-1)
                    }
                );
                console.log(jsondata);
                const config = {
                    method: 'post',
                    url: 'http://localhost:4000/blogs/getRange',
                    headers: { 
                        'Content-Type': 'application/json',
                    },
                    data : jsondata  
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
                setIndex(index+1);
        }
        
    };

    
    const blogFetch = () => {
        setLoading(true);
        setBlogs({});
        setError('');
        setBlogComponent([])
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
        if(dataList.length < 10){
            console.log("No More data");
            setHasmore(false);
        }
        setBlogComponent(blogComponent.concat(dataList));
    }
    const blogFailure = (data) => {
        setLoading(false);
        setBlogs({});
        setError(data);
        setBlogComponent([]);
    }

    useEffect(() => {
        const data = JSON.stringify(
            {
                "st":10*index,
                "end":(10*(index+1)-1)
            }
        );
        console.log(data);
        const config = {
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
        setIndex(index+1);
    }, [])
    
    return (
        <div className={classes.container}  >
            <BlogBanner user={props.userData}/>
            <div className={classes.blogsContainer}></div>
            {/* {blogComponent} */}
            <InfiniteScroll
                dataLength={blogComponent.length}
                next={fetchMoreData}
                hasMore={hasmore}
                loader={Loading()}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                      <b>No More Blogs</b>
                    </p>
                  }
                >
                {blogComponent}
            </InfiniteScroll>
        </div>
    )
}


const mapStateToProps = state =>{
    return {
        userData: state.user,
    }
  }
  
  
export default connect(mapStateToProps,null)(BlogHome);
 
