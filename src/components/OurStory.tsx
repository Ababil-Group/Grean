import Image from "next/image";

const OurStory = () => {
  return (
    <section
      id="our_story"
      className="space-y-[50px] pb-[50px] pt-[100px] text-center lg:text-right"
    >
      <div className="container space-y-8">
        <h2 className="text-4xl font-bold text-primary">OUR JOURNEY</h2>
        <div className="space-y-4">
          <h6 className="font-bold text-primary">OUR HISTORY</h6>
          <p className="leading-8 text-primary">
            Grean was founded in 2014, and from the outset, the business
            experienced rapid growth. Initially, we managed data processing
            through intricate digital spreadsheets, but as our operations
            expanded, it became evident that our existing systems were no longer
            sufficient. To continue meeting the needs of our growing customer
            base, we recognized the necessity of developing a tailored software
            solution.
          </p>
          <p className="leading-8 text-primary">
            In early 2018, Grean teamed up with Solution Server to create a
            custom application designed specifically for our business. The
            success of this partnership led to Solution Server merging with
            Grean in June 2020, which significantly enhanced our technological
            capabilities.
          </p>
          <h6 className="font-bold uppercase text-primary">
            Our Current Position
          </h6>
          <p className="leading-8 text-primary">
            Currently, we are fortunate to have an in-house team of software
            developers who not only cater to our ongoing needs but also focus on
            pioneering cutting-edge technological solutions for our clients.
          </p>
          <p className="leading-8 text-primary">
            Grean stands at the forefront of our industry, both locally and
            globally, thanks to our specialized knowledge and expertise.
            We&apos;ve cultivated a broad network of agricultural experts and
            are steadfast advocates for farmers, while simultaneously growing
            our own impact and footprint within the industry.
          </p>
          <h6 className="font-bold uppercase text-primary">
            Our Upcoming Journey
          </h6>
          <p className="leading-8 text-primary">
            Regardless of what the future holds, we are dedicated to the
            principles and vision that have propelled Grean to the forefront of
            the industry. We will stay focused on advancing research,
            encouraging new ideas, and simplifying complex data into valuable,
            easy-to-understand insights for the people who rely on it most—our
            farmers. Agriculture Related Images.
          </p>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-center gap-[80px] lg:flex-row">
        <div className="relative min-h-[320px] w-full">
          <Image
            className="object-cover object-center"
            src="/images/3.jpg"
            alt="Our Story"
            fill
          />
        </div>
        <div className="relative min-h-[320px] w-full">
          <Image
            className="object-cover object-center"
            src="/images/photoss.jpg"
            alt="Our Story"
            fill
          />
        </div>
        <div className="relative min-h-[320px] w-full">
          <Image
            className="object-cover object-center"
            src="/images/4.jpg"
            alt="Our Story"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
