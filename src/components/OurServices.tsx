import { ImLab } from "react-icons/im";
import { FaLeaf } from "react-icons/fa";
import { FaWater } from "react-icons/fa";
import { MdSatelliteAlt } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

const OurServices = () => {
  return (
    <section id="services" className="py-[80px]">
      <div className="container">
        <h2 className="mx-auto pb-1 text-center text-4xl font-semibold italic text-primary">
          Our Solutions
        </h2>

        <div className="h-1 w-24 mx-auto bg-primary mt-2 rounded-full"></div>

        <div className="mt-20 flex flex-wrap justify-center gap-20">
          {/* CARD  */}
          <div className="flex max-w-[375px] flex-col items-center justify-start gap-3">
            <ImLab className="text-5xl text-primary" />
            <h5 className="text-center text-xl font-semibold italic text-secondary">
              High-Precision Soil Nutrient Mapping{" "}
            </h5>
            <h5 className="text-center text-xl font-semibold italic text-secondary">
              ...
            </h5>
            <p className="text-center leading-8 text-primary">
              Far surpassing standard market offerings, we provide farmers with
              a detailed and insightful analysis of their land. Accompanied by a
              comprehensive set of prescription charts, our reports are crafted
              to be straightforward and easy to interpret, empowering farmers
              with a clear understanding of their soil and its unique needs.
            </p>
          </div>
          {/* CARD  */}
          <div className="flex max-w-[375px] flex-col items-center justify-start gap-3">
            <FaLeaf className="text-5xl text-primary" />
            <h5 className="text-center text-xl font-semibold italic text-secondary">
              Foliar Assessment
            </h5>
            <h5 className="text-center text-xl font-semibold italic text-secondary">
              ...
            </h5>
            <p className="text-center leading-8 text-primary">
              A detailed interpretation of leaf analysis empowers farmers to
              effectively oversee and regulate the nutrient balance of their
              plants, ensuring optimal growth and health.
            </p>
          </div>
          {/* CARD  */}
          <div className="flex max-w-[375px] flex-col items-center justify-start gap-3">
            <FaWater className="text-5xl text-primary" />
            <h5 className="text-center text-xl font-semibold italic text-secondary">
              Soil Structure Mapping
            </h5>
            <h5 className="text-center text-xl font-semibold italic text-secondary">
              ...
            </h5>
            <p className="text-center leading-8 text-primary">
              We provide precise, high-resolution soil mapping charts that are
              essential for evaluating plant potential, optimizing planting
              strategies, and designing efficient drainage systems.
            </p>
          </div>
          {/* CARD  */}
          <div className="flex max-w-[375px] flex-col items-center justify-start gap-3">
            <MdSatelliteAlt className="text-5xl text-primary" />
            <h5 className="text-center text-xl font-semibold italic text-secondary">
              Aerial Satellite Analysis
            </h5>
            <h5 className="text-center text-xl font-semibold italic text-secondary">
              ...
            </h5>
            <p className="text-center leading-8 text-primary">
              We regularly update the satellite imagery, ensuring that the most
              current data is available to assist with continuous planning and
              production activities.
            </p>
          </div>
          {/* CARD  */}
          <div className="flex max-w-[375px] flex-col items-center justify-start gap-3">
            <FaMobileAlt className="text-5xl text-primary" />
            <h5 className="text-center text-xl font-semibold italic text-secondary">
              Mobile Platform
            </h5>
            <h5 className="text-center text-xl font-semibold italic text-secondary">
              ...
            </h5>
            <p className="text-center leading-8 text-primary">
              Our mobile platform enhances accessibility to vital information,
              presenting data in a clear and user-friendly format that&apos;s
              optimized for mobile devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
