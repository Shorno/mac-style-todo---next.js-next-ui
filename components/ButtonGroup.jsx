import {Button} from "@nextui-org/react";

export default function ButtonGroup({handleMarkAllAsComplete}) {
    return (
        <>
            <Button onClick={handleMarkAllAsComplete} className={"w-1/2"} color={"secondary"} size={"sm"}>Mark all as complete</Button>
            <Button className={"w-1/2"} color={"secondary"} size={"sm"}>Mark all as incomplete</Button>
            <Button className={"w-1/2"} color={"secondary"} size={"sm"}>Reset to initial</Button>
            <Button className={"w-1/2"} color={"secondary"} size={"sm"}>Delete all todo</Button>
        </>
    )
}