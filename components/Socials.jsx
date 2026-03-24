import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Liuminedes" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/mauricio-rodriguez-lemos-78a33b268/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/vyntra_orbit/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;