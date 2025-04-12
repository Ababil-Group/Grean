import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-[80vh] bg-black bg-opacity-50 bg-hero-bg bg-cover bg-center bg-no-repeat py-[100px] text-white">
      <div className="container flex h-full flex-col items-center justify-center gap-5">
        <div className="relative min-h-[300px] w-full">
          <Image
            className="object-contain object-center"
            src="/Logo@4x.png"
            alt="Logo"
            fill
          />
        </div>
        <h3 className="text-center text-2xl italic">
          Towards a Sustainable Future
        </h3>
        <h5 className="text-center text-2xl">
          We provide farmers with impartial guidance to support sustainable
          farming practices and reduce potential risks. Our approach is rooted
          in sustainability, science, and accessibility, ensuring that advice is
          clear, easy to follow, and environmentally conscious. We focus on
          empowering farmers to make informed decisions without the pressure of
          product sales.
        </h5>
      </div>
    </section>
  );
};

export default Hero;
