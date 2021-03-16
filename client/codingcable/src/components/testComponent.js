
function testComponent() {
  return (
    <div className="App">
      <h1>Coding Cable</h1>
      <h2>Competetive Coding course for K12 students.</h2>
      <br></br>
      <br></br>
      <br></br>
      <img src={process.env.PUBLIC_URL + '/logo2.svg'} className="App-logo" alt="logo" />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>Welcome Future Coders.</h3>
      <h3> Stay tuned with us on our social media profiles.</h3>
      <h3>We are coming soon</h3>
      <a href='https://www.instagram.com/codingcable'>
        <img src={process.env.PUBLIC_URL + '/insta.svg'} alt="instagram"/>
        </a>
        <a href='https://www.facebook.com/CodingCable-100239938797987'>
        <img src={process.env.PUBLIC_URL + '/fb.svg'} alt="facebook"/>
        </a>
        <a href='https://twitter.com/CableCoding'>
        <img src={process.env.PUBLIC_URL + '/twitter.svg'} alt="twitter"/>
        </a>
    </div>
  );
}

export default testComponent;