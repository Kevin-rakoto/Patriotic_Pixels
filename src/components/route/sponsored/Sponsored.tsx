import styles from "../../../styles/styles";
import tarigetra1 from "../../../assets/tarigetra/images1.png"
import tarigetra2 from "../../../assets/tarigetra/images2.jpeg"
import targietra3 from "../../../assets/tarigetra/logo-normal.jpg"
import tarigetra4 from "../../../assets/tarigetra/logo-primature-fond-transparent-vf-300x300.png"
import tarigetra5 from "../../../assets/tarigetra/seaux.png"

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full items-center">
        <div className="flex items-start">
          <img
            src={tarigetra2}
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src={tarigetra1}
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src={targietra3}
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src={tarigetra4}
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src={tarigetra5}
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
