export interface ServiceOrder {
    nomeUsuario: string; 
    modeloAparelho: string; 
    defeito: string; 
    status: string; 
    dataPedido: string; 
    prazoEntrega: string; 
}

export function ServiceCard ({nomeUsuario, modeloAparelho, defeito, status, dataPedido, prazoEntrega, onDelete}: any) {
    return (
        <div className={`border mt-2 ml-4 px-6 py-4 w-80 rounded-lg shadow-md ${status === 'aberto' ? 'bg-green-500' : 'bg-white'}`}>
            <h3 className= "font-bold"> Cliente: {nomeUsuario} </h3>
            <p>Aparelho: {modeloAparelho}</p>
            <p>Defeito: {defeito}</p>
            <p>Status: {status}</p>
            <p>Data do Pedido: {dataPedido}</p>    
            <p>Prazo de entrega: {prazoEntrega}</p>   
            <button onClick={onDelete}className="bg-red-600 text-white px-3 py-1 rounded-md mt-2">
                Deletar
            </button>
        </div>

    )
}