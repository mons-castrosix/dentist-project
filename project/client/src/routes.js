
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import VerPaciente from "views/pacientes/verPaciente";
import Tables from "views/pacientes/Tables";
import Calendario from "views/calendario";
import Paciente from "views/pacientes/Paciente";
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
    path: "/edit-paciente/:id",
    name: "Agregar",
    icon: "ni ni-badge text-blue",
    component: <Paciente />,
    layout: "/admin",

  },
  {
    path: "/view-paciente/:id",
    name: "Ver",
    icon: "ni ni-badge text-blue",
    component: <VerPaciente />,
    layout: "/admin",

  },
  
  {
    path: "/add-paciente",
    name: "Agregar",
    icon: "ni ni-badge text-blue",
    component: <Paciente />,
    layout: "/admin",

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
