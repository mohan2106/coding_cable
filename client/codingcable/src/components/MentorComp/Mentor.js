import React from 'react';
import './Mentor.css';



function Mentor(props) {
    const data = props.alumni.map((ele,index) => {
        return (
            <div className='flex-item'>
                <div className='alumni'>
                    <img className='alumni-img' src={ele.img}alt='IIT'></img>
                    <p className='alumni-text'>{ele.text}</p>   
                </div>
            </div>
        );
    });
  return (
    <>
      <div className='container'>
          <h3 class='headline'>Learn best from the mentor of</h3>
          <div className='flex-container'
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}>
              {data}
          </div>
      </div>
    </>
  );
}

export default Mentor;
