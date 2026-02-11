import type { TMenuItem } from "../types"

type MenuItemProps = {
    item: TMenuItem
    addItem: (item: TMenuItem) => void
}

const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <div className=" flex justify-between">
        <button onClick={() => addItem(item)} className=" flex justify-between w-full p-4 border rounded-lg hover:bg-indigo-500 hover:text-indigo-50 border-indigo-500">
      <span>{item.name}</span>
      <span className=" text-indigo-700 font-bold hover:text-indigo-50">${item.price}</span>
      </button>
    
    </div>
  )
}

export default MenuItem;