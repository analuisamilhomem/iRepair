import {Header} from './components/Header'

import {ServiceCard} from './components/ServiceCard'

import type {ServiceOrder} from './components/ServiceCard'

import {useState} from 'react'

import {NewServiceForm} from './components/NewServiceForm'

export function App() {
  const [orders, setOrder] = useState<ServiceOrder[]>([
  {
    nomeUsuario: "Ana Luísa",
    modeloAparelho: "iPhone 11",
    defeito: "Problema na tela",
    status: "Aberto",
    dataPedido: "12/07/2026",
    prazoEntrega: "13/07/2026"
  }
  ])
  return (
  <div>
    <Header />
    <NewServiceForm />
    <h2 className= "font-bold px-4 py-4 mt-4 text-2xl">Acompanhar ordens de serviço</h2>
    {orders.map((order, index) => (
      <ServiceCard 
        key={index}
        nomeUsuario={order.nomeUsuario}
        modeloAparelho={order.modeloAparelho}
        defeito={order.defeito}
        status={order.status}
        dataPedido={order.dataPedido}
        prazoEntrega={order.prazoEntrega}
      />
    ))}
  </div>
)
}
