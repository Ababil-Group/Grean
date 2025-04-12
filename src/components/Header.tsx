"use client";

import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "#why_Grean", label: "WHY Grean" },
    { href: "#our_story", label: "OUR JOURNEY" },
    { href: "#product", label: "OUR PRODUCT" },
    { href: "#services", label: "OUR SOLUTIONS" },
    { href: "#about_us", label: "ABOUT US" },
    { href: "#our_values", label: "OUR PRINCIPLES" },
    { href: "#studio", label: "THE WORKSHOP" },
    { href: "#contact", label: "CONTACT" },
  ];

  const handleNavClick = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      setIsOpen(false); // Close the drawer
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300); // Add a small delay to ensure the drawer is closed first
    }
  };

  const renderNavLinks = () =>
    navLinks.map(({ href, label }) => (
      <li key={href}>
        <button
          onClick={() => handleNavClick(href)}
          className={`border-2 px-3 py-2 duration-200 ${
            activeSection === href.substring(1)
              ? "border-primary text-primary"
              : "border-white hover:border-primary"
          }`}
        >
          {label}
        </button>
      </li>
    ));

  return (
    <header className="sticky top-0 z-50 bg-white py-2 shadow-sm">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Image
            className="h-auto w-[65px]"
            src="/logo.png"
            alt="Logo"
            width={65}
            height={65}
          />
        </Link>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <GiHamburgerMenu className="text-2xl lg:hidden" />
          </SheetTrigger>
          <SheetContent className="bg-white" side="left">
            <Image src="/logo.png" alt="Logo" height={65} width={65} />
            <ul className="mt-10 flex flex-col items-start justify-start gap-5 text-sm font-semibold text-primary">
              {renderNavLinks()}
            </ul>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <ul className="hidden items-center justify-end gap-2 text-xs font-semibold text-primary lg:flex">
          {renderNavLinks()}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
