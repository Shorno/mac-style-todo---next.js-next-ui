import Todo from "@/components/Todo";

export default function TodoList({items}) {
    return (
        <>
            {
                items.map((item) => {
                    return <Todo
                        key={item.id}
                        item={item}

                    />
                })
            }
        </>
    )
}