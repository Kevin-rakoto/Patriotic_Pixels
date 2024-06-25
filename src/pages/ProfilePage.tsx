import { useState } from "react";
import styles from "../styles/styles";
import { useTypedSelector } from "../redux/types/hooks";
import Header from "../components/layout/Header";
import ProfileSidebar from "../components/profile/ProfileSideBar";
import Loader from "../components/layout/Loader";
import ProfileContent from "../components/profile/ProfileContent";

const ProfilePage = () => {
  const { loading } = useTypedSelector((state) => state.user);
  const [active, setActive] = useState<number>(1);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header activeHeading={10} />
          <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
            <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
              <ProfileSidebar active={active} setActive={setActive} />
            </div>
            <ProfileContent active={active} />
          </div>
        </>
      )}
    </div>
  );
};


export default ProfilePage;
