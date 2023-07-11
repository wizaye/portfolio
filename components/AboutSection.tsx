import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "R" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Java" },
  { skill: "SQL" },
  { skill: "Next.js" },
  { skill: "Flask" },
  { skill: "Tailwind CSS" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-indigo-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Vijayendher Gatla and I am from {" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              Hyderabad,India.
            </p>
            <br />
            <p>
              I'm currently pursuing my sophomore year at Chaitanya Bharathi Institute Of Technology, Hyderabad 
              with a BE in Artificial Intelligence and Data Science.
            </p>
            <br />
            <p>
              I have a whole lot a list of hobbies.
              From reading, wrtiting , coding , to making YouTube content , Music Production and Video Editing ,
              I am always seeking new challenges and love to collaborate with people in technology.
            </p>
            <br />
            <p>
            Because I am passionate about technology and want to constantly push the boundaries of what is possible, I feel that you should{" "}
              <span className="font-bold text-indigo-500">
                never stop growing
              </span>{" "}
              I'm eager to follow my career wherever it may lead, and I'm always interested in new prospects. 
              🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-boy.png"
              alt=""
              width={325}
              height={325}
              style={{padding:10,margin:30}}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
