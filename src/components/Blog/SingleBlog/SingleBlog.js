import classes from "./SingleBlog.module.css";
import loadingclass from './loading.module.css';
import React,{useState,useEffect} from "react";
import Editor from "rich-markdown-editor";
import {light as Light} from '../theme.ts';
// import { connect } from "react-redux";
// import {getBlog} from '../../../redux/index';
import axios from 'axios';
import ErrorPage from '../../ErrorPage/ErrorPage';


// const data =  {
//     UserName: 'Mohan Kumar',
//     UserImage: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     TitleImage: 'https://images.unsplash.com/photo-1619478691745-af923eed4601?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     Title: 'Tim Cook’s 5-Word Response to Facebook Is Brutal and Brilliant at the Same Time',
//     Date: '25th Dec 2020',
//     // Content: 'Hello World2',
//     Content: '---    __Advertisement :)__\n - __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image \n  resize in browser. \n    - __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly \n   i18n with plurals support and easy syntax. \n    You will like those projects! \n  --- \n  # h1 Heading 8-) \n ## h2 Heading \n ### h3 Heading  \n   #### h4 Heading \n ##### h5 Heading \n  ###### h6 Heading \n',
//     Description:'Apple’s CEO is clear that he isn’t making decisions based on what’s best for Facebook, but for Apple and its customers',
// }

const Loading = () => {
    return (
        <div className={loadingclass.loading}>
            <div className={loadingclass.title}></div>
            <div className={loadingclass.title}></div>
            <div className={loadingclass.desc}></div>
            <div className={loadingclass.desc}></div>
            <div className={loadingclass.user}>
                <div className={loadingclass.item1}>
                    <div className={loadingclass.userImage} />
                </div>
                <div className={loadingclass.item2}>
                    <div className={loadingclass.username}></div>
                    <div className={loadingclass.date}></div>
                </div>
            </div>
            <div >
                <div className={loadingclass.titleimage} />
            </div>
            <div className={loadingclass.content}>
                <div className={loadingclass.line}></div>
                <div className={loadingclass.line}></div>
                <div className={loadingclass.line}></div>
                <div className={loadingclass.line}></div>
                <div className={loadingclass.line}></div>
                <div className={loadingclass.line}></div>
                <div className={loadingclass.line}></div>
                <div className={loadingclass.line}></div>
                <div className={loadingclass.line}></div>
                <div className={loadingclass.line}></div>
            </div>
        </div>
    );
}
    

function SingleBlog(props) {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState({});
    const [error,setError] = useState('');
    const [Content,setContent] = useState('');
    // console.log('Props called',props.blogData);
    // if(blogData === ''){
    //     
    // }
    // setBlog(props.blogData);
    const blogFetch = () => {
        setLoading(true);
        setData({});
        setError('');
    }
    const blogSuccess = (data) => {
        const date = new Date(data.TimeStamp);
        const stringdate = date.toDateString();
        setData({...data,
            TimeStamp:stringdate});
        setError('');
        setContent(data.Content);
        // console.log(data.Content);
        setLoading(false);
    }
    const blogFailure = (data) => {
        setLoading(false);
        setData({});
        setError(data);
    }

    useEffect(() => {
        const currentURL = `${window.location.href}`;
        const urlSplit = currentURL.split("/");
        const n = urlSplit.length;
        const id = urlSplit[n-1];

        console.log("Blog ID: ",id);
        // const blogData = localStorage.getItem(id) || '';
        // console.log('props',blogData);
        
        var data = JSON.stringify(
            {
                "id":`${id}`,
            }
        );
        var config = {
            method: 'post',
            url: 'http://localhost:4000/blogs/getBlog',
            headers: { 
                'Content-Type': 'application/json',
            },
            data : data  
        };
        blogFetch();
        axios(config)
        .then(response => {
            const blogDetail = response.data.blog;
            console.log(blogDetail);
            blogSuccess(blogDetail);
        }).catch(error => {
            const errorMsg = error.message;
            blogFailure(errorMsg);
            console.log(errorMsg);
        })
        
    }, [])
    return (
        <div className={classes.container}>
            {loading ? <Loading/> : 
            <div>
                {error.length !== 0 ? <ErrorPage message="PAGE NOT FOUND"/> : 
                <div>
                    <div className={classes.title}>{data.Title}</div>
                    <div className={classes.desc}>{data.Description}</div>
                    <div className={classes.user}>
                        <div className={classes.item1}>
                            <img className={classes.userImage} src={data.UserImage} alt="img"/>
                        </div>
                        <div className={classes.item2}>
                            <div className={classes.username}>{data.UserName}</div>
                            <div className={classes.date}>{data.TimeStamp}</div>
                        </div>
                    </div>
                    <div >
                        <img className={classes.titleimage} src={data.TitleImage} alt="title-img"/>
                    </div>
                    {/* {data.Content} */}
                    <div className={classes.content}>
                        <Editor 
                            defaultValue={Content}
                            readOnly={true}
                            theme = {Light}
                        />
                    </div>
                </div>}
            </div>}
        </div>
    )
}


// const mapStateToProps = state =>{
//     return {
//         blogData: state.blogDetail
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         GetBlog : (data) => dispatch(getBlog(data))
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(SingleBlog);
export default SingleBlog;

