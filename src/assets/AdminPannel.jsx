import { TbTransitionRightFilled } from "react-icons/tb";
import { CgInsights } from "react-icons/cg";
import { TbReportAnalytics } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";

export const feature = [
  {
    id: "deshboard",
    lable: "Deshboard",
    path: "/admin/deskboard",
    icon: <LuLayoutDashboard />,
  },
  {
    id: "transition",
    lable: "Transition",
    path: "/admin/transition",
    icon: <TbTransitionRightFilled />,
  },
  {
    id: "inshight",
    lable: "Insights",
    path: "/admin/insights",
    icon: <CgInsights />,
  },
  {
    id: "report",
    lable: "Report",
    path: "/admin/report",
    icon: <TbReportAnalytics />,
  },
];

export const Userfeature = [
  {
    id: "deshboard",
    lable: "Deshboard",
    path: "/user/deskboard",
    icon: <LuLayoutDashboard />,
  },
  {
    id: "transition",
    lable: "Transition",
    path: "/user/transition",
    icon: <TbTransitionRightFilled />,
  },
  {
    id: "inshight",
    lable: "Insights",
    path: "/user/insights",
    icon: <CgInsights />,
  },
  {
    id: "report",
    lable: "Report",
    path: "/user/report",
    icon: <TbReportAnalytics />,
  },
];
