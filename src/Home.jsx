import React from "react";

const cardStyle = {
  width: '409px'
}

const Home = () => (
  <div style={cardStyle} className='ui container center aligned segment'>
    <h1>Welcome to My favorite Movies App</h1>
    <div className='ui grid segment'>
      <div className='eight wide column'>
        <img className='ui small circular image' src='https://avatars1.githubusercontent.com/u/18352555?s=460&v=4' alt="Alejandro's profile" />
      </div>
      <div className='eight wide column'>
        <h1 className='ui small header'> Alejandro Franco </h1>
        <p> From: 
          <span role='img' aria-label='Mountain'> ⛰️ </span>
          <span role='img' aria-label='Colombian Flag'> 🇨🇴</span> To:
          <span role='img' aria-label='Statue of Liberty'>🗽</span> 
          <span role='img' aria-label='USA Flag'> 🇺🇸</span> for The: 
          <span role='img' aria-label='Milky Way'>🌌</span> 

        </p>

        <p>Fellow at Coalition for Queens (C4Q) Aspiring Full-Stack Web Developer </p>
        <div className="ui horizontal list">
          <div className="item">
            <a className="icon-link" href="https://github.com/alejo4373">
              <i className="github icon"></i>
            </a>
            <a className="icon-link" href="mailto:alejandrofranco@ac.c4q.nyc">
              <i className="mail icon"></i>
            </a>
            <a className="icon-link" href="https://www.linkedin.com/in/alejandro-franco-525035152/">
              <i className="linkedin square icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
