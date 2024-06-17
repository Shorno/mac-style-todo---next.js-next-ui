import Todo from "@/components/Todo";

export default function TodoList({items, handleToggleItem, handleDeleteItem}) {
    return (
        <>
            {
                items.map((item) => {
                    return <Todo
                        key={item.id}
                        item={item}
                        onToggleItem={handleToggleItem}
                        onDeleteItem={handleDeleteItem}

                    />
                })
            }
        </>
    )
}