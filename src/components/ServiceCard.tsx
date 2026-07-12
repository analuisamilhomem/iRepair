interface ServiceOrder {
    nomeUsuario: string; 
    modeloAparelho: string; 
    defeito: string; 
    status: string; 
    dataPedido: string; 
    prazoEntrega: string; 
}

export function ServiceCard ({nomeUsuario, modeloAparelho, defeito, status, dataPedido, prazoEntrega}: ServiceOrder) {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h3 className= "font-bold"> {nomeUsuario} </h3>
            <p>{modeloAparelho}</p>
            <p>{defeito}</p>
            <p>{status}</p>    
            <p>{dataPedido}</p>    
            <p>{prazoEntrega}</p>   
        </div>

    )
}