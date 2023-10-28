import Header from "./components/Header.jsx";
import BodyLayout from "./components/BodyLayout.jsx";
import Footer from "./components/Footer.jsx";
import MainLayout from "./components/MainLayout.jsx";
import PageLayout from "./components/PageLayout.jsx";

function App() {
    return (
        <>
            <PageLayout>
                <MainLayout>
                    <Header/>
                    <BodyLayout/>
                    <Footer/>
                </MainLayout>
            </PageLayout>
        </>
    )
}

export default App
