import LoginPage from "./Component/LoginComponent/LoginPage"
import Appointment from "./Component/Views/Appointment/Appointment"
import Doctors from "./Component/Views/Doctors/Doctors"
import MainDashboard from "./Component/Views/MainDashboard/MainDashboard"
import Patients from "./Component/Views/Patients/Patients"
import Taskboard from "./Component/Views/Taskboard/Taskboard"
import {GoHome} from 'react-icons/go'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {BsCalendar3,BsListTask} from 'react-icons/bs'
export const RouterData=[
    {
        path:"/",
        component:<LoginPage/>,
        layout:"/"
    },
    {
        name:"Dashbaord",
        path:"/maindashboard",
        component:<MainDashboard/>,
        submenu:false,
        layout:"/dashboard",
        key:"sub1",
        icon:<GoHome/>
    },
    {
        name:"Appointment",
        path:"/appointment",
        component:<Appointment/>,
        submenu:false,
        layout:"/dashboard",
        key:"sub2",
        icon:<BsCalendar3/>
    },
    {
        name:"Taskboard",
        path:"/taskboard",
        component:<Taskboard/>,
        submenu:false,
        layout:"/dashboard",
        key:"sub3",
        icon:<BsListTask/>
    },
    {
        name:"Doctors",
        path:"/doctors",
        component:<Doctors/>,
        layout:"/dashboard",
        submenu:true,
        key:"sub4",
        icon:<AiOutlineUserAdd/>,
        menuItems:[      
                {
                  path: "/AddDoctors",
                  name: "Add Doctor",
                  layout: "/dashboard",
                  icon: <AiOutlineUserAdd/>,
                  visibleInMenu: true,
                  secondSubmenu: false,
                  key: "sub-add",
                  component: <Doctors/>,
                },
            ]
    },
    {
        name:"Patients",
        path:"/patients",
        component:<Patients/>,
        layout:"/dashboard",
        key:"sub5",
        icon:<AiOutlineUserAdd/>
    }
]
