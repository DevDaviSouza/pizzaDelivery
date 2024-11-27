import ApiClient from "./ApiClient"

export const getProdutos = () => ApiClient.get('/produto')
export const login = () => ApiClient.post('cliente/login')
export const pedidosCliente = (id) => ApiClient.get(`/pedidos/${id}`)
export const novoPedido = (id) => ApiClient.post(`/pedidos/${id}`)
export const novoItemPedido = (id) => ApiClient.post(`/itens-pedidos/${id}`)