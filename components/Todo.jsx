import {Button, Card, CardBody, Checkbox} from "@nextui-org/react";
import Image from "next/image";

export default function Todo({item, onToggleItem, onDeleteItem}) {
    return (
        <>
            <Card className={"rounded-sm"}>
                <CardBody className={"backdrop-blur-lg flex flex-row justify-between"}>
                    <div>
                        <Checkbox
                            onChange={() => onToggleItem(item.id)}
                            isSelected={item.completed}
                            lineThrough={true}
                        >
                            <p className={"font-semibold"}>{item.name}</p>
                        </Checkbox>
                    </div>
                    <button onClick={() => onDeleteItem(item.id)}>
                        <Image src={"delete.svg"} alt={"delete icon"} width={25} height={25}/>
                    </button>
                </CardBody>

            </Card>
        </>
    )
}

