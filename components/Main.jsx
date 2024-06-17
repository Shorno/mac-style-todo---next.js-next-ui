import Heading from "@/components/Heading";
import Sidebar from "@/components/Sidebar";

export default function Main() {
    return (
        <>
            <section className={"w-1/2 mx-auto"}>
                <div className={"grid grid-cols-3"}>
                    <div className={"bg-[#F7F9F2] col-span-3 rounded-t-xl h-10"}>
                        <Heading/>
                    </div>
                    <div className={"bg-green-300 col-span-2 h-96"}>
                        2
                    </div>
                    <div className={"bg-pink-300 h-96"}>
                        <Sidebar/>
                    </div>
                </div>
            </section>
        </>
    )
}