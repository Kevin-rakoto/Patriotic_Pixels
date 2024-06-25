import { useNavigate } from 'react-router-dom';
import ShopCreate from '../components/shop/ShopCreate';

const ShopCreatePage = () => {
  const navigate = useNavigate();
//   const { isSeller,seller } = useTypedSelector((state) => state.seller);

//   useEffect(() => {
//     if(isSeller === true){
//       navigate(`/shop/${seller._id}`);
//     }
//   }, [])
  return (
    <div>
        <ShopCreate />
    </div>
  )
}

export default ShopCreatePage