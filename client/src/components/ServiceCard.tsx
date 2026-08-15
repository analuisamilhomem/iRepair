export interface ServiceOrder {
    customerName: string; 
    deviceModel: string; 
    issue: string; 
    status: string; 
    orderDate: string; 
    deadline: string; 
}

export const ServiceCard = ({customerName, deviceModel, issue, status, orderDate, deadline, onDelete}: any) => {
    return (
        <div className={`border mt-2 ml-4 px-6 py-4 w-80 rounded-lg shadow-md ${status === 'aberto' ? 'bg-green-500' : 'bg-white'}`}>
            <h3 className= "font-bold"> Cliente: {customerName} </h3>
            <p>Aparelho: {deviceModel}</p>
            <p>Defeito: {issue}</p>
            <p>Status: {status}</p>
            <p>Data do Pedido: {orderDate}</p>    
            <p>Prazo de entrega: {deadline}</p>   
            <button onClick={onDelete}className="bg-red-600 text-white px-3 py-1 rounded-md mt-2">
                Deletar
            </button>
        </div>

    )
}