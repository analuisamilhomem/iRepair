import { useState } from 'react'

export const NewServiceForm = ({ onSave }: any) => {
  const [newOrder, setNewOrder] = useState({
    customerName: "",
    deviceModel: "",
    issue: "",
    status: "",
    deadline: ""
  })

    function handleChange(event: any) {
    const fieldName = event.target.name  
    const fieldValue = event.target.value 

    setNewOrder({ ...newOrder, [fieldName]: fieldValue })
    }

   return (
    <div>
      <form> 
        <div>
            <input 
            name="customerName" 
            className="bg-white border mt-2 ml-4 px-6 py-4 w-80 rounded-lg shadow-md" 
            type="text" 
            id="input-nome-do-cliente" 
            placeholder="Digite o nome do cliente:"
            onChange= {handleChange}
            value={newOrder.customerName} />

            <input 
            name="deviceModel" 
            className="bg-white border mt-2 ml-4 px-6 py-4 w-80 rounded-lg shadow-md" 
            type="text" 
            id="input-modelo-do-aparelho" 
            placeholder="Digite o modelo do aparelho:" 
             onChange= {handleChange}
             value={newOrder.deviceModel}/>

            <input 
            name="issue" 
            className="bg-white border mt-2 ml-4 px-6 py-4 w-80 rounded-lg shadow-md" 
            type="text" 
            id="input-defeito" 
            placeholder="Digite o defeito:" 
            onChange= {handleChange}
            value={newOrder.issue}/>

            <select 
            name="status" 
            className="bg-white border mt-2 ml-4 px-6 py-4 w-80 rounded-lg shadow-md " 
            id="input-status" 
            onChange= {handleChange}
            value={newOrder.status}>  
                <option value="" disabled>Defina o status do pedido</option>
                <option value="aberto">Aberto</option>
                <option value="finalizado">Finalizado</option>            
            </select>

            <input 
            name="deadline" 
            className="bg-white border mt-2 ml-4 px-6 py-4 w-80 rounded-lg shadow-md "
            type="date" 
            id="input-prazo-entrega"
            onChange= {handleChange}
            value={newOrder.deadline}/>

            <button className="bg-green-500 text-white border mt-2 ml-4 mr-4 px-6 py-4 w-40 rounded-lg shadow-md" type="button" onClick={() => onSave(newOrder)}>
                Salvar
            </button>

        </div>
      </form>
    </div>
  )
}

 