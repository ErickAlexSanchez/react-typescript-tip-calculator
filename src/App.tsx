import MenuItem from "./components/MenuItem"
import OrderComponents from "./components/OrderComponents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {
  const { order, addItem, removeItem, clearOrder, tip, setTip, total } = useOrder();
  
  return (
    <>
      <header className="bg-indigo-700 p-6">
        <h1 className="text-center text-white text-2xl font-bold">Tip Calculator</h1>
    </header>

    <main className="m-auto mt-10 w-5/6 grid md:grid-cols-2 gap-4 md:w-3/4">
        <div className="p-6 rounded-lg border-indigo-500 border-2">
          <h2 className="text-xl font-bold mb-4">Menú</h2>
          <div className="space-y-4">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        
        <div className="p-6 rounded-lg border-indigo-500 border-2">
          <OrderComponents
            order={order}
            removeItem={removeItem}
            clearOrder={clearOrder}
            tip={tip}
            setTip={setTip}
            total={total}
          />
        </div>
      </main>
    </>
  )
}

export default App
