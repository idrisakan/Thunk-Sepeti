import { useSelector } from "react-redux"
import { FaFireFlameCurved } from "react-icons/fa6";
import Loader from "../../components/Loader";
import Card from "./Card";


const ProdDetail = () => {
const { isLoading, products, restaurant } =useSelector((stor) =>stor.product);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h2 className="text-2xl font-bold flex gap-2 items-center"> 
            <FaFireFlameCurved className="text-red-500" />
            Popüler
          </h2>
          <p className="text-gray-500">Restoranın En Çok Tercih Edilen Ürünleri</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
          {products.map((product) => (
            <Card 
            key={product.id} 
            product={product}
            restName={restaurant.name}
            />
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default ProdDetail;
