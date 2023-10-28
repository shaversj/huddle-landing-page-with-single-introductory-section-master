import {SocialIcon} from "react-social-icons";

const Footer = () => {
    return (
        <footer className={"flex justify-center pt-16 gap-x-3 lg:gap-x-4 lg:justify-end lg:pt-5"}>
            <SocialIcon network="facebook" fgColor={"currentColor"} bgColor={"currentColor"}
                        className={"social-custom-class"} style={{height: 28, width: 27}}/>
            <SocialIcon network="twitter" fgColor={"currentColor"} bgColor={"currentColor"}
                        className={"social-custom-class"} style={{height: 28, width: 27}}/>
            <SocialIcon network="instagram" fgColor={"currentColor"} bgColor={"currentColor"}
                        className={"social-custom-class"} style={{height: 28, width: 27}}/>
        </footer>
    );
};

export default Footer;