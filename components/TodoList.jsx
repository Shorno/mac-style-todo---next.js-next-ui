import Todo from "@/components/Todo";
import EmptyView from "@/components/EmptyView";

export default function TodoList({items, handleToggleItem, handleDeleteItem}) {
    return (
        <>
            {items.length === 0 && <EmptyView/>}
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