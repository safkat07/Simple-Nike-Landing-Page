import { footerLinks, socialMedia } from "../Constants/map";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="max-conatiner">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">
            Get Shoes ready for the new term at your nearest Nike store. Find
            Your Perfect Size in the Store. Gdet Reward.
          </p>
          <div className="flex items-center gap-5 mt-8   ">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12  bg-white rounded-full"
                key={icon.src}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
          <div>
            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map((section) => (
                <div key={section}>
                  <h4 className="text-white font-montserrat text-2xl leading-normal mt-3 font-medium mb-6">
                    {section.title}
                  </h4>
                  <ul>
                    {section.links.map((link) => (
                      <li
                        className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                        key={link.name}
                      >
                        <a> {link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-white mt-24 max-sm:flex-col max-sm:items-center justify-between">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer"> 
        <img src={copyrightSign} alt="copy wight" width={20} height={20} className="rounded-full m-0" />
        <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
