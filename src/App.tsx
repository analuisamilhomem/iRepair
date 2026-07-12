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

  function addOrder(newOrder: ServiceOrder) {
   const hoje = new Date().toLocaleDateString('pt-BR')
   const prazoFormatado = new Date(newOrder.prazoEntrega).toLocaleDateString('pt-BR')
   const ordemCompleta = { ...newOrder, dataPedido: hoje, prazoEntrega: prazoFormatado}
   setOrder([...orders, ordemCompleta])
  }

  return (
  <div>
    <Header />
    <h2 className= "font-bold px-4 py-4 mt-6 text-2xl">Adicionar uma nova ordem de serviço </h2>
    <NewServiceForm onSave={addOrder} />
    <h2 className= "font-bold px-4 py-4 mt-6 text-2xl">Acompanhar ordens de serviço</h2>
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
