import type { TOrderItem } from "../types"

type OrderComponentsProps = {
    order: TOrderItem[]
    removeItem: (id: number) => void
    clearOrder: () => void
    tip: number
    setTip: (tip: number) => void
    total: number
}

const OrderComponents = ({ order, removeItem, clearOrder, tip, setTip, total }: OrderComponentsProps) => {
    const tipAmount = total * (tip / 100)
    const totalWithTip = total + tipAmount

    return (
        <div className="space-y-4">
                        <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Consumo</h2>
                {order.length > 0 && (
                    <button
                        onClick={clearOrder}
                        className="text-sm text-red-500 hover:text-red-700 font-medium"
                    >
                        Limpiar Orden
                    </button>
            )}
        </div>

            {order.length === 0 ? (
                <p className="text-gray-500">No hay elementos en la orden</p>
            ) : (
                <>
                    <div className="space-y-2">
                        {order.map((item) => (
                            <div key={item.id} className="flex justify-between items-center p-2 border rounded">
                                <div>
                                    <span className="font-medium">{item.name}</span>
                                    <span className="text-gray-500 text-sm ml-2">x{item.quantity}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:text-red-700 font-bold"
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t pt-4 space-y-3">
                        <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span className="font-bold">${total.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span>Propina ({tip}%):</span>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    min="0"
                                    max="30"
                                    step="5"
                                    value={tip}
                                    onChange={(e) => setTip(Number(e.target.value))}
                                    className="w-32"
                                />
                                <span className="font-bold">${tipAmount.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex justify-between text-lg font-bold border-t pt-2">
                            <span>Total:</span>
                            <span>${totalWithTip.toFixed(2)}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default OrderComponents