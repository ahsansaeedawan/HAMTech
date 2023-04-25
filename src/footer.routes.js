// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoHAMBlack from "assets/images/HAM-logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "HAM Information Technology",
    image: logoHAMBlack,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "#",
    },
    {
      icon: <TwitterIcon />,
      link: "#",
    },
    {
      icon: <GitHubIcon />,
      link: "#",
    },
    {
      icon: <YouTubeIcon />,
      link: "#",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        {
          name: "H A M Information Technology",
          href: "www.haminformationtechnology.com",
        },
        {
          name: "Office No.1303, Bayswater Tower By Ominyat, Bussiness Bay, Dubai U.A.E",
          href: "https://maps.app.goo.gl/HrV9EHMhnZfELATv8?g_st=iwb",
        },
        {
          name: "P.O Box # 90951",
          href: "https://www.creative-tim.com/templates/free",
        },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "Tel# +971 4 388 6011", href: "#" },
        {
          name: "Info@haminformationtechnology.com",
          href: "#",
        },
        {
          name: "www.haminformationtechnology.com",
          href: "www.haminformationtechnology.com",
        },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "#" },
        { name: "privacy policy", href: "#" },
        { name: "licenses (EULA)", href: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} H A M Information Technology
    </MKTypography>
  ),
};
