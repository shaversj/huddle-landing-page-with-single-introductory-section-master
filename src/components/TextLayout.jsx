import H1 from "./H1.jsx";
import Button from "./Button.jsx";
import P from "./P.jsx";

const TextLayout = () => {
    return (
        <div className={"text-white pt-[63px] lg:pt-[40px] flex flex-col items-center lg:items-start"}>
            <H1 />
            <P />
            <Button />
        </div>
    );
};

export default TextLayout;