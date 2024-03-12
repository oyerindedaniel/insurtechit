import Link from "next/link";
import { cn } from "@/lib/utils";

const SiteFooter = () => {
  return (
    <footer className="bg-white w-full py-3 px-6 shadow-md">
      <div className="flex items-center justify-between text-[#979797] text-sm">
        <p className="text-center text-sm md:text-md">
          &copy; {new Date().getFullYear()} Insurtechit. All rights reserved
        </p>
        <ul className="space-x-10 flex items-center">
          {[
            { name: "About us", link: "/about-us" },
            { name: "Contact us", link: "/contact" },
          ].map((item, index) => (
            <li key={index} className={cn("cursor-pointer")}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default SiteFooter;
