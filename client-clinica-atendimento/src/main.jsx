import { createRoot } from 'react-dom/client'
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/global.css"

import Cadastro from './pages/cadastro/index.jsx'
import Login from './pages/login/index.jsx'
import Inicio from './pages/tela-principal/index.jsx'
import ConsultaPresencial from './pages/consulta-presencial/index.jsx';
import ConsultaOnline from  './pages/teleconsulta/index.jsx';
import Exame from './pages/exame/index.jsx'
import Perfil from './pages/perfil/index.jsx'
import ResultMedicos from './pages/result-medicos/index.jsx'
import TelecosultaAcesso from './pages/teleconsulta-acesso/index.jsx'

import Administativo from './admintrativo/pages/login/index.jsx'
import InicioAdministativo from './admintrativo/pages/inicio/index.jsx'
import Cadastros from './admintrativo/pages/cadastros/index.jsx'
import Relatorio from './admintrativo/pages/relatorio/index.jsx';
import Agenda from './admintrativo/pages/agenda/index.jsx';
import Prontuario from './admintrativo/pages/prontuario/index.jsx';
import ReceitaDigital from './admintrativo/pages/receita-digital/index.jsx';
import HistoricosPacientes from './admintrativo/pages/historicos-pacientes/index.jsx';
import Suprimentos from './admintrativo/pages/suprimentos/index.jsx';
import Leitos from './admintrativo/pages/leitos/index.jsx';
import SuprimentosAdicionar from './admintrativo/pages/adicionar-suprimentos/index.jsx';

const router = createBrowserRouter([
{
  path: "/",
  element: <Login/ >
},
{
  path: "/cadastro",
  element: <Cadastro/ >
},
{
  path: "/inicio",
  element: <Inicio/ >
},
{
  path: "/inicio/consulta-presencial",
  element: <ConsultaPresencial/ >
},
{
  path: "/inicio/consulta-online",
  element: <ConsultaOnline/ >
},
{
  path: "/inicio/exame",
  element: <Exame/ >
},
{
  path: "/inicio/perfil",
  element: <Perfil/ >
},
{
  path: "/resultado-medicos",
  element: <ResultMedicos/ >
},
{
  path: "/teleconsulta-acesso",
  element: <TelecosultaAcesso/ >
},

{
  path: "/administrativo",
  element: <Administativo/ >
},
{
  path: "/administrativo/inicio",
  element: <InicioAdministativo/ >
},
{
  path: "/administrativo/cadastro",
  element: <Cadastros/ >
},
{
  path: "/administrativo/relatorio",
  element: <Relatorio/ >
},
{
  path: "/administrativo/agenda",
  element: <Agenda/ >
},
{
  path: "/administrativo/prontuario",
  element: <Prontuario/ >
},
{
  path: "/administrativo/receita-digital",
  element: <ReceitaDigital/ >
},
{
  path: "/administrativo/historicos",
  element: <HistoricosPacientes/ >
},
{
  path: "/administrativo/suprimentos",
  element: <Suprimentos/ >
},
{
  path: "/administrativo/suprimentos/adicionar",
  element: <SuprimentosAdicionar/ >
},
{
  path: "/administrativo/leitos",
  element: <Leitos/ >
},

])



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
