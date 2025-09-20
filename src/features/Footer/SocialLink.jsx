import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter,FaYoutube } from "react-icons/fa";

const socialLinks = [
    {
        icon: <FaFacebook size={16} />,
        url: "#",
        color: "text-[#1877F2]",
        name: "Facebook"
    },
    {
        icon: <FaTwitter size={16} />,
        url: "#",
        color: "text-[#1DA1F2]",
        name: "Twitter"
    },
    {
        icon: <FaInstagram size={16} />,
        url: "#",
        color: "text-[#E4405F]",
        name: "Instagram"
    },
    {
        icon: <FaLinkedin size={16} />,
        url: "#",
        color: "text-[#0A66C2]",
        name: "LinkedIn"
    },
    {
        icon: <FaGithub size={16} />,
        url: "#",
        color: "text-[#333333] dark:text-white",
        name: "GitHub"
    },
    {
        icon: <FaYoutube size={16} />,
        url: "#",
        color: "text-[#FF0000]",
        name: "YouTube"
    },
];

export default socialLinks;