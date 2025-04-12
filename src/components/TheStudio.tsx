import Image from "next/image";

const TheStudio = () => {
  return (
    <section id="studio" className="flex min-h-[600px] flex-col lg:flex-row">
      <div className="relative min-h-full w-full basis-full lg:basis-1/2">
        <Image
          className="object-cover"
          src="/images/The Studio.jpg"
          alt="Why"
          fill
        />
      </div>
      <div className="flex min-h-full basis-full flex-col items-start justify-center space-y-8 bg-[#E6E6E5] p-8 lg:basis-1/2 lg:p-[80px]">
        <h2 className="max-w-[250px] border-b-2 border-primary pb-1 text-center text-4xl font-semibold italic text-primary lg:mr-auto">
          Our Workshop
        </h2>
        <div className="space-y-4">
          <p className="text-primary">
            At Grean, our wealth of experience and forward-thinking approach
            distinguish us in the industry. With more than 11 years of expertise
            in development, our Studio plays a pivotal role in shaping our
            software solutions. By having a dedicated in-house team, we can
            quickly adapt and design customized solutions that address the
            unique needs of farmers. Our Studio thrives on a passion for quality
            craftsmanship and a strong commitment to people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheStudio;
