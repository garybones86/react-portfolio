import React from "react";
import boxing from "../assets/portfolio/boxing.png";
import pet from "../assets/portfolio/pet-lyfe.png";
import shill from "../assets/portfolio/shill.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: boxing,
      link: 'https://bug-free-funicular-odew-git-main-dfff.vercel.app/' ,
      repo:  'https://github.com/garybones86/react-portfolio ',
    },
    {
      id: 2,
      src: pet,
      link: 'https://pet-lyfe.netlify.app/' ,
      repo:  'https://github.com/Brandon-Alvarez-03/pet-style-mern',
    },
    {
      id: 3,
      src: shill,
      link: 'https://shill-social.netlify.app/' ,
      repo:  'https://github.com/Brandon-Alvarez-03/pet-style-mern',
    },
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
