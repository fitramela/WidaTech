import TableProducts from "../components/tableProducts";

const AllProducts = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">All Products</h1>
            <TableProducts/>
        </div>
    );
};
export default AllProducts