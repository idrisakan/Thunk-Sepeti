import { useParams } from "react-router-dom"
import Container from "../../components/Container"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getDataByRestId } from "../../redux/action/productActions"
import ProdDetail from "./ProdDetail"
import RestDetail from "./RestDetail"

const Restaurant = () => {


  //urldeki restaurant id sini temsil eden parametreye erişme
  const { id } = useParams();

  //useDispatch kurulumu
  const dispatch = useDispatch();

  //birleşen ekrana basıldığında id den yola çıkarak restoran ve ürünlerinin bildilerini api al reducere aktar
  useEffect(() => {
    dispatch(getDataByRestId(id));
  }, []);


  return (

    <div>
      <div className="shadow">
        <Container>
          <RestDetail />
        </Container>
      </div>
      <Container>
        <ProdDetail />
      </Container>
    </div>
  )
}

export default Restaurant
