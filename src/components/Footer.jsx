import Socials from "../components/Socials";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-around  bg-gradient-to-tl from-accent to-primary text-white items-center  p-4">
      <span>
        &copy; {new Date().getFullYear()} Abisam Roofing Systems. All rights
        reserved.
      </span>
      <Socials />
    </footer>
  );
};

export default Footer;
