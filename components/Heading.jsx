import Counter from "@/components/Counter";

export default function Heading({totalTodos, completedTodos}) {
    return (
        <>
            <div className={"flex items-center p-2"}>
                <div className={"flex gap-2 absolute"}>
                    <div className={"size-4 rounded-full bg-[#FF8F8F]"}></div>
                    <div className={"size-4 rounded-full bg-[#FFBB64]"}></div>
                    <div className={"size-4 rounded-full bg-[#9ADE7B]"}></div>
                </div>
                <div className={"w-full text-center"}>
                    <h1 className={"font-semibold"}>My Custom Todo App</h1>
                </div>
                <div className={"absolute right-0 mr-2"}>
                    <Counter
                        totalTodos={totalTodos}
                        completedTodos={completedTodos}
                    />
                </div>
            </div>
        </>
    )
}