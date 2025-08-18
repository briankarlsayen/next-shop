// import Lottie from "lottie-react";
import "../styles/Loading.module.css";
// import shopLoading from "../assets/shop-loading.json";
import { useEffect, useState } from "react";
interface LoadingProps {
  loading: boolean;
}

const Loading = (props: LoadingProps) => {
  const [dotCount, setDotCount] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      if (dotCount < 3) {
        setDotCount(dotCount + 1);
      } else {
        setDotCount(1);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [dotCount]);
  return (
    <div
      className={
        props.loading
          ? `loading-container opacity-100`
          : `opacity-0 z-0 invisible`
      }
    >
      <div className="loading-width">
        {/* <Lottie animationData={shopLoading} loop={true} /> */}
        <h2 className="text-header">Loading{Array(dotCount).fill(".")}</h2>
        <p>We are making things ready for you.</p>
      </div>
    </div>
  );
};

export default Loading;
