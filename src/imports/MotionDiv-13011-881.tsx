import imgImg from "figma:asset/8851a201fee76cf48dfe3f576f7dbde586b4d45f.png";

function Span() {
  return <div className="h-[15px] w-[62px]" data-name="span" />;
}

function Div() {
  return (
    <div className="absolute bg-[#262626] content-stretch flex h-[300px] items-center justify-center left-0 p-px top-0 w-[28px]" data-name="div">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="flex h-[62px] items-center justify-center relative shrink-0 w-[15px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Span />
        </div>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="absolute h-[300px] left-0 top-0 w-[220px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
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