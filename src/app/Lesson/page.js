'use client';

import { useState } from "react";
import DataJSON from "../utils/data.json";
import { useRouter } from "next/navigation";

export default function Lesson() {
    const jsonData = JSON.parse(JSON.stringify(DataJSON));
    const [nameSearch, setNameSearch] = useState("");
    const router = useRouter();
    return(
        <main className="flex flex-col items-center h-full w-full gap-5 bg-[url(https://wallpapers.com/images/hd/minimalist-abstract-bq91czhp5gxmprez.jpg)]">
            <div className="flex flex-row items-center justify-start w-full pl-15 mt-5">
                <button onClick={() => router.push("/")}>
                    <img src="https://play-lh.googleusercontent.com/cfckIXjGbzGF7SXOONjbvcWTdO3QnRCwVRT7yOZsILt_U7TeLkK7y1Ug9TTu37-XGg" alt="" className="h-15 w-15"></img>
                </button>
                <input value={nameSearch} onChange={(e) => setNameSearch(e.target.value)} placeholder="Welcome to Nest 11A" className="p-1.5 pl-4 ml-5 rounded-full border border-purple-700 text-white outline-none"></input>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ml-15 mr-15">
                {jsonData.filter((item) => item.First_name.toLowerCase().includes(nameSearch.toLowerCase())).map((item) => (
                     <div className="hover:scale-105 border-3 border-purple-700 rounded-xl bg-white cursor-pointer p-3 flex flex-col justify-between" key={item.id}>
                        <div>
                           <div className="flex flex-row justify-between">
                                <p className="font-bold">{item.Last_name}. {item.First_name}</p>
                                <p className="text-purple-700 border-1 border-purple-700 rounded-xl p-2">{item.type}</p>
                            </div>
                            {(item.gender == "male") ? <img src="https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/7ff29767-f052-40ae-0571-20c89eab6400/banner" alt="" className="h-[35%] w-[35%]"></img> : <img src="https://i.redd.it/1y165vhkz1c51.png" alt="" className="h-[35%] w-[35%]"></img>}
                            <p>Age: {item.age}</p>
                            {(item.point > 59) ? <p className="text-green-500 font-bold">Grade: {item.point}</p> : <p className="text-red-500 font-bold"> Grade: {item.point}</p>}
                            <p>Gender: {item.gender}</p>
                        </div>
                        
                        <button className="font-bold text-white bg-red-500 rounded-full p-2 mt-5 cursor-pointer">Details</button>
                    </div>
                ))
                }
            </div>
        </main>
    );
}