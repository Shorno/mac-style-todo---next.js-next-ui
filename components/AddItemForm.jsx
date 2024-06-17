import {Button, Input} from "@nextui-org/react";
import {useState} from "react";

export default function AddItemForm({onAddTodo}) {
    const [todoText, setTodoText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!todoText) {
            alert("Cannot add empty todo!");
            return;
        }
        onAddTodo(todoText)
        setTodoText("")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={"flex flex-col justify-center items-center pt-10 pb-5 gap-5"}>
                <div className={"w-[70%]"}>
                    <Input
                        type={"text"}
                        autoFocus
                        value={todoText}
                        size={"md"} color={"default"}
                        placeholder={"Enter items to add..."}
                        onChange={(e) => {
                            setTodoText(e.target.value)
                        }}
                    />
                </div>
                <Button type={"submit"} size={"md"} color={"primary"}>Add to list</Button>
            </form>
        </>
    )
}