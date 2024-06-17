import Heading from "@/components/Heading";
import Sidebar from "@/components/Sidebar";
import Todo from "@/components/Todo";

export default function Main() {
    return (
        <>
            <section className={"w-1/2 mx-auto"}>
                <div className={"grid grid-cols-3"}>
                    <div className={"bg-[#F7F9F2] col-span-3 rounded-t-xl h-10"}>
                        <Heading/>
                    </div>
                    <div className={"bg-[#7776B3] col-span-2 h-96"}>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                    </div>
                    <div className={"bg-[#E2BBE9] h-96"}>
                        <Sidebar/>
                    </div>
                </div>
            </section>
        </>
    )
}