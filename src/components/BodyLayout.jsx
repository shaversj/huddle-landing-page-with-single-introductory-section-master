import SVGLayout from "./SVGLayout.jsx";
import TextLayout from "./TextLayout.jsx";

const BodyLayout = () => {
    return (
        <div className={"flex flex-col items-center pt-[59px] lg:flex-row lg:gap-x-[55px] lg:items-start lg:pt-[87px]"}>
            <SVGLayout />
            <TextLayout />
        </div>
    );
};

export default BodyLayout;