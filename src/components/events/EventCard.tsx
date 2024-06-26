import { Link } from "react-router-dom"
import styles from "../../styles/styles"
import CountDown from "./CountDown"
import { FC } from "react"
import { IProductData } from "../../static/types/productDataType"

type EventCardProps = {
    active: boolean,
    data:IProductData
}

const EventCard:FC<EventCardProps> = ({data, active}) => {
  return (
    <div
    className={`w-full block bg-white rounded-lg ${
      active ? "unset" : "mb-12"
    } lg:flex p-2`}
  >
    <div className="w-full lg:-w[50%] m-auto">
      <img src={`${data.image_Url[0]?.url}`} alt="" />
    </div>
    <div className="w-full lg:[w-50%] flex flex-col justify-center">
      <h2 className={`${styles.productTitle}`}>{data.name}</h2>
      <p>{data.description}</p>
      <div className="flex py-2 justify-between">
        <div className="flex">
          <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">

          </h5>
          <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
          </h5>
        </div>
        <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
        </span>
      </div>
      <CountDown data={data} />
      <br />
      <div className="flex items-center">
        <Link to={`/`/*`/product/${data._id}?isEvent=true`*/}>
          <div className={`${styles.button} text-[#fff]`}>See Details</div>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default EventCard