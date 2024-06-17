import {Button, Input} from "@nextui-org/react";

export default function AddItemForm(){
    return (
        <>
            <div className={"flex flex-col justify-center items-center pt-10 pb-5 gap-5"}>
                <div className={"w-[70%]"}>
                    <Input size={"md"} color={"default"} placeholder={"Enter items to add..."}/>
                </div>
                <Button size={"sm"} color={"primary"}>Add to list</Button>
            </div>
        </>
    )
}