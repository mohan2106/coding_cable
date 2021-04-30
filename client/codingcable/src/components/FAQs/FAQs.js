import React,{useEffect} from 'react';
import classes from './FAQs.module.css';
import Single from './Single/Single';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {FaqTop5} from '../../redux/index';

const FAQs = (props)=>{
    useEffect(()=>{
        props.fetchFaqTop5();
    },[])
    console.log(props.faqTop5.data);
    var data = []
    if(props.faqTop5.data.FAQList !== undefined){
        data = props.faqTop5.data.FAQList.map(ele => {
            return <Single {...ele}/>;
        })
    }
    
    return (
        <div className={classes.faqcontainer}>
            {props.faqTop5.loading ? <div>Loading Faq Data</div> : 
            <div>
                <div className={classes.container_fluid}>
                <h1>Frequently Asked Questions (FAQs)</h1>
                {data}
                </div>
                {props.viewButton ?
                <div>
                    <Link to="/faqs">
                        <div className={classes.btn}>
                            <button>More</button>
                        </div>
                    </Link>
                    <div className={classes.floating1}/>
                    <div className={classes.floating2}/>
                    <div className={classes.floating3}/>
                </div>
                    
                :null}
            </div>}
        </div>
        
    );
}

const mapStateToProps = state =>{
    return {
        faqTop5: state.faqTop5
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFaqTop5 : () => dispatch(FaqTop5())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FAQs);