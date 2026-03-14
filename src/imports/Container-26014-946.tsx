import imgMockup22 from "figma:asset/48f13785666856b15a6cb08964afde9bd4064f4c.png";
import imgScene92 from "figma:asset/6cff3f4cc15097748459e1d8e7977320368020a5.png";
import imgScene82 from "figma:asset/66a3c52fba443ef6a7875b3af232da6d6e80430c.png";
import imgScene72 from "figma:asset/bce54d01ad6d5a7425207bbf15c87ca993ad94ec.png";

export default function Container() {
  return (
    <div className="border-[rgba(255,255,255,0.1)] border-solid border-t relative size-full" data-name="Container">
      <div className="absolute h-[373px] left-[546px] top-[76px] w-[574px]" data-name="MOCKUP 2 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMockup22} />
      </div>
      <div className="absolute h-[512.093px] left-[3.23px] top-[3.55px] w-[480.172px]" data-name="Scene 9 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScene92} />
      </div>
      <div className="absolute h-[512.093px] left-0 top-[3.55px] w-[482.05px]" data-name="Scene 8 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScene82} />
      </div>
      <div className="absolute h-[512.093px] left-0 top-[3.55px] w-[487px]" data-name="Scene 7 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScene72} />
      </div>
    </div>
  );
}