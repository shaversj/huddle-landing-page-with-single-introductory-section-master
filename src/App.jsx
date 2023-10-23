import logo from '/src/assets/images/logo.svg'
import illustration from '/src/assets/images/illustration-mockups.svg'
import {SocialIcon} from "react-social-icons";
function App() {


  return (
    <>
        <div className={"bg-black min-h-screen flex items-center"}>
            <main className={"bg-violet max-w-screen-sm lg:max-w-screen-lg mx-auto min-h-[800px] px-9"}>

                <header className={"pt-8"}>
                    <img className={"h-[28px]"} src={logo} alt={"logo"} />
                </header>

                <div className={"flex flex-col items-center pt-[60px]"}>
                    {/*    Image */}
                    <div>
                        <img className={"w-[296px] h-[209px]"} src={illustration} alt={"illustration"} />
                    </div>

                    {/*    Title */}
                    <div className={"text-white pt-[65px]"}>
                        <h1 className={"font-Poppins text-2xl text-center font-bold"}>Build The Community Your Fans Will Love</h1>
                        <p className={"font-Open-Sans text-center pt-5"}>
                            Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                            Create connections with your users as you engage in genuine discussion.
                        </p>

                    </div>

                    {/*    Button */}
                    <button className={"bg-white w-[200px] h-[40px] rounded-full mt-8"}>
                        <span className={"text-violet text-sm"}>Register</span>
                    </button>
                </div>

                <footer className={"flex justify-center pt-12 gap-x-2"}>
                    <SocialIcon network="facebook" fgColor={"currentColor"} bgColor={"currentColor"} className={"social-custom-class"} style={{ height: 31, width: 31 }} />
                    <SocialIcon network="twitter" fgColor={"currentColor"} bgColor={"currentColor"} className={"social-custom-class"} style={{ height: 31, width: 31 }} />
                    <SocialIcon network="instagram" fgColor={"currentColor"} bgColor={"currentColor"} className={"social-custom-class"} style={{ height: 31, width: 31 }} />
                </footer>
            </main>
        </div>



    </>
  )
}

export default App
