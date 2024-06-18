export default function EmptyView(){
    return(
        <>
        <div className={"flex flex-col items-center justify-center w-full h-full"}>
            <h2 className={"uppercase text-2xl font-bold text-white"}>Todo list is empty!</h2>
            <p>Add todo list to complete later...</p>
        </div>
        </>
    )
}