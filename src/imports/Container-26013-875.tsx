function Text() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex h-[26px] items-start left-0 px-[13px] py-[5px] rounded-[33554400px] top-[-0.25px] w-[119px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.9)] tracking-[0.6px] uppercase whitespace-nowrap">SOCIAL MEDIA</p>
    </div>
  );
}

function SocialMediaProject() {
  return (
    <div className="absolute h-[26px] left-0 top-0 w-[313.891px]" data-name="SocialMediaProject">
      <Text />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[72px] text-white top-[-4px] tracking-[-1.8px] whitespace-nowrap">
          <span className="leading-[72px]">{`Posts `}</span>
          <span className="font-['Inter:Italic',sans-serif] font-normal italic leading-[72px]">{`&`}</span>
          <span className="leading-[72px]">{` `}</span>
          <span className="font-['Inter:Italic',sans-serif] font-normal italic leading-[72px]">Feed</span>
        </p>
      </div>
    </div>
  );
}

function SocialMediaProject1() {
  return (
    <div className="absolute content-stretch flex h-[72px] items-center left-0 top-[58px] w-[474.703px]" data-name="SocialMediaProject">
      <Heading />
    </div>
  );
}

function SocialMediaProject2() {
  return (
    <div className="absolute h-[97.5px] left-0 top-[154px] w-[520px]" data-name="SocialMediaProject">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[0] left-0 not-italic text-[0px] text-[20px] text-[rgba(255,255,255,0.8)] top-[-3px] w-[519px]">
        <span className="leading-[32.5px]">{`Creación de contenido estático y estructuración de `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32.5px] text-white">sistemas de grillas</span>
        <span className="leading-[32.5px]">{` (Feed Layout) que fortalecen la identidad de marca a primera vista y generan Brand Awareness.`}</span>
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[130px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase">Rol</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[130px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <div className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-white">
          <p className="mb-0">Social Media</p>
          <p>Designer</p>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[130px]" data-name="Text" />;
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-0 top-[22px] w-[130px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[62px] left-0 top-[33px] w-[130px]" data-name="Container">
      <Text1 />
      <Container2 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[130px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase w-[132px]">Año</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[22px] w-[130px]" data-name="Text">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-[132px]">
        <p className="mb-0">2025</p>
        <p>2026</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[42px] left-[423px] top-[33px] w-[130px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[130px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase">Software</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[126px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-white">Figma, Illustrator</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[126px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-white">Photoshop, IA</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-0 top-[22px] w-[130px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[62px] left-[143px] top-[33px] w-[130px]" data-name="Container">
      <Text6 />
      <Container5 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[130px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase w-[44px]">Tipo</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[22px] w-[130px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-[44px]">Post</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[42px] left-[309px] top-[33px] w-[130px]" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function SocialMediaProject3() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t h-[96px] left-0 top-[291.5px] w-[520px]" data-name="SocialMediaProject">
      <Container1 />
      <Container3 />
      <Container4 />
      <Container6 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="blur-[0px] relative size-full" data-name="Container">
      <SocialMediaProject />
      <SocialMediaProject1 />
      <SocialMediaProject2 />
      <SocialMediaProject3 />
    </div>
  );
}