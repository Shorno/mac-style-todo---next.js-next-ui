import Header from "@/components/Header";
import Main from "@/components/Main";
import MacDock from "@/components/MacDock";
import Footer from "@/components/Footer";


export default function Home() {
    return (
        <main
            style={{backgroundImage: `url("/background-image.jpg")`, backgroundSize: "cover"}}
            className={"h-screen"}
        >
            <Header/>
            <Main/>
            <MacDock/>
            <Footer/>
        </main>
    )
}


