import {Card, CardBody, Checkbox} from "@nextui-org/react";

export default function Todo() {
    return (
        <>
            <Card className={"mt-5 rounded-sm"}>
                <CardBody className={"backdrop-blur-lg"}>
                    <Checkbox defaultSelected={false} lineThrough={true}><p className={"font-semibold"}>Todo Text</p>
                    </Checkbox>
                </CardBody>
            </Card>
        </>
    )
}