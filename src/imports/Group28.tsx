import imgImage16 from "figma:asset/184cafaecb5d442623e24aa1de4d1da1cc5724c7.png";
import imgImage18 from "figma:asset/4b7eec92ddd856e1d57568d14be56bc4b861aa94.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[896px] left-0 top-0 w-[1195px]" data-name="image 16">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
      </div>
      <div className="absolute h-[896px] left-0 top-[981px] w-[1200px]" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage18} />
      </div>
    </div>
  );
}