import {Card, CardBody, Checkbox} from "@nextui-org/react";

export default function Todo() {
    return (
        <>
            <Card className={"mt-5 rounded-sm"} >
                <CardBody >
                    <Checkbox defaultSelected={false} lineThrough={true}>Todo Text</Checkbox>
                </CardBody>
            </Card>
        </>
    )
}