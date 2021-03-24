import React,{useState} from 'react';
import classes from './Pricing.module.css';
import './pricing_temp.css';
import SinglePrice from './Single/SinglePrice';

const Pricing = ()=>{
    const [leftbtn,setleftbtn] = useState(['switch_button_case', 'left', 'active_case']);
    const [rightbtn,setrightbtn] = useState(['switch_button_case', 'right']);
    const [isLeft,setIsLeft] = useState(true);

    const switchRight = ()=>{
        console.log('left click')
        setleftbtn(['switch_button_case', 'left']);
        setrightbtn(['switch_button_case', 'right','active_case']);
        setIsLeft(false);
    }
    const switchLeft = ()=>{
        console.log('right click')
        setrightbtn(['switch_button_case', 'right']);
        setleftbtn(['switch_button_case', 'left','active_case']);
        setIsLeft(true);
    }
    
    const content = ['Intro to programming','Loops structures','Functions','Oops concept','basic maths','mini projects']

    const class10 = (
        <div className={classes.row}>
                    <div className={classes.items}><SinglePrice title='Begineer' contents={content}/></div>
                    <div className={classes.items}><SinglePrice title='Intermediate' contents={content}/></div>
                    <div className={classes.items}><SinglePrice title='Advance' contents={content}/></div>
                </div>
    );

    const class12 = (<div className={classes.row}>
        <div className={classes.items}><SinglePrice title='Begineer' contents={content}/></div>
        <div className={classes.items}><SinglePrice title='Intermediate' contents={content}/></div>
    </div>);
    
    return (
        <div className={classes.container}>
            <div className={classes.pricing}>
                <div className={classes.head}>
                    <p className={`${classes.head_item} ${classes.title}`}>
                        Our Courses
                    </p>
                    <div className={`${classes.head_item} switch_button`}>
                        <span className='active'
                        style={{
                            left: isLeft? '0%' : '50%'
                          }}>
                        </span>
                        <button className={leftbtn.join(' ')} onClick={switchLeft}>Class 6-10</button>
                        <button className={rightbtn.join(' ')} onClick={switchRight}>Class 11-12</button>
                    </div>
                </div>
                {isLeft?
                class10 :
                class12
                }
                
            </div>
        </div>
    );
}

export default Pricing;