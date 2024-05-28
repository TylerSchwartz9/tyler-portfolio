"use client";
import { useState } from 'react';
import Image from "next/image";

export default function Home() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput] = useState('');

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'How can I help you learn more about Tyler and his resume?'
    }
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }];
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch(
      '/api',
      {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({messages: newMessages})
      }
    ).then(res => res.json());
    setMessages([...newMessages, { role: 'system', content: apiMessage.
    message}]);
  }

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <>
       <header>
    <a href="https://www.linkedin.com/in/tylerschwartz2027/" className="logo-holder">
      <div className="logo">My</div>
      <div className="logo-text">Portfolio Website</div>
    </a>
    <nav>
      <ul id="menu" className={menuOpen ? "active" : ""}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="mailto:schwartz.2317@osu.edu" >Contact Me</a>
        </li>
      </ul>
      <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
        </svg>        
      </a>
    </nav>
  </header>
  <main>
    <section className="hero-container">
      <div className="hero-blue">
        <div>
          <h1><small>Hi, I'm</small>
            Tyler Schwartz
          </h1>
          <p>
            I am a rising Sophomore at Ohio State, fully dedicated to my academic journey. My major in Finance and minors in Engineering Sciences and Mathematics, through the IBE honors program, reflect my passion for the intricate world of finance and the challenges of mathematics and engineering. 
            <span>
              Outside of my studies, I'm an avid soccer player and fitness enthusiast. Additionally, I'm a die-hard New York Mets fan, even though it hurts to watch them.
            </span>
          </p>
          <div className="call-to-action">
            <a href="TylerSchwartz - Resume.pdf" className="button black">
              View Resume
            </a>
            <a href="mailto:schwartz.2317@osu.edu" className="button white">
              Contact Me
            </a>
            <div className="social-links">
              <a href="https://github.com/TylerSchwartz9">
                <img src="imgs\github.png" alt="GitHub" width="48" />
              </a>
              <a href="https://www.linkedin.com/in/tylerschwartz2027/">
                <img src="imgs\linkedin.png" alt="LinkedIn" width="48" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-yellow">
        <img src="imgs\picme.png" alt="funny picture" width='100%' />
      </div>
    </section>
    <section className="logos container">
      <div className="marquee">
        <div className="track">
          <img src="imgs\css.png" alt="css" width="128"/>
          <img src="imgs\html.png" alt="html" width="128"/>
          <img src="imgs\javascript.png" alt="js" width="128"/>
          <img src="imgs\python.png" alt="python" width="128"/>
          <img src="imgs\R.png" alt="R" width="128"/>
          <img src="imgs\vscode.png" alt="vs" width="128"/>
          <img src="imgs\c.png" alt="c" width="128"/>
          <img src="imgs\c++.png" alt="c++" width="128"/>
          <img src="imgs\MATLAB.png" alt="MATLAB" width="128"/>
          <img src="imgs\excel.png" alt="excel" width="128"/>
          <img src="imgs\css.png" alt="css" width="128"/>
          <img src="imgs\html.png" alt="html" width="128"/>
          <img src="imgs\javascript.png" alt="js" width="128"/>
          <img src="imgs\python.png" alt="python" width="128"/>
          <img src="imgs\R.png" alt="R" width="128"/>
          <img src="imgs\vscode.png" alt="vs" width="128"/>
          <img src="imgs\c.png" alt="c" width="128"/>
          <img src="imgs\c++.png" alt="c++" width="128"/>
          <img src="imgs\MATLAB.png" alt="MATLAB" width="128"/>
          <img src="imgs\excel.png" alt="excel" width="128"/>
        </div>
      </div>
    </section>
    <section id="skills" className="skills container">
      <h2>
        <small>About Me</small>
        Skills
      </h2>
      <div className="holder-blue">
        <div className="left-column">
          <h3>Proficient Skills</h3>
          <ul>
            <li>Python</li>
            <li>R</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Data Analysis</li>
          </ul>
          <h3>Limited Proficiency</h3>
          <ul>
            <li>JavaScript</li>
            <li>C</li>
            <li>C++</li>
            <li>MATLAB</li>
            <li>Financial Modeling</li>
          </ul>
        </div>
        <div className="right-column">
          <h3>A bit about me</h3>
          <p>Hi, I am Tyler. I am an incoming Sophomore at The Ohio State University, majoring in Finance and minoring in both Engineering Sciences and Mathematics. I am currently seeking an internship in the VC/PE space for next summer.</p>
          <p>I am driven, passionate, and eager to learn. I am always looking to sharpen my skills. If you are aware of any internship opportunities, or just want to connect, please reach out!</p>
          <span>As I am a finance major, this is my first independent project using css, html, and js together. I am always looking for feedback. Please let me know what you think!</span>
        </div>
      </div>
    </section>
    <section className="work-experience container">
      <h2>
        <small>Recent</small>
        Work Experience
      </h2>
      <div className="jobs">
      <article className="article3">
          <figure>
            <div>
              <img className="peapack3" src="imgs/peapack.png" alt="peapack"/>
            </div>
            <figcaption>
              <a href="https://www.pgbank.com/">Peapack-Gladstone</a>
            </figcaption>
          </figure>
          <h3>Wealth Management Intern</h3>
          <div>June 2024 - August 2024</div>
          <p>• Achieve fluency in operating the banks internal systems, as well as support clients and their banking needs, as they relate to account opening, maintenance, and correspondence</p>
          <p>• Support high-net-worth clients and their companies by delivering exceptional white glove service</p>
          <p>• Prepare and present executive reports, as well as review departmental reports to verify accuracy and completeness</p>
        </article>
        <article className="article1">
          <figure>
            <div>
              <img className="lvlup1" src="imgs/lvlup.png" alt="lvlup"/>
            </div>
            <figcaption>
              <a href="https://www.lvlup.vc/">LvlUp Ventures</a>
            </figcaption>
          </figure>
          <h3 >Venture Scout</h3>
            <div>May 2024 - Present</div>
          <p>• Source high-quality global startup deals in collaboration with partners like ExpertDojo and Capchase</p>
          <p>• Contribute to portfolio growth by identifying promising ventures, earning equity compensation for successful investments</p>
          <p>• Engage in an active entrepreneurial community, leveraging partnerships for exclusive deal-flow and co-investment opportunities</p>
        </article>
        <article>
          <figure>
            <div>
              <img className= "ohio2" src="imgs/ohio.png" alt="ohio"/>
            </div>
            <figcaption>
              <a href="https://www.osu.edu/">The Ohio State University</a>
            </figcaption>
          </figure>
          <h3>Undergraduate Research Assistant</h3>
          <div>January 2024 - Present</div>
          <p>• Collaborate in a team effort to categorize and assess climate-related financial disclosures, comparing reported risks to actual climate change scenarios, investigating accuracy of the disclosures</p>
          <p>• Utilize Python programming skills, like time series plotting, to measure and evaluate carbon footprints of companies</p>
          <p>• Help with in-depth analysis of climate risk quantification for companies using varying datasets like the CDP dataset</p>
        </article>
      </div>
    </section>
    <section className="chatbot container">
          <h2>
            <small>
              Talk to me
            </small> 
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>I've put together a chatbot here which knows all my skills, work experience, and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
              <p>You can also download my resume here if you want to take a look at it.  I'm currently looking for new opportunities. If there is anything you think I would find of interest, please reach out!</p>
              <a href="TylerSchwartz - Resume.pdf" className="button black">Download Resume</a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  {messages.map((message, index) => (
                    <li key={index} className={`${message.role}`}>
                      <span className={`avatar`}>{message.role === 'user' ? 'You' : 'AI'}</span>
                      <div className="message">{message.content}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={submitForm} className="chat-message">
                <input type="text" placeholder="Hey Tyler, what skills are you best at?" value={messageInput} onChange={e => setMessageInput(e.target.value)} />
                <button className="button black">Send</button>
              </form>
            </div>
          </div>
        </section>
  </main>
    </>
  );
}
