import { FC, useState } from "react";
import { IProductData } from "../../../static/types/productDataType";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import Ratings from "../../products/Ratings";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import ProductDetailsCard from "../product-details-card/ProductDetailsCard";

type ProductCardProps = {
  data: IProductData;
};

const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const [click, setClick] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const d = data.name;
  const productName = d.replace(/\s+/g, "-");

  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/historical-tours/${productName}`}>
          <img
            src={`${data.image_Url && data.image_Url[0]?.url}`}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to={`/`}>
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/historical-tours/${productName}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>

          <div className="flex">
            <Ratings rating={data?.rating} />
          </div>

          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
              </h5>
              <h4 className={`${styles.price}`}>
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
            </span>
          </div>
        </Link>

        {/* side options */}
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              // onClick={() => console.log("removeFromWishlistHandler(data)")}
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => console.log("addToWishlistHandler(data)")}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
