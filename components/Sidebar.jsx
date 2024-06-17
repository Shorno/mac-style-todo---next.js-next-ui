import AddItemForm from "@/components/AddItemForm";

export default function Sidebar({handleAddTodo}){
    return(
        <>
            <AddItemForm onAddTodo={handleAddTodo} />
        </>
    )
}