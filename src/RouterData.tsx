import LoginPage from "./Component/LoginComponent/LoginPage"
import Appointment from "./Component/Views/Appointment/Appointment"
import Doctors from "./Component/Views/Doctors/Doctors"
import MainDashboard from "./Component/Views/MainDashboard/MainDashboard"
import Patients from "./Component/Views/Patients/Patients"
import Taskboard from "./Component/Views/Taskboard/Taskboard"
export const RouterData=[
    {
        path:"/",
        component:<LoginPage/>,
        layout:"/"
    },
    {
        path:"/maindashboard",
        component:<MainDashboard/>,
        layout:"/dashboard"
    },
    {
        path:"/appointment",
        component:<Appointment/>,
        layout:"/dashboard"
    },
    {
        path:"/taskboard",
        component:<Taskboard/>,
        layout:"/dashboard"
    },
    {
        path:"/doctors",
        component:<Doctors/>,
        layout:"/dashboard"
    },
    {
        path:"/patients",
        component:<Patients/>,
        layout:"/dashboard"
    }
]
