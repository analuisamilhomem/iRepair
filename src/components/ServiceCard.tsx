export interface ServiceOrder {
    nomeUsuario: string; 
    modeloAparelho: string; 
    defeito: string; 
    status: string; 
    dataPedido: string; 
    prazoEntrega: string; 
}

export function ServiceCard ({nomeUsuario, modeloAparelho, defeito, status, dataPedido, prazoEntrega}: ServiceOrder) {
    return (
        <div className={`border mt-2 ml-4 px-6 py-4 w-80 rounded-lg shadow-md ${status === 'aberto' ? 'bg-green-200' : 'none'}`}>
            <h3 className= "font-bold"> Cliente: {nomeUsuario} </h3>
            <p>Aparelho: {modeloAparelho}</p>
            <p>Dfeito: {defeito}</p>
            <p>Status: {status}</p>
            <p>Data do Pedido: {dataPedido}</p>    
            <p>Prazo de entrega: {prazoEntrega}</p>   
        </div>

    )
}