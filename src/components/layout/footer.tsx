import { SOCIAL_MEDIA_LINKS } from './constants';

const SiteFooter = () => {
  return (
    <footer id="footer" className="bg-brand text-white w-full py-4 px-6 shadow-md">
      <div className="flex items-center gap-2 sm:gap-6 flex-col sm:flex-row sm:justify-between text-sm">
        <p className="text-center text-sm md:text-md">
          &copy; {new Date().getFullYear()} Insurtechit. All rights reserved
        </p>
        <ul className="space-x-6 flex items-center">
          {SOCIAL_MEDIA_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <div
                key={link.name}
                className="rounded-full p-1 backdrop-blur-[2px] bg-[#DFEFFE]/15 text-white"
              >
                <a href={link.link} target="_blank">
                  <Icon />
                </a>
              </div>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default SiteFooter;
