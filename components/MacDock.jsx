"use client"
import Image from "next/image";
import todoIcon from "/public/todo.svg"
import {Tooltip} from "@nextui-org/react";

export default function MacDock() {
    return (
        <>
            <div className={"flex flex-col items-center justify-center w-[70%] mx-auto h-14 rounded-2xl bg-gray-0 mt-40 bg-clip-padding backdrop-filter backdrop-blur-xl shadow-lg bg-opacity-0"}>
                <Tooltip content={"X Todo"} radius={"sm"} size={"sm"}>
                    <div className={"bg-[#F7F9F2] rounded-md hover:animate-bounce once"}>
                        <Image src={todoIcon} alt={"app icon"} width={40} height={40}/>
                    </div>
                </Tooltip>
                <div className={"size-1.5 bg-black rounded-full mt-1"}>
                </div>
            </div>
        </>
    )
}