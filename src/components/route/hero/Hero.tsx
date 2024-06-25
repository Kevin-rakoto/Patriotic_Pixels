import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://www.google.com/search?sca_esv=093f1932c1e44e67&sca_upv=1&sxsrf=ADLYWILxxOkPIF18wvE8Cfj0gXHxYNfYnw:1719298012757&q=madagascar+independance&udm=2&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgTlosgQSuzBMlnAdio07UCFdb4kkCZQx4-ERIk5vUh0hWbBcn17qhcg4G1UyOj4Blc6eRPrebgUsAhViQgePRmDWW94ApH2NCyyFk28r5yuHaaWlh9Kk4e2LsZI9Yksn6icnk-vcOZ6YJXLk5zKoOGsCgiGhKfnvArm67mArGuTZiVwXqe-amRSXPosJfK9mkyoDE4g&sa=X&ved=2ahUKEwis1MCalPaGAxU2TkEAHTG0BS8QtKgLegQIChAB&biw=1366&bih=637&dpr=1#vhid=JhLq57kZ7GWYiM&vssid=mosaic)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Madagascar Independance Historical Tours
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Explore the rich history and cultural heritage of Madagascar through
          immersive guided tours.
          <br />
          Join our expert guides as they lead you through the significant events
          and landmarks that shaped Madagascar's fight for independence.
          <br />
          Experience the culture, history, and spirit of a nation proud of its
          heritage.
        </p>
        <Link to="/historical-tours" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Explore Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
