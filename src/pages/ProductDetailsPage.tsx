import { useParams } from "react-router-dom";
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import ProductDetails from "../components/products/ProductDetails"
import { useEffect, useState } from "react";
import { IProductData } from "../static/types/productDataType";
import { productData } from "../static/data";
import SuggestedProduct from "../components/products/SuggestedProduct";

const ProductDetailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState<IProductData | null>(null);
  const productName = name?.replace(/-/g, " ");
  
  useEffect(() => {
      const d = productData.find((i) => i.name === productName) || null;
      setData(d);
  }, []);

  return (
    <div>
      <Header activeHeading={10}/>
      <ProductDetails data={data} />
      {
        data && <SuggestedProduct data={data} />
      }
      <Footer />
    </div>
  )
}

export default ProductDetailsPage