import Link from "next/link";
import FacebookIcon from "/public/images/ic_facebook.svg";
import TwitterIcon from "/public/images/ic_twitter.svg";
import YoutubeIcon from "/public/images/ic_youtube.svg";
import InstagramIcon from "/public/images/ic_insta.svg";

interface IconType {
  name: "facebook" | "twitter" | "youtube" | "instagram";
  href: string;
  icon: React.ReactElement;
}

const SNS_LIST: IconType[] = [
  { name: "facebook", href: "http://www.facebook.com", icon: <FacebookIcon /> },
  { name: "twitter", href: "http://www.twitter.com", icon: <TwitterIcon /> },
  { name: "youtube", href: "http://www.youtube.com", icon: <YoutubeIcon /> },
  {
    name: "instagram",
    href: "http://www.instagram.com",
    icon: <InstagramIcon />,
  },
];

const Footer = () => {
  return (
    <footer className="flex justify-center w-full min-h-[160px] bg-gray-900">
      <div className="grid w-full max-w-[1520px] grid-areas-footer py-[32px] px-[16px] text-[16px] text-white md:flex md:justify-between md:flex-grow-[1] md:px-[108px] xl:px-[200px]">
        <div className="grid-in-copyright mt-[60px] opacity-50 md:mt-0 xl:opacity-100">
          @codeit - 2024
        </div>
        <div className="grid-in-menus flex gap-[30px]">
          <Link href="/privacy" className="text-white">
            Privacy Policy
          </Link>
          <Link href="/faq" className="text-white">
            FAQ
          </Link>
        </div>
        <div className="grid-in-socials flex justify-end gap-[12px] md:justify-start">
          {SNS_LIST.map(({ name, href, icon }) => (
            <Link key={name} href={href}>
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
