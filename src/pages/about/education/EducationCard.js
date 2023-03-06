export default function EducationCard({ header, time, school, major }) {
  return (
    <div className="w-full h-1/2 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span
          className="absolute w-5 h-5 rounded-full -top-2 -left-3
          flex justify-center items-center bg-black bg-opacity-60"
        >
          <span
            className="w-3 h-3 rounded-full bg-bodyColor inline-flex
            group-hover:bg-designColor duration-300"
          ></span>
        </span>
      </div>
      <div
        className="w-full bg-black bg-opacity-20 hover:bg-opacity-30
        duration-300 rounded-lg px-10 flex flex-col gap-10 shadow-shadowOne"
      >
        <div
          className=" largerTablet:flex largerLaptop:px-10 
          largerTablet:justify-between largerTablet:items-center py-4"
        >
          <div>
            <h2
              className="text-xl largerTablet:text-3xl font-bold mt-5
               group-hover:text-textColor duration-300"
            >
              {header}
            </h2>
            <p className="text-sm largerTablet:text-lg mt-6">{school}</p>
            <p className="text-sm largerTablet:text-lg mt-6 mb-6">{major}</p>
          </div>
          <div>
            <h3
              className="px-4 py-2 text-designColor bg-black 
              bg-opacity-25 rounded-lg flex justify-center items-center
              shadow-shadowOne text-sm largerTablet:text-md 
              smallerTablet:font-medium font-bold"
            >
              {time}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
