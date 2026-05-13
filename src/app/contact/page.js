'use client';;
import { useRouter } from "next/navigation";

export default function Contact() {
    const router = useRouter();
    return(
        <div className="bg-[url(https://wallpapers.com/images/hd/minimalist-abstract-bq91czhp5gxmprez.jpg)] h-screen w-full flex flex-col justify-center items-center">
            <p className="font-bold text-black text-sm mt-10">click to the logo if you want to go back to the page.</p>
            <button onClick={() => router.push("/")}><img src="https://play-lh.googleusercontent.com/cfckIXjGbzGF7SXOONjbvcWTdO3QnRCwVRT7yOZsILt_U7TeLkK7y1Ug9TTu37-XGg" alt="" className="h-15 w-15 mt-2"></img></button>
            <div className=" h-full w-[75%] rounded-2xl flex  flex-col justify-center items-center ">
                <div>
                    <div className="text-4xl font-bold text-white">Hello! We would like to know you.</div>
                <div className="text-black font-bold mt-5">Hello? If you need any help we are ready to help!!!</div>
                </div>
                
                <div className="h-30 w-[75%] grid grid-span-1 p-2 flex justify-center">
                    <input className="w-150 h-10 bg-white rounded-2xl pl-5 outline-none" placeholder="Your email"/>
                    <input className="w-150 h-10 bg-white rounded-2xl pl-5 outline-none" placeholder="Password"/>
                </div>
                <button className="text-white text-xl font-bold rounded-full bg-purple-800 w-30  h-10 hover:bg-rose-900 active:bg-purple-700 cursor-pointer">Sign in</button>
                <div className="grid grid-cols-2 w-full pl-65 mt-20">
                    <p className="text-white font-bold text-sm">
                        Email:temujinky0402@gmail.com
                    </p>
                    <p className="text-white font-bold text-sm">
                        Phone:95515490
                    </p>
                </div>
            </div>
        </div>
    );
}