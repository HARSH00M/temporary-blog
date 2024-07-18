import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="px-4 py-32 bg-black mx-auto flex flex-col items-center">
      <div className="text-white text-center">
        <h1 className="text-4xl lg:text-7xl lg:leading-snug font-bold mb-5">
          Welcome to Our Blog
        </h1>
        <p className="lg:text-2xl lg:mx-24 font-medium">
          Dive into a captivating realm of thought-provoking articles, engaging
          stories, and insightful perspectives. Cramitt
          <span className="text-indigo-400 font-bold">.in</span> is not just a
          platform; it's a community of passionate writers and avid readers who
          come together to share, learn, and inspire.
        </p>
      </div>
      <br />
      <Link
        to={"/blog"}
        className="cursor-pointer inline-flex gap-3 items-center text-lg px-3 py-2 font-bold lg:text-2xl text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-sm hover:from-indigo-600 hover:to-purple-600 lg:hover:scale-105 duration-150 ease-in"
      >
        <span>Learn More</span>{" "}
        <FaArrowRight className="lg:text-lg" />
      </Link>
      <div className="mt-8 bg-violet-500 py-8 rounded-md text-white text-center">
        <h2 className="text-3xl font-bold mb-4">New Section</h2>
        <p className="lg:text-2xl lg:mx-24 font-medium">
        The revolution sparked by Artificial Intelligence (AI) is reshaping industries, societies, and our understanding of technology at an unprecedented pace. AI, once confined to the realms of science fiction, has evolved into a transformative force driving innovation across various domains.

At its core, AI enables machines to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making. This capability has propelled advancements in automation, data analysis, and predictive modeling, revolutionizing industries ranging from healthcare and finance to transportation and entertainment.


        </p>
      </div>
    </div>
  );
}
