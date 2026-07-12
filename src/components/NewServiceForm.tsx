export function NewServiceForm() {
  return (
    <div>
      <form className="flex flex-col gap-2"> 
        <div>
            <input className="border mt-6 ml-4 px-6 py-4 w-80 rounded-lg shadow-md" type="text" id="input-nome-do-cliente" placeholder="Digite o nome do cliente:" />
            <input className="border mt-6 ml-4 px-6 py-4 w-80 rounded-lg shadow-md" type="text" id="input-modelo-do-aparelho" placeholder="Digite o modelo do aparelho:" />
            <input className="border mt-6 ml-4 px-6 py-4 w-80 rounded-lg shadow-md" type="text" id="input-descricao" placeholder="Digite a descição:" />
            <select className="border mt-6 ml-4 px-6 py-4 w-80 rounded-lg shadow-md " id="input-status" defaultValue="">  
                <option value="" disabled>Defina o status do pedido</option>
                <option value="aberto">Aberto</option>
                <option value="finalizado">Finalizado</option>            
            </select>
            <input className="border mt-6 ml-4 px-6 py-4 w-80 rounded-lg shadow-md "type="date" id="input-prazo-entrega"/>

        </div>
      </form>
    </div>
  )
}