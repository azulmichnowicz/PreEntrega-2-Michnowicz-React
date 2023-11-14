import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import style from "./ItemListContainer.module.css";


export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setIsLoading(true);
    getProducts()
      .then((resp) => {
        if(category) {
        const productsFilter = resp.filter(product => product.category === category);
      setProducts(productsFilter);
      setIsLoading(false);
        
        } else {
          setProducts(resp);
        setIsLoading(false);
          
        }

      })
      .catch((error) => console.log(error));
  }, [category]);


  return (
    <>
      <div className={`${style.greeting}`}> {greeting} </div>
      { isLoading ? <h2>Loading products ..</h2> : <ItemList products={products} /> }
    </>
  );
};