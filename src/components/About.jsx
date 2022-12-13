import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-2xl mb-10 ">
        Originally from Jamaica, I arrived here at sixteen to live with my father. My dad, being a first generation immigrant himself served in the military so that he would have the opportunity to apply for my citizenship. Growing up as a military brat, I traveled across the country to many installations and fell in love with the military lifestyle. After high school, I decided to join the army where I specialized in combat medicine. In the army, I had the pleasure of serving in the infantry and being a grunt my entire career. After four years, I decided to switch from active duty to the reserve component after one tour of Afghanistan. I had the pleasure of continuing to serve my country and my community.
        </p>

        <br />

        <p className="text-2xl ">
        I started working in EMS in Atlanta while pursuing my Bachelor of Science in Computer Science. I decided in my last year that I wanted to gain real world experience while rounding out my coding skills. So I attended the General Assembly Software Engineering Immersion program. This was a life-changing experience for me. I had the opportunity to work with other developers to create projects that would solve issues. My journey is far from over. I hope to continue working with companies and developers who are passionate about making an impact.
        </p>
      </div>
    </div>
  );
};

export default About;
