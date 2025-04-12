import Image from "next/image";

// added commit

const Why = () => {
  return (
    <section id="why_Grean" className="flex flex-col lg:flex-row">
      <div className="basis-full space-y-8 bg-[#E6E6E5] p-8 lg:basis-1/2 lg:p-[80px]">
        <h2 className="text-4xl font-bold text-primary">WHY Grean?</h2>
        <div className="space-y-4">
          <p className="text-primary">
            At Grean, we believe that agriculture is rooted in science, and we
            apply that knowledge to enhance and align with your unique farming
            practices. Too often, the industry leads us to believe that packaged
            solutions are the answer to every agricultural challenge. However,
            we focus on the fundamentals: improving the health of the soil.
          </p>
          <p className="font-bold text-primary">
            Grean is dedicated to supporting farmers.
          </p>
          <p className="text-primary">
            We deeply understand agricultural science, and when we talk about
            science, we mean the soil.
          </p>
          <p className="text-primary">
            Plants don&apos;t need synthetic chemicals to thrive; they require
            healthy, fertile soil. Through a thorough process of soil testing
            and data collection, Grean removes uncertainty from natural growth.
            We maximize soil fertility while reducing farming risks. Working
            closely with farmers, we support them every step of the way through
            our user-friendly mobile platform.
          </p>
          <p className="text-primary">
            In essence, Grean ensures that the soil in which you plant, nurture,
            and harvest is sustainable, natural, and healthy—leading to better
            crops and a brighter future. Farming Related Image
          </p>
        </div>
      </div>
      <div className="relative min-h-full w-full basis-full lg:basis-1/2">
        <Image className="object-cover" src="/images/2.jpg" alt="Why" fill />
      </div>
    </section>
  );
};

export default Why;
