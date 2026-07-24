import {Header} from './components/Header'

import {ServiceCard} from './components/ServiceCard'

import type {ServiceOrder} from './components/ServiceCard'

import {useState} from 'react'

import {NewServiceForm} from './components/NewServiceForm'


export const App = () => {
  const [orders, setOrder] = useState<ServiceOrder[]>([])

  function addOrder(newOrder: ServiceOrder) {
   const today = new Date().toLocaleDateString('pt-BR')
   const formattedDeadline = new Date(newOrder.deadline).toLocaleDateString('pt-BR')
   const completeOrder = { ...newOrder, orderDate: today, deadline: formattedDeadline}
   setOrder([...orders, completeOrder])
  }

  function deleteOrder(index: number) {
  const filteredList = orders.filter((order, i) => i !== index)
  setOrder(filteredList)
  }

  return (
  <div className="bg-[#0d5c63] min-h-screen">
    <Header />
    <h2 className= "font-bold text-white px-4 py-4 mt-6 text-2xl">Adicionar uma nova ordem de serviço </h2>
    <NewServiceForm onSave={addOrder} />
    <h2 className= "font-bold text-white px-4 py-4 mt-6 text-2xl">Acompanhar ordens de serviço</h2>
    <div  className="flex flex-wrap gap-4 mt-4">

      {orders.map((order, index) => (
      <ServiceCard 
        key={index}
        customerName={order.customerName}
        deviceModel={order.deviceModel}
        issue={order.issue}
        status={order.status}
        orderDate={order.orderDate}
        deadline={order.deadline}
        onDelete={() => deleteOrder(index)}
      />
    ))}
    </div>
  </div>
  )
}
