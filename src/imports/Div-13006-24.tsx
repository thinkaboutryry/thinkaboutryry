import imgImg from "figma:asset/4b5af93ba2cc98faa76c95ceda1571d3e3e34046.png";
import imgFreeZineMockup600DpiAlexandreLallemandContraportada2 from "figma:asset/1b1cca5aac0ebd0f49da0394cb89f416c9ef47e6.png";
import imgImg1 from "figma:asset/8851a201fee76cf48dfe3f576f7dbde586b4d45f.png";
import imgImg2 from "figma:asset/53ef28b4891783755c920802d22657fddcbb7c98.png";

function Span() {
  return <div className="h-[15px] w-[76px]" data-name="span" />;
}

function Div1() {
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

function Div2() {
  return (
    <div className="absolute bg-[#171717] h-[300px] left-0 overflow-clip rounded-bl-[2px] rounded-br-[8px] rounded-tl-[2px] rounded-tr-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[220px]" data-name="div">
      <Img />
      <Container />
    </div>
  );
}

function MotionDiv() {
  return (
    <div className="absolute h-[300px] left-[316px] top-0 w-[220px]" data-name="motion.div">
      <Div1 />
      <Div2 />
    </div>
  );
}

function Span1() {
  return <div className="h-[15px] w-[62px]" data-name="span" />;
}

function Div3() {
  return (
    <div className="absolute bg-[#262626] content-stretch flex h-[300px] items-center justify-center left-0 p-px top-0 w-[28px]" data-name="div">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="flex h-[62px] items-center justify-center relative shrink-0 w-[15px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Span1 />
        </div>
      </div>
    </div>
  );
}

function Img1() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[220px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.4)] h-[300px] left-0 to-[rgba(0,0,0,0)] top-0 w-[24px]" data-name="Container" />;
}

function Div4() {
  return (
    <div className="absolute bg-[#171717] h-[300px] left-0 overflow-clip rounded-bl-[2px] rounded-br-[8px] rounded-tl-[2px] rounded-tr-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[220px]" data-name="div">
      <Img1 />
      <Container1 />
    </div>
  );
}

function MotionDiv1() {
  return (
    <div className="absolute h-[300px] left-[56px] top-0 w-[220px]" data-name="motion.div">
      <Div3 />
      <Div4 />
    </div>
  );
}

function Span2() {
  return <div className="h-[15px] w-[46px]" data-name="span" />;
}

function Div5() {
  return (
    <div className="absolute bg-[#312c85] content-stretch flex h-[300px] items-center justify-center left-0 p-px top-0 w-[28px]" data-name="div">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="flex h-[46px] items-center justify-center relative shrink-0 w-[15px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Span2 />
        </div>
      </div>
    </div>
  );
}

function Img2() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[220px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg2} />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.4)] h-[300px] left-0 to-[rgba(0,0,0,0)] top-0 w-[24px]" data-name="Container" />;
}

function Div6() {
  return (
    <div className="absolute bg-[#171717] h-[300px] left-0 overflow-clip rounded-bl-[2px] rounded-br-[8px] rounded-tl-[2px] rounded-tr-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[220px]" data-name="div">
      <Img2 />
      <Container2 />
    </div>
  );
}

function MotionDiv2() {
  return (
    <div className="absolute h-[300px] left-[576px] top-0 w-[220px]" data-name="motion.div">
      <Div5 />
      <Div6 />
    </div>
  );
}

export default function Div() {
  return (
    <div className="relative size-full" data-name="div">
      <MotionDiv />
      <MotionDiv1 />
      <MotionDiv2 />
    </div>
  );
}