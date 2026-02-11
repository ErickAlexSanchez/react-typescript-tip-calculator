import { useState, useEffect } from "react";
import type {TMenuItem, TOrderItem} from "../types";

const STORAGE_KEY = 'tip-calculator-order';
const TIP_STORAGE_KEY = 'tip-calculator-tip';

const useOrder = () => {
  // Cargar datos iniciales desde localStorage
  const loadOrderFromStorage = (): TOrderItem[] => {
    const storedOrder = localStorage.getItem(STORAGE_KEY);
    return storedOrder ? JSON.parse(storedOrder) : [];
  };

  const loadTipFromStorage = (): number => {
    const storedTip = localStorage.getItem(TIP_STORAGE_KEY);
    return storedTip ? Number(storedTip) : 10; // Valor por defecto 10%
  };
  const [order, setOrder] = useState<TOrderItem[]>(loadOrderFromStorage);
  const [tip, setTip] = useState<number>(loadTipFromStorage); // Default tip percentage

  // Guardar en localStorage cada vez que cambie el order
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  }, [order]);

  // Guardar en localStorage cada vez que cambie el tip
  useEffect(() => {
    localStorage.setItem(TIP_STORAGE_KEY, tip.toString());
  }, [tip]);

    const addItem = (item: TMenuItem) => {
        const existingItemIndex = order.findIndex(orderItem => orderItem.id === item.id);
        if (existingItemIndex !== -1) {
            const updatedOrder = [...order];
            updatedOrder[existingItemIndex].quantity += 1;
            setOrder(updatedOrder);
        } else {
            setOrder([...order, { ...item, quantity: 1 }]);
        }
    }

  const removeItem = (id: number) => {
    const updatedOrder = order.filter(item => item.id !== id);
    setOrder(updatedOrder);
  }

  const clearOrder = () => {
    setOrder([]);
}

  const calculateTotal = () => {
    return order.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  const total = calculateTotal();

  console.log(order);

  return {
    order,
    addItem,
    removeItem,
    clearOrder,
    tip,
    setTip,
    total
  }
}

export default useOrder;