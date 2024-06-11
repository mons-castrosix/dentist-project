
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import VerPaciente from "views/pacientes/verPaciente";
import Tables from "views/pacientes/Tables";
import Calendario from "views/calendario";
import classNames from "classnames";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/pacientes",
    name: "Pacientes",
    icon: "ni ni-badge text-blue",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/ver-pacientes",
    name: "Ver Pacientes",
    icon: "ni ni-badge text-blue",
    component: <VerPaciente />,
    layout: "/admin",
    invisible:true

  },
 

  {
    path: "/citas",
    name: "Citas",
    icon: "ni ni-calendar-grid-58 text-orange",
    component: <Calendario />,
    layout: "/admin",
  },
  {
    path: "/historico",
    name: "Historico",
    icon: "ni ni-folder-17 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },


  {/*
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },*/}
];
export default routes;
