import multUsers from "../public/multUsers.png";
import matches from "../public/user-check-01.png";
import msg from "../public/msg2.png";
import view from "../public/eye.png";

export const homeLinks = [
  {
    url: "/",
    label: "Job preview",
  },
  {
    url: "#",
    label: "Applicants",
  },
  {
    url: "#",
    label: "Match",
  },
  {
    url: "#",
    label: "Messages",
  },
];

export const rightSidebar = [
  {
    imgUrl: multUsers,
    label: "Applicants",
    num: 400,
  },
  {
    imgUrl: matches,
    label: "Matches",
    num: 100,
  },
  {
    imgUrl: msg,
    label: "Messages",
    num: 147,
  },
  {
    imgUrl: view,
    label: "Views",
    num: 800,
  },
];
