import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="bg-primary py-[80px]">
      <div className="container flex flex-col items-stretch gap-20 lg:flex-row lg:items-center">
        <div className="basis-full space-y-6 lg:basis-1/2">
          <h2 className="text-4xl font-bold text-white">GET IN TOUCH</h2>

          <form className="w-full space-y-4" action="">
            <Input type="text" placeholder="Full Name" required />
            <Input type="email" placeholder="Email Address" required />
            <Textarea placeholder="Message" rows={5} required />
            <button
              className="rounded-lg bg-secondary px-4 py-2 text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="basis-full space-y-3 lg:basis-1/2">
          <p className="text-lg font-bold text-white">General enquiries</p>
          <p className="text-sm text-white">info@grean.farm</p>
          <p className="text-lg font-bold text-white">Physical Address</p>

          <p className="text-sm text-white">
            <Link
              href="https://maps.app.goo.gl/K6e1immii9tGULjB7"
              target="_blank"
            >
              1 Côte de la Forge, 23100 Saint-Oradoux-de-Chirouze, France.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
