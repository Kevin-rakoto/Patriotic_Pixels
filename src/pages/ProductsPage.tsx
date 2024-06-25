import { useSearchParams } from "react-router-dom";
import Header from "../components/layout/Header";
import styles from "../styles/styles";
import { FC, useEffect, useState } from "react";
import { IProductData } from "../static/types/productDataType";
import { productData } from "../static/data";
import ProductCard from "../components/route/product-card/ProductCard";
import Footer from "../components/layout/Footer";

const ProductsPage: FC = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState<IProductData[]>([]);

  useEffect(() => {
    if (categoryData == null) {
      const d =
        productData && productData.sort((a, b) => b.total_sell - a.total_sell);
      setData(d);
    } else {
      const d =
        productData &&
        productData.filter((i) => {
          i.category == categoryData;
        });
      setData(d);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No story Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
