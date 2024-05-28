import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { NextResponse } from 'next/server';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;

export async function POST(req) {

  const {messages} = await req.json();

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

  messages.unshift({
    role: 'system',
    content: `You are PortfolioGPT, answering only questions based on the resume provided.
Resume:
${DATA_RESUME}

Help users learn more about Tyler from his resume.
`
});

  

  const response = await client.getChatCompletions(model, messages, {
    maxTokens: 128,
  });

  return NextResponse.json({
    message: response.choices[0].message.content
  });
}

const DATA_RESUME = `
Tyler J. Schwartz
Bridgewater, NJ | 908.800.1487 | schwartz.2317@osu.edu | linkedin.com/in/TylerSchwartz2027

The Ohio State University, Fisher College of Business
Columbus, OH
Bachelor of Science in Business Administration in Finance with Honors Distinction
Expected: May 2027
Minors: Engineering Sciences, Mathematics
GPA: 3.8
Integrated Business and Engineering Honors Program: Four-year honors program with 36 business students selected per year, emphasizing interdisciplinary communication, critical thinking, problem solving, product development, corporate strategy, and teamwork through specialized undergraduate and MBA courses

WORK EXPERIENCE
Peapack-Gladstone Bank
Bedminster, NJ
Incoming Platinum Service Team Intern
Anticipated Start Date: June 2024
Will achieve fluency in operating the banks internal systems, as well as support clients and their banking needs, as they relate to account opening, maintenance, and correspondence
Will support high-net-worth clients and their companies by delivering exceptional white glove service
Will prepare and present executive reports, as well as review departmental reports to verify accuracy and completeness

LvlUp Ventures
Bridgewater, NJ
Venture Scout
May 2024 - Present
Source high-quality global startup deals in collaboration with partners like ExpertDojo and Capchase
Contribute to portfolio growth by identifying promising ventures, earning equity compensation for successful investments
Engage in an active entrepreneurial community, leveraging partnerships for exclusive deal-flow and co-investment opportunities

LEADERSHIP AND INVOLVEMENT
Limb Different Engineering Project
Columbus, OH
Chief Financial Officer
February 2024 - Present
Help lead a cross-functional team to create a portable, stable shower chair design, addressing challenges for individuals with lower limb differences while showering
Oversee user-driven design and financial modeling for an innovative shower aid prototype
Pitch prototype to a panel of judges from respected companies, showcasing its unique features and market viability

Climate Risk Research
Columbus, OH
Undergraduate Research Assistant
January 2024 - Present
Collaborate in a team effort to categorize and assess climate-related financial disclosures, comparing reported risks to actual climate change scenarios, investigating accuracy of the disclosures
Utilize Python programming skills, like time series plotting, to measure and evaluate carbon footprints of companies
Help with in-depth analysis of climate risk quantification for companies using varying datasets like the CDP dataset

Quantitative Finance Club
Columbus, OH
Member
September 2023 - Present
Engage in a quantitative finance community with 15 students, helping lead discussions on real-world scenarios
Explore fundamental aspects of the field, including statistical modeling and mock technical interviews
Contribute to learning experiences involving Python integration with algorithmic trading strategies

Projects
Stock Screener App
Columbus, OH
Developer | Python
February 2024 - Present
Developed a Python application utilizing the yfinance library to analyze stock performance and identify potential high growth opportunities
Leveraged web scraping techniques to extract stock symbols and the stock's qualities from Yahoo Finance's 'Gainers' list
Utilized Streamlit library to create responsive stock analysis dashboard, featuring dynamic data visualization

Buckeye Bird
Columbus, OH
Developer | C/C++
November 2023 - December 2023
Developed a Flappy Bird-inspired game using C/C++ for a Proteus microcontroller, leveraging Ohio State's Proteus library
Created a captivating website to showcase 'Buckeye Bird', effectively presenting its features and market potential
Successfully pitched the game to potential investors, demonstrating a strong combination of technical and marketing skills

SKILLS & INTERESTS
Skills: HTML, CSS, Python, MATLAB, C, C++, Onshape, Microsoft Excel | CPR Certified
Interests: Anime, Golf, Led Zeppelin, Lifting, Manchester United, New York Mets
`;


