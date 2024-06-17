import AddItemForm from "@/components/AddItemForm";
import ButtonGroup from "@/components/ButtonGroup";

export default function Sidebar({handleAddTodo,handleMarkAllAsComplete}) {
    return (
        <>

            <AddItemForm onAddTodo={handleAddTodo}/>
            <div className={"flex flex-col items-center gap-2 mt-6"}>
                <ButtonGroup handleMarkAllAsComplete={handleMarkAllAsComplete}/>
            </div>

        </>
    )
}