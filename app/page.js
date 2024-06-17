import Header from "@/components/Header";
import Main from "@/components/Main";
import MacDock from "@/components/MacDock";


export default function Home() {
    return (
        <main
            style={{backgroundImage: `url("/background-image.jpg")`, backgroundSize: "cover"}}
            className={"h-screen"}
        >
            <Header/>
            <Main/>
            <MacDock/>
        </main>
    )
}


