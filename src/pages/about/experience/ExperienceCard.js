export default function ExperienceCard({
  company,
  description,
  title,
  roleOne,
  roleTwo,
  roleThree,
  roleFour,
  time,
}) {
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
        duration-300 rounded-lg px-6 flex flex-col gap-10 shadow-shadowOne"
      >
        <div
          className="py-4 largerTablet:flex largerTablet:justify-between 
        largerTablet:items-center largerLaptop:px-10"
        >
          <div>
            <h2
              className=" text-xl smallerTablet:text-3xl font-bold mt-5
               group-hover:text-textColor duration-300"
            >
              {company}
            </h2>

            <p className="text-sm largerTablet:text-lg mt-3">{description}</p>
            <p className="text-sm largerTablet:text-lg mt-4 ">{`Postion: ${title}`}</p>
            <h4 className="mt-4 text-md largerTablet:text-xl font-bold">
              Key Responsibities:
            </h4>
            <p className="text-sm largerTablet:text-lg mt-4 ">{roleOne}</p>
            <p className="text-sm largerTablet:text-lg mt-4 ">{roleTwo}</p>
            <p className="text-sm largerTablet:text-lg mt-4 ">{roleThree}</p>
            <p className="text-sm largerTablet:text-lg mt-4 mb-4">{roleFour}</p>
          </div>
          <div>
            <h3
              className="w-60 h-12 text-designColor bg-black 
              bg-opacity-25 rounded-lg flex justify-center items-center
              shadow-shadowOne text-md font-medium "
            >
              {time}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
