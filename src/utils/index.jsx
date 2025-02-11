import { Suspense } from "react";
import LoadingImg from '../assets/img/200w.gif'

export const Loading = () => {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img className="width-[100px] height-[100px]" src={LoadingImg} alt="" />
      </div>
    );
}

export const SuspenceContainer = ({children}) => {
    return <Suspense fallback={<Loading/>}>{children}</Suspense>
}