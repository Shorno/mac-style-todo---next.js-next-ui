export default function Counter({totalTodos, completedTodos}){
    return(
        <>
            <div>
                {totalTodos === 0 ?
                    <div>Empty todos</div>
                    :
                    <div><span className={"font-bold"}>{completedTodos}</span> / {totalTodos} todos completed</div>
                }
            </div>
        </>
    )
}