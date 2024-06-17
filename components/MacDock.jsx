import Image from "next/image";
import todoIcon from "/public/todo.svg"

export default function MacDock() {
    return (
        <>
            <div
                className={"flex  items-center justify-center w-[70%] mx-auto h-14 rounded-2xl bg-gray-0 mt-40 bg-clip-padding backdrop-filter backdrop-blur-xl shadow-lg bg-opacity-0"}>

                <div className={"bg-[#F7F9F2] rounded-md"}>
                    <Image src={todoIcon} alt={"app icon"} width={40} height={40}/>
                </div>
            </div>
        </>
    )
}