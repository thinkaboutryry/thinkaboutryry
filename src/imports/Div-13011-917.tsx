import imgImg from "figma:asset/53ef28b4891783755c920802d22657fddcbb7c98.png";

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

export default function Div() {
  return (
    <div className="bg-[#171717] overflow-clip relative rounded-bl-[2px] rounded-br-[8px] rounded-tl-[2px] rounded-tr-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="div">
      <Img />
      <Container />
    </div>
  );
}