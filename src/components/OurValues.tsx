import { GiLeafSwirl } from "react-icons/gi";

const OurValues = () => {
  return (
    <section
      id="our_values"
      className="bg-values-bg bg-cover bg-center bg-no-repeat py-[200px] text-white"
    >
      <div className="container flex h-full flex-col items-center justify-center gap-5">
        <h2 className="text-center text-4xl font-bold text-white">
          OUR VALUES
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-20">
          <div className="flex max-w-[375px] flex-col items-center justify-center gap-3">
            <GiLeafSwirl className="text-9xl text-white" />
            <h5 className="text-center text-xl font-semibold uppercase italic text-white">
              Integrity
            </h5>
          </div>
          <div className="flex max-w-[375px] flex-col items-center justify-center gap-3">
            <GiLeafSwirl className="text-9xl text-white" />
            <h5 className="text-center text-xl font-semibold uppercase italic text-white">
              Collaboration
            </h5>
          </div>
          <div className="flex max-w-[375px] flex-col items-center justify-center gap-3">
            <GiLeafSwirl className="text-9xl text-white" />
            <h5 className="text-center text-xl font-semibold uppercase italic text-white">
              Expertise
            </h5>
          </div>
          <div className="flex max-w-[375px] flex-col items-center justify-center gap-3">
            <GiLeafSwirl className="text-9xl text-white" />
            <h5 className="text-center text-xl font-semibold uppercase italic text-white">
              Transparency
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
