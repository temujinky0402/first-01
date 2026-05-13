'use client';
import { useRouter } from "next/navigation";

export default function Nest() {
    const router = useRouter();
    return(
        <div className="w-screen h-screen flex justify-center items-center bg-[url(https://wallpapers.com/images/hd/minimalist-abstract-bq91czhp5gxmprez.jpg)]">
            <div className="w-auto h-auto flex justify-center items-center flex-col ">
                <img src="https://play-lh.googleusercontent.com/cfckIXjGbzGF7SXOONjbvcWTdO3QnRCwVRT7yOZsILt_U7TeLkK7y1Ug9TTu37-XGg" className="h-60 w-60"></img>
                <p className="text-blue-100 text-sm">Welcome to Nest 11A!</p>
                <div className="mt-5 grid grid-cols-4 gap-10">
                    <button onClick={() => router.push("/contact")} className="h-auto w-full p-5 bg-purple-700 rounded-xl text-white font-bold cursor-pointer active:bg-white transition duration-300 easy-in-out active:outline-2 outline-purple-700">Contact</button>
                    <button onClick={() => router.push("/content")} className="h-auto w-full p-5 bg-purple-700 rounded-xl text-white font-bold cursor-pointer active:bg-white transition duration-300 easy-in-out active:outline-2 outline-purple-700">Content</button>
                    <button onClick={() => router.push("/weather")} className="h-auto w-full p-5 bg-purple-700 rounded-xl text-white font-bold cursor-pointer active:bg-white transition duration-300 easy-in-out active:outline-2 outline-purple-700">Weather</button>
                    <button onClick={() => router.push("/Lesson")} className="h-auto w-full p-5 bg-purple-700 rounded-xl text-white font-bold cursor-pointer active:bg-white transition duration-300 easy-in-out active:outline-2 outline-purple-700">11A</button>
                </div>
            </div>
        </div>
    );
}