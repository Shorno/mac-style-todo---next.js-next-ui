import {Button} from "@nextui-org/react";

export default function ButtonGroup({handleMarkAllAsComplete, handleMarkAllAsIncomplete, handleResetToInitial, deleteAllItems}) {
    return (
        <>
            <Button onClick={handleMarkAllAsComplete} className={"w-[60%]"} color={"secondary"} size={"sm"}>Mark all as complete</Button>
            <Button onClick={handleMarkAllAsIncomplete} className={"w-[60%]"} color={"secondary"} size={"sm"}>Mark all as incomplete</Button>
            <Button onClick={handleResetToInitial} className={"w-[60%]"} color={"secondary"} size={"sm"}>Reset to Initial</Button>
            <Button onClick={deleteAllItems} className={"w-[60%]"} color={"secondary"} size={"sm"}>Delete all todo</Button>
        </>
    )
}