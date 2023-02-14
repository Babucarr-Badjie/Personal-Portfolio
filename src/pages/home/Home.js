import { useTypewriter } from "react-simple-typewriter";
export default function Home() {
  // react typewriter hook
  const [textContent] = useTypewriter({
    words: [
      "Software Engineer 🖥️",
      "Frontend Developer 📱",
      "React Developer ⚛️",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpped: 50,
    delaySpeed: 1500,
  });
  return (
    <section
      id="home"
      className=" flex w-full h-[800px] pt-10 pb-20 
       border-b-[1px] border-b-black"
    >
      <div className="w-1/2">
        <div className="flex flex-col gap-6">
          <h4 className="font-normal text-2xl ">
            Hello there! Welcome to my World.{" "}
          </h4>
          <h1 className="font-normal text-3xl leading-normal">
            I'm{" "}
            <span
              className="uppercase text-designColor 
              tracking-widest italic"
            >
              Babucarr
            </span>{" "}
          </h1>
          <h2 className="text-4xl font-extrabold">
            a <span>{textContent}</span>
          </h2>
          <p className="leading-6 tracking-widest">
            Capable of building applications with frontend operations.
          </p>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
}
