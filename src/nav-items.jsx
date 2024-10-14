import { HomeIcon, PhoneIcon, MessageSquareIcon, UserIcon, UserPlusIcon, InfoIcon } from "lucide-react";
import Inicial from "./pages/Inicial.jsx";
import Contato from "./pages/Contato.jsx";
import FaleConosco from "./pages/FaleConosco.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import SobreEmpresa from "./pages/SobreEmpresa.jsx";

export const navItems = [
  {
    title: "Inicial",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Inicial />,
  },
  {
    title: "Contato",
    to: "/contato",
    icon: <PhoneIcon className="h-4 w-4" />,
    page: <Contato />,
  },
  {
    title: "Fale Conosco",
    to: "/fale-conosco",
    icon: <MessageSquareIcon className="h-4 w-4" />,
    page: <FaleConosco />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <UserIcon className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "Cadastro",
    to: "/cadastro",
    icon: <UserPlusIcon className="h-4 w-4" />,
    page: <Cadastro />,
  },
  {
    title: "Sobre a Empresa",
    to: "/sobre",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <SobreEmpresa />,
  },
];