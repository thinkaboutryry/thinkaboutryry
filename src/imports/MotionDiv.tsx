import imgImg from "figma:asset/4b5af93ba2cc98faa76c95ceda1571d3e3e34046.png";
import imgFreeZineMockup600DpiAlexandreLallemandContraportada2 from "figma:asset/1b1cca5aac0ebd0f49da0394cb89f416c9ef47e6.png";

function Span() {
  return <div className="h-[15px] w-[76px]" data-name="span" />;
}

function Div() {
  return (
    <div className="absolute bg-[#171717] content-stretch flex h-[300px] items-center justify-center left-0 p-px top-0 w-[28px]" data-name="div">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="flex h-[76px] items-center justify-center relative shrink-0 w-[15px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Span />
        </div>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[220px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
      <div className="absolute h-[306px] left-0 top-[-3px] w-[220px]" data-name="FREE-ZINE-MOCKUP-600DPI-ALEXANDRE-LALLEMAND contraportada 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.87%] left-[-64.42%] max-w-none top-[-9.09%] w-[229.6%]" src={imgFreeZineMockup600DpiAlexandreLallemandContraportada2} />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.4)] h-[300px] left-0 to-[rgba(0,0,0,0)] top-0 w-[24px]" data-name="Container" />;
}

function Div1() {
  return (
    <div className="absolute bg-[#171717] h-[300px] left-0 overflow-clip rounded-bl-[2px] rounded-br-[8px] rounded-tl-[2px] rounded-tr-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[220px]" data-name="div">
      <Img />
      <Container />
    </div>
  );
}

export default function MotionDiv() {
  return (
    <div className="relative size-full" data-name="motion.div">
      <Div />
      <Div1 />
    </div>
  );
}