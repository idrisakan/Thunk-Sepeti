import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import RestCard from "../components/RestCard";
import { getRestaurants } from "../redux/action/restaurantActions";
import Container from "../components/Container";

const Main = () => {
  // store'daki restaurant reducer'ına abone olma
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurant
  );

  // dispatch kurulumu
  const dispatch = useDispatch();
  // birleşeni ekrana basıldığında api isteği at ve reducer'ı güncelle
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <Container>
      <h1 className="text-3xl">TÜM RESTAURANTLAR</h1>
      
        {isLoading ? (
        <Loader />
        ) : error ? (
        <Error msg={error} retry={() => dispatch(getRestaurants()) } />
        ) : (<div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
           {restaurants.map((rest) => (<RestCard key={rest.id} data={rest}/>
        ))}
      </div>
      )}
    </Container>
  );
};

export default Main;

