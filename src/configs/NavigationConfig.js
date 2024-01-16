import {
  DashboardOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";


const dashBoardNavTree = [
  {
    key: "dashboards",
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: "sidenav.dashboard",
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    //submenu:menu_items,
    submenu: [
      {
        "key": "dashboards-default",
        "path": "/dashboards/default",
        "title": "Dashboard",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
      {
        "key": "dashboards-question1",
        "path": "/dashboards/question_1",
        "title": "Question 1",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
      {
        "key": "dashboards-question2",
        "path": "/dashboards/question_2",
        "title": "Question 2",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
      {
        "key": "dashboards-question3",
        "path": "/dashboards/question_3",
        "title": "Question 3",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
      {
        "key": "dashboards-question4",
        "path": "/dashboards/question_4",
        "title": "Question 4",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
      {
        "key": "dashboards-question5",
        "path": "/dashboards/question_5",
        "title": "Question 5",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
      {
        "key": "dashboards-question6",
        "path": "/dashboards/question_6",
        "title": "Question 6",
        "icon": "DashboardOutlined",
        "breadcrumb": false,
        "submenu": []
      },
    ]
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
