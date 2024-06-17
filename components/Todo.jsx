import {Card, CardBody, Checkbox} from "@nextui-org/react";

export default function Todo({item}) {
    return (
        <>
            <Card className={"rounded-sm"}>
                <CardBody className={"backdrop-blur-lg"}>
                    <Checkbox
                        isSelected={item.completed}
                        lineThrough={true}
                    >
                        <p className={"font-semibold"}>{item.name}</p>
                    </Checkbox>
                </CardBody>
            </Card>
        </>
    )
}
