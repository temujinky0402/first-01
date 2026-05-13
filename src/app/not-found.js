'use client';
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return(
        <div className="bg-[url(https://wallpapers.com/images/hd/minimalist-abstract-bq91czhp5gxmprez.jpg)] h-screen w-screen flex justify-center items-center">
            <div className="h-[50%] w-[50%] rounded-2xl flex  flex-col justify-center items-center">
                <div className="text-9xl font-bold text-white">404<a className="text-purple-500">!</a></div>
                <div className="text-blue-300 text-xl">maybe double checking is the solution<a className="text-purple-500">.</a></div>
                <button onClick={() => router.push("/")} className="text-purple-300 cursor-pointer text-sm">click here to go to the homepage!</button>
            </div>
        </div>
    );
}