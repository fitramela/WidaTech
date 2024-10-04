import { useEffect, useState } from "react";
import axios from "axios";

const TableProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/');
            const productData = response.data.map(product => ({
              id: product.id,
              invoiceNumber: product.invoiceNumber,
              item: product.item,
              quantity: product.quantity,
              totalCOGS: product.totalCOGS,
              totalPrice: product.totalPrice,
              createdAt: product.createdAt,
              updatedAt: product.updatedAt,
            }));
            setProducts(productData);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
                <tr className="bg-gray-100 border-b border-gray-400">
                    <th className="px-4 py-2 border-r border-gray-400">ID</th>
                    <th className="px-4 py-2 border-r border-gray-400">Invoice Number</th>
                    <th className="px-4 py-2 border-r border-gray-400">Item</th>
                    <th className="px-4 py-2 border-r border-gray-400">Quantity</th>
                    <th className="px-4 py-2 border-r border-gray-400">Total COGS</th>
                    <th className="px-4 py-2 border-r border-gray-400">Total Price</th>
                    <th className="px-4 py-2">Created At</th>
                    
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id} className="border-b border-gray-400">
                        <td className="px-4 py-2 border-r border-gray-400">{product.id}</td>
                        <td className="px-4 py-2 border-r border-gray-400">{product.invoiceNumber}</td>
                        <td className="px-4 py-2 border-r border-gray-400">{product.item}</td>
                        <td className="px-4 py-2 border-r border-gray-400">{product.quantity}</td>
                        <td className="px-4 py-2 border-r border-gray-400">{product.totalCOGS}</td>
                        <td className="px-4 py-2 border-r border-gray-400">{product.totalPrice}</td>
                        <td className="px-4 py-2">{product.createdAt}</td>
                        
                    </tr>
                ))}
                
            </tbody>
        </table>
        
    );
}

export default TableProducts;

