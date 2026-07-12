import { useState } from 'react'

export function NewServiceForm({onSave}: any) {
  const [newOrder, setNewOrder] = useState({
    nomeUsuario: "",
    modeloAparelho: "",
    defeito: "",
    status: "",
    prazoEntrega: ""
  })

    function fazMudanca(change: any) {
    const nomeDoCampo = change.target.name  
    const valorDigitado = change.target.value 

    setNewOrder({ ...newOrder, [nomeDoCampo]: valorDigitado })
    }

   return (
    <div>
      <form> 
        <div>
            <input 
            name="nomeUsuario" 
            className="border mt-2 ml-4 px-6 py-4 w-80 rounded-lg shadow-md" 
            type="text" 
            id="input-nome-do-cliente" 
            placeholder="Digite o nome do cliente:"
            onChange= {fazMudanca}
            value={newOrder.nomeUsuario} />

            <input 
            name="modeloAparelho" 
            className="border mt-2 ml-4 px-6 py-4 w-80 rounded-lg shadow-md" 
            type="text" 
            id="input-modelo-do-aparelho" 
            placeholder="Digite o modelo do aparelho:" 
             onChange= {fazMudanca}
             value={newOrder.modeloAparelho}/>

            <input 
            name="defeito" 
            className="border mt-2 ml-4 px-6 py-4 w-80 rounded-lg shadow-md" 
            type="text" 
            id="input-defeito" 
            placeholder="Digite o defeito:" 
            onChange= {fazMudanca}
            value={newOrder.defeito}/>

            <select 
            name="status" 
            className="border mt-2 ml-4 px-6 py-4 w-80 rounded-lg shadow-md " 
            id="input-status" 
            onChange= {fazMudanca}
            value={newOrder.status}>  
                <option value="" disabled>Defina o status do pedido</option>
                <option value="aberto">Aberto</option>
                <option value="finalizado">Finalizado</option>            
            </select>

            <input 
            name="prazoEntrega" 
            className="border mt-2 ml-4 px-6 py-4 w-80 rounded-lg shadow-md "
            type="date" 
            id="input-prazo-entrega"
            onChange= {fazMudanca}
            value={newOrder.prazoEntrega}/>

            <button className="bg-green-300 text-white border mt-2 ml-4 mr-4 px-6 py-4 w-40 rounded-lg shadow-md" type="button" onClick={() => onSave(newOrder)}>
                Salvar
            </button>

        </div>
      </form>
    </div>
  )
}

 