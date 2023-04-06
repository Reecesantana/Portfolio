import type { NextPage } from "next";
import Head from "next/head";
import Project from "./components/ProjectCard";

const Home: NextPage = () => {

  
  return (
    <>
      <Head>
        <title>Reece Santana</title>
        <meta
          name="description"
          content="Reece Santana React Typescript next js"
        />
        <link rel="icon" href="profile.gif" />
      </Head>
      <main className="mx-auto flex flex-col items-center text-neutral-700 bg-gradient-to-b from-neutral-100 via-neutral-100 to-emerald-200">
        <div className="mx-auto flex flex-col items-center w-max-content clear-both">
        <img
          className="mt-16 w-48 rounded-full hover:shadow-2xl translate-y-2 hover:translate-y-0 transition-all ease-in-out duration-500 hover:scale-105"
          src="profile.jpg"
          alt="Profile Picture"
        />
        <div className="top-0 flex h-64 w-screen flex-col items-center p-8 text-6xl text-emerald-800">
          <h1 className="mx-auto justify-center text-center hover:text-emerald-600">Reece Santana</h1>
        </div>
        </div>
        <div>
          <p className="container p-4 pb-20 text-3xl">
          "Hi, my name is Reece. I am a software engineer with a unique background. I began my career as a sushi chef, honing my skills and learning the importance of precision and attention to detail. However, I always had a passion for technology and decided to make a career change, diving into the world of software development. I am skilled in using various programming languages and frameworks such as TypeScript, Next.js, React, Python and have dabbled with many others. I am a team player and always eager to learn new technologies and techniques. With my diverse background and skills, I try to bring a fresh perspective to any project I work on."
          </p>
        </div>
        <div className="container grid grid-cols-1 gap-x-9 gap-y-20 pb-20 lg:grid-cols-2" >
          <Project
            title="Hex A Guess"
            photo="Hex A Guess.png"
            description="This is just a quick little fun game to help learn about Hex colors and how they work! If you want to try it out click on the image above"
            url="https://github.com/Reecesantana/hexgame.git"
            link="guessAHex"
          />
          <Project
            title="Blabber"
            photo="example.jpeg"
            description="This is a social media clone that implements tools like trpc, nextjs and tailwind to set up easy to build on projects with features server side rendering."
            url="https://github.com/Reecesantana/blabber"
            link="https://blabbert3.vercel.app/"
          />
          <Project
            title="Example"
            photo="example.jpeg"
            description="This is a test look at this paragraph should be about only 2-3 sentances. wow very cool!"
            url="google.com"
            link=""
          />
          <Project
            title="Example"
            photo="example.jpeg"
            description="This is a test look at this paragraph should be about only 2-3 sentances. wow very cool!"
            url="google.com"
            link=""
          />
        </div>
        <div className=" bg-neutral-50 border-emerald-900 rounded-xl border p-5 w-11/12 sm:w-5/12  hover:shadow-2xl translate-y-2 hover:translate-y-0 transition-all ease-in-out duration-500 hover:scale-105 mb-36 mt-10 focus-within:shadow-2xl focus-within:translate-y-0 focus-within:scale-105 ">
    <h2 className="text-center text-emerald-600 pb-5 font-bold text-3xl">Contact Me</h2>
    <form action="/send-data-here" method="post" className="flex flex-col gap-5 justify-center items-center">
    <span className="bg-emerald-800 hover:bg-emerald-600 rounded-full p-3 text-neutral-50 grid-cols-4 grid w-full translate-y-3 transition ease-in-out duration-300 focus-within:shadow-2xl focus-within:translate-y-0 focus-within:scale-105 focus-within:bg-emerald-600"><label>Name: </label>
  <input type="text" id="first" name="first" className="rounded-full text-neutral-700 px-3 col-span-3"/></span>
  <span className="bg-emerald-800 hover:bg-emerald-600 rounded-full p-3 text-neutral-50 grid-cols-4 grid w-full translate-y-3 transition ease-in-out duration-300 focus-within:shadow-2xl focus-within:translate-y-0 focus-within:scale-105 focus-within:bg-emerald-600"><label>E-mail: </label>
  <input type="email" id="last" name="last" className="rounded-full text-neutral-700 px-3 col-span-3" /></span>
  <span className="bg-emerald-800 hover:bg-emerald-600 rounded-full p-3 text-neutral-50 grid-cols-4 grid w-full translate-y-3 transition ease-in-out duration-300 focus-within:shadow-2xl focus-within:translate-y-0 focus-within:scale-105 focus-within:bg-emerald-600"><label>Phone: </label>
  <input type="email" id="last" name="last" className="rounded-full text-neutral-700 px-3 col-span-3" /></span>
  <span className="bg-emerald-800 hover:bg-emerald-600 rounded-2xl p-3 text-neutral-50 w-full flex-col flex text-center translate-y-3 transition ease-in-out duration-300 focus-within:shadow-2xl focus-within:translate-y-0 focus-within:scale-105 focus-within:bg-emerald-600"><label>Let me know a little about you and your company/software/project? </label>
  <textarea className="rounded-xl text-neutral-700 px-3" maxLength={360} rows={6}/></span>
  <button className="bg-emerald-800 hover:bg-emerald-600 rounded-full py-3 w-1/2 text-neutral-50 hover:shadow-2xl translate-y-2 hover:translate-y-0 transition-all ease-in-out duration-500 hover:scale-105 focus-within:shadow-2xl focus-within:translate-y-0 focus-within:scale-105 focus-within:bg-emerald-600" type="submit">Submit</button>
</form>

        </div>
        
      </main>
    </>
  );
};

export default Home;
