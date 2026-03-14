import svgPaths from "./svg-fvxfp5kddu";
import imgBocetacionInicialMarcaPagina1 from "figma:asset/e7a7750802b0ff70f5a92228546518711ecaf4a3.png";
import imgContainer from "figma:asset/cc3184c0bad40c2d1f877820fb4a142397234478.png";
import imgContainer1 from "figma:asset/bb9f2210b5330e504955895ab62993a324165019.png";
import imgContainer2 from "figma:asset/acddc28043c3b668091e3bf041ae66b77994b528.png";
import imgSection from "figma:asset/6550affdf074067e2a63aecbfd1cdca72d19da60.png";
import imgImage60 from "figma:asset/6b27c2f442bdc589b99818900202faf75da4895a.png";

function Button() {
  return (
    <div className="bg-[#d1d5dc] h-[13.816px] relative rounded-[1.727px] shrink-0 w-[55.266px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[6.908px] left-[15.54px] not-italic text-[#99a1af] text-[5.18px] top-[3.45px] w-[24.179px]">Logo Aquí</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[8.635px] left-0 top-0 w-[14.291px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[8.635px] left-0 not-italic text-[#101828] text-[6.04px] top-[-0.52px] whitespace-nowrap">Inicio</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[8.635px] left-[24.65px] top-0 w-[21.675px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[8.635px] left-0 not-italic text-[#4a5565] text-[6.04px] top-[-0.52px] whitespace-nowrap">Explorar</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[8.635px] left-[56.69px] top-0 w-[28.61px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[8.635px] left-0 not-italic text-[#4a5565] text-[6.04px] top-[-0.52px] whitespace-nowrap">Calendario</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[8.635px] left-[95.66px] top-0 w-[26.456px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[8.635px] left-0 not-italic text-[#4a5565] text-[6.04px] top-[-0.52px] whitespace-nowrap">Directorio</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[8.635px] left-[132.48px] top-0 w-[41.142px]" data-name="Button">
      <p className="absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[8.635px] left-0 not-italic text-[#4a5565] text-[6.04px] top-[-0.52px] underline whitespace-nowrap">Publicar evento</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[8.635px] relative shrink-0 w-[173.624px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#0a0a0a] h-[15.544px] relative rounded-[3.454px] shrink-0 w-[48.196px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.345px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[3.454px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7.253px] py-[3.799px] relative size-full">
        <p className="font-['Arial:Medium',sans-serif] leading-[8.635px] not-italic relative shrink-0 text-[6.04px] text-white whitespace-nowrap">Únete ahora</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[15.544px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button />
      <Navigation />
      <Button6 />
    </div>
  );
}

function Heading1() {
  return <div className="absolute h-[10.362px] left-0 top-[30.57px] w-[53.749px]" data-name="Heading 2" />;
}

function Heading2() {
  return (
    <div className="flex-[1_0_0] h-[11.658px] min-h-px min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Arial:Medium',sans-serif] leading-[11.658px] left-0 not-italic text-[#101828] text-[7.772px] top-[-0.95px] whitespace-nowrap">{`Concierto de Jazz `}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[13.817px] items-start justify-between left-[6.91px] top-[7.08px] w-[121.326px]" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[17.271px] left-[6.91px] overflow-clip top-[24.18px] w-[136.319px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[8.635px] left-0 not-italic text-[#4a5565] text-[6.045px] top-[-0.69px] w-[136.438px]">En la Areté, los jueves saben a jazz y huelen a arte. ¡Ven y acompañanos a esta gran jornada!</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[5.551px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.58%_8.33%_12.52%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-4.39%_-3.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.97149 4.28123">
            <path d={svgPaths.p8f34680} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.345413" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[132.55px] pb-[0.444px] pt-[2.665px] px-[2.665px] rounded-[1.11px] size-[10.88px] top-[6.22px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.345px] border-black border-solid inset-0 pointer-events-none rounded-[1.11px]" />
      <Icon />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[8.635px] left-[6.91px] top-[46.63px] w-[136.319px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[8.635px] left-[0.09px] not-italic text-[#4a5565] text-[6.045px] top-[-0.43px] w-[77.718px]">23 Oct 2025 • 19:30</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[8.635px] left-[6.91px] top-[56.99px] w-[136.319px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[8.635px] left-0 not-italic text-[#4a5565] text-[6.045px] top-[-0.52px] whitespace-nowrap">La Areté</p>
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#d1d5dc] border-[0.691px] border-solid border-white left-0 rounded-[11590101px] size-[10.362px] top-0" data-name="Container" />;
}

function Container9() {
  return <div className="absolute bg-[#d1d5dc] border-[0.691px] border-solid border-white left-[6.91px] rounded-[11590101px] size-[10.362px] top-0" data-name="Container" />;
}

function Container10() {
  return <div className="absolute bg-[#d1d5dc] border-[0.691px] border-solid border-white left-[13.82px] rounded-[11590101px] size-[10.362px] top-0" data-name="Container" />;
}

function Container7() {
  return (
    <div className="h-[10.362px] relative shrink-0 w-[24.179px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container8 />
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[6.903px] relative shrink-0 w-[54.867px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[6.908px] left-[0.09px] not-italic text-[#6a7282] text-[5.181px] top-[-0.43px] w-[72.105px]">45 personas interesadas</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[1.727px] h-[10.362px] items-center left-[6.91px] top-[70.81px] w-[136.319px]" data-name="Container">
      <Container7 />
      <Text />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#101828] h-[15.544px] left-[6.91px] rounded-[3.454px] top-[86.35px] w-[136.319px]" data-name="Button">
      <p className="absolute font-['Arial:Medium',sans-serif] leading-[8.635px] left-[52.27px] not-italic text-[6.045px] text-white top-[2.94px] whitespace-nowrap">Ver detalles</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[108.805px] left-[0.09px] top-[82.9px] w-[150.254px]" data-name="Container">
      <Container3 />
      <Paragraph />
      <Button7 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Button8 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[82.899px] left-[0.09px] top-[0.17px] w-[150.136px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-white border-[#101828] border-[0.345px] border-solid h-[11.053px] left-[6.91px] rounded-[1.727px] top-[5.53px] w-[31.929px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[6.908px] left-[3.45px] not-italic text-[#0a0a0a] text-[5.181px] top-[1.3px] whitespace-nowrap">Conciertos</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-white border-[#101828] border-[0.345px] border-solid h-[11.053px] left-[117.53px] rounded-[1.727px] top-[5.53px] w-[25.485px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[6.908px] left-[3.45px] not-italic text-[#0a0a0a] text-[5.181px] top-[1.3px] whitespace-nowrap">$10,000</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#e5e7eb] h-[82.899px] left-0 top-0 w-[150.136px]" data-name="Container">
      <Container12 />
      <Text1 />
      <Text2 />
    </div>
  );
}

function EventCard() {
  return (
    <div className="absolute bg-white border-[#d1d5dc] border-[0.345px] border-solid h-[192.136px] left-0 overflow-clip rounded-[1.727px] top-[-0.09px] w-[150.686px]" data-name="EventCard">
      <Container2 />
      <Container11 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[5.551px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.58%_8.33%_12.52%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-4.39%_-3.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.97149 4.28123">
            <path d={svgPaths.p8f34680} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.345413" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[132.64px] pb-[0.444px] pt-[2.665px] px-[2.665px] rounded-[1.11px] size-[10.88px] top-[89.12px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.345px] border-black border-solid inset-0 pointer-events-none rounded-[1.11px]" />
      <Icon1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="flex-[1_0_0] h-[10.794px] min-h-px min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Arial:Medium',sans-serif] leading-[11.658px] left-[-0.05px] not-italic text-[#101828] text-[7.772px] top-[-0.86px] w-[119.599px]">Exposición de Arte Contemporáneo</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex h-[10.794px] items-start justify-between left-[6.85px] top-[6.91px] w-[136.438px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Container15() {
  return <div className="absolute h-[8.635px] left-[6.91px] top-[56.13px] w-[136.325px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="absolute h-[8.635px] left-[6.91px] top-[66.49px] w-[136.325px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[8.635px] left-0 not-italic text-[#4a5565] text-[6.045px] top-[-10.02px] whitespace-nowrap">Alianza Francesa Barranquilla</p>
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[#d1d5dc] border-[0.691px] border-solid border-white left-0 rounded-[11590101px] size-[10.362px] top-[-9.5px]" data-name="Container" />;
}

function Container20() {
  return <div className="absolute bg-[#d1d5dc] border-[0.691px] border-solid border-white left-[6.91px] rounded-[11590101px] size-[10.362px] top-[-9.5px]" data-name="Container" />;
}

function Container21() {
  return <div className="absolute bg-[#d1d5dc] border-[0.691px] border-solid border-white left-[13.82px] rounded-[11590101px] size-[10.362px] top-[-9.5px]" data-name="Container" />;
}

function Container18() {
  return (
    <div className="h-[10.362px] relative shrink-0 w-[24.179px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container19 />
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[6.903px] relative shrink-0 w-[54.867px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[6.908px] left-[-0.05px] not-italic text-[#6a7282] text-[5.181px] top-[-9.93px] w-[72.105px]">62 personas interesadas</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[1.727px] h-[10.362px] items-center left-[6.91px] top-[80.31px] w-[136.325px]" data-name="Container">
      <Container18 />
      <Text3 />
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[#101828] h-[15.544px] left-[6.91px] rounded-[3.454px] top-[86.35px] w-[136.325px]" data-name="Button">
      <p className="absolute font-['Arial:Medium',sans-serif] leading-[8.635px] left-[52.28px] not-italic text-[6.045px] text-white top-[2.94px] whitespace-nowrap">Ver detalles</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[120.031px] left-0 top-[82.9px] w-[150.141px]" data-name="Container">
      <Container14 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[8.635px] left-[6.91px] not-italic text-[#4a5565] text-[6.045px] top-[24.18px] w-[134.711px]">Obras de artistas locales emergentes que exploran la identidad de la sociedad.</p>
      <Container15 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[8.635px] left-[6.85px] not-italic text-[#4a5565] text-[6.045px] top-[46.2px] w-[78.15px]">27 Oct 2025 • 15:00</p>
      <Container16 />
      <Container17 />
      <Button10 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[82.899px] left-0 top-0 w-[150.141px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-white border-[#101828] border-[0.345px] border-solid h-[11.053px] left-[6.91px] rounded-[1.727px] top-[5.53px] w-[36.662px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[6.908px] left-[3.45px] not-italic text-[#0a0a0a] text-[5.181px] top-[1.3px] whitespace-nowrap">Exposiciones</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-white border-[#101828] border-[0.345px] border-solid h-[11.053px] left-[122.43px] rounded-[1.727px] top-[5.53px] w-[20.8px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[6.908px] left-[3.45px] not-italic text-[#0a0a0a] text-[5.181px] top-[1.3px] whitespace-nowrap">Gratis</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#e5e7eb] h-[82.899px] left-0 top-0 w-[150.141px]" data-name="Container">
      <Container23 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function EventCard1() {
  return (
    <div className="absolute bg-white border-[#d1d5dc] border-[0.345px] border-solid h-[192.136px] left-[161.05px] overflow-clip rounded-[1.727px] top-[-0.09px] w-[151.118px]" data-name="EventCard">
      <Button9 />
      <Container13 />
      <Container22 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[11.658px] left-[6.91px] overflow-clip top-[6.91px] w-[122.503px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Medium',sans-serif] leading-[11.658px] left-0 not-italic text-[#101828] text-[7.772px] top-[-0.95px] whitespace-nowrap">Teatro Infantil: El Principito</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[5.551px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.63%_8.33%_12.47%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-4.39%_-3.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.97149 4.28123">
            <path d={svgPaths.p8f34680} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.345413" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[132.21px] pb-[0.444px] pt-[2.665px] px-[2.665px] rounded-[1.11px] size-[10.88px] top-[6.65px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.345px] border-black border-solid inset-0 pointer-events-none rounded-[1.11px]" />
      <Icon2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[17.271px] left-[6.91px] overflow-clip top-[24.18px] w-[136.319px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[8.635px] left-0 not-italic text-[#4a5565] text-[6.045px] top-[-0.52px] w-[136.006px]">Obra familiar adaptada para niños y niñas de todas las edades.</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[8.635px] left-[6.91px] top-[46.63px] w-[136.319px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[8.635px] left-[-0.2px] not-italic text-[#4a5565] text-[6.045px] top-[-0.43px] w-[78.15px]">28 Oct 2025 • 16:00</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[8.635px] left-[6.91px] top-[56.99px] w-[136.319px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[8.635px] left-0 not-italic text-[#4a5565] text-[6.045px] top-[-0.52px] whitespace-nowrap">Casa Teatro Cofradía</p>
    </div>
  );
}

function Container29() {
  return <div className="absolute bg-[#d1d5dc] border-[0.691px] border-solid border-white left-0 rounded-[11590101px] size-[10.362px] top-0" data-name="Container" />;
}

function Container30() {
  return <div className="absolute bg-[#d1d5dc] border-[0.691px] border-solid border-white left-[6.91px] rounded-[11590101px] size-[10.362px] top-0" data-name="Container" />;
}

function Container31() {
  return <div className="absolute bg-[#d1d5dc] border-[0.691px] border-solid border-white left-[13.82px] rounded-[11590101px] size-[10.362px] top-0" data-name="Container" />;
}

function Container28() {
  return (
    <div className="h-[10.362px] relative shrink-0 w-[24.179px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container29 />
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[6.903px] relative shrink-0 w-[54.867px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[6.908px] left-[-0.2px] not-italic text-[#6a7282] text-[5.181px] top-[-0.43px] w-[72.537px]">89 personas interesadas</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[1.727px] h-[10.362px] items-center left-[6.91px] top-[70.81px] w-[136.319px]" data-name="Container">
      <Container28 />
      <Text6 />
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[#101828] h-[15.544px] left-[6.91px] rounded-[3.454px] top-[86.35px] w-[136.319px]" data-name="Button">
      <p className="absolute font-['Arial:Medium',sans-serif] leading-[8.635px] left-[52.27px] not-italic text-[6.045px] text-white top-[2.94px] whitespace-nowrap">Ver detalles</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[120.031px] left-0 top-[82.9px] w-[150.136px]" data-name="Container">
      <Heading4 />
      <Button11 />
      <Paragraph1 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Button12 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[82.899px] left-[0.09px] top-[0.17px] w-[150.136px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer2} />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-white border-[#101828] border-[0.345px] border-solid h-[11.053px] left-[6.91px] rounded-[1.727px] top-[5.53px] w-[21.75px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[6.908px] left-[3.45px] not-italic text-[#0a0a0a] text-[5.181px] top-[1.3px] whitespace-nowrap">Teatro</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-white border-[#101828] border-[0.345px] border-solid h-[11.053px] left-[117.74px] rounded-[1.727px] top-[5.53px] w-[25.485px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[6.908px] left-[3.45px] not-italic text-[#0a0a0a] text-[5.181px] top-[1.3px] whitespace-nowrap">$20,000</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#e5e7eb] h-[82.899px] left-0 top-0 w-[150.136px]" data-name="Container">
      <Container33 />
      <Text7 />
      <Text8 />
    </div>
  );
}

function EventCard2() {
  return (
    <div className="absolute bg-white border-[#d1d5dc] border-[0.345px] border-solid h-[192.136px] left-[322.53px] overflow-clip rounded-[1.727px] top-[-0.09px] w-[150.686px]" data-name="EventCard">
      <Container24 />
      <Container32 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[203.621px] left-0 top-[63.21px] w-[473.215px]" data-name="Container">
      <EventCard />
      <EventCard1 />
      <EventCard2 />
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[#101828] border-[0.345px] border-[rgba(0,0,0,0.1)] border-solid h-[15.544px] left-[193.18px] rounded-[3.454px] top-[275.12px] w-[86.855px]" data-name="Button">
      <p className="absolute font-['Arial:Medium',sans-serif] leading-[8.635px] left-[6.91px] not-italic text-[6.045px] text-white top-[2.59px] whitespace-nowrap">Explorar todos los eventos</p>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[318.298px] left-[74.26px] top-[214.85px] w-[473.215px]" data-name="Section">
      <Heading1 />
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[10.362px] left-0 not-italic text-[#101828] text-[6.908px] top-[40.76px] whitespace-nowrap">Eventos del día</p>
      <Container1 />
      <Button13 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[10.362px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[10.362px] left-[165.73px] not-italic text-[6.908px] text-center text-white top-[-0.95px] whitespace-nowrap">Descubre los eventos culturales de Barranquilla en un solo lugar</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[10.362px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[10.362px] left-[165.77px] not-italic text-[6.908px] text-center text-white top-[-0.95px] whitespace-nowrap">Teatro, música, arte, danza y más</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-white h-[15.544px] relative rounded-[3.454px] shrink-0 w-[59.433px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6.908px] py-[3.454px] relative size-full">
        <p className="font-['Arial:Medium',sans-serif] leading-[8.635px] not-italic relative shrink-0 text-[#0a0a0a] text-[6.045px] whitespace-nowrap">Explorar eventos</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#0a0a0a] h-[15.544px] relative rounded-[3.454px] shrink-0 w-[56.993px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.345px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[3.454px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7.253px] py-[3.799px] relative size-full">
        <p className="font-['Arial:Medium',sans-serif] leading-[8.635px] not-italic relative shrink-0 text-[6.045px] text-white whitespace-nowrap">Publicar evento</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[15.544px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[6.908px] items-start justify-center relative size-full">
          <Button14 />
          <Button15 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.362px] h-[56.993px] items-start left-[144.64px] top-[55.27px] w-[331.596px]" data-name="Container">
      <Heading />
      <Paragraph2 />
      <Container36 />
    </div>
  );
}

function Button16() {
  return <div className="bg-white rounded-[11590101px] shrink-0 size-[3.454px]" data-name="Button" />;
}

function Button17() {
  return <div className="bg-[#99a1af] rounded-[11590101px] shrink-0 size-[3.454px]" data-name="Button" />;
}

function Button18() {
  return <div className="bg-[#99a1af] rounded-[11590101px] shrink-0 size-[3.454px]" data-name="Button" />;
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[3.454px] h-[3.454px] items-start justify-center left-[73.83px] top-[126.08px] w-[473.215px]" data-name="Container">
      <Button16 />
      <Button17 />
      <Button18 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[184.796px] left-0 top-0 w-[493.94px]" data-name="Container">
      <Container35 />
      <Container37 />
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute h-[17.271px] left-[73.83px] top-[83.76px] w-[16.839px]" data-name="Button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8389 17.2706">
        <g id="Button">
          <mask fill="white" id="path-1-inside-1_50_1632">
            <path d={svgPaths.p8c6bc80} />
          </mask>
          <path d={svgPaths.p8c6bc80} fill="var(--fill-0, white)" />
          <path d={svgPaths.p35c97100} fill="var(--stroke-0, #D1D5DC)" mask="url(#path-1-inside-1_50_1632)" />
          <path d={svgPaths.p115d2400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.863531" />
        </g>
      </svg>
    </div>
  );
}

function FlowbiteArrowUpOutline() {
  return (
    <div className="relative size-[10.362px]" data-name="flowbite:arrow-up-outline">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3624 10.3624">
        <g id="flowbite:arrow-up-outline">
          <path d={svgPaths.p2fb6c6c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.863531" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-white content-stretch flex h-[17.271px] items-center justify-center left-[530.21px] p-[0.345px] rounded-[11590101px] top-[83.76px] w-[16.839px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.345px] border-solid inset-0 pointer-events-none rounded-[11590101px]" />
      <div className="flex items-center justify-center relative shrink-0 size-[10.362px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <FlowbiteArrowUpOutline />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[185.227px] left-0 top-[29.79px] w-[620.447px]" data-name="Section">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSection} />
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-b-[0.345px] border-solid inset-0 pointer-events-none" />
      <Container34 />
      <Button19 />
      <Button20 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute bg-white h-[560px] left-[406px] top-px w-[621.742px]" data-name="Home">
      <div className="absolute bg-white content-stretch flex flex-col h-[29.705px] items-start left-[63.9px] pb-[0.345px] pt-[6.908px] px-[10.362px] top-0 w-[493.94px]" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#d1d5dc] border-b-[0.345px] border-solid inset-0 pointer-events-none" />
        <Container />
      </div>
      <Section />
      <Section1 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[550.642px] left-0 top-[10.75px] w-[382px]" data-name="Bocetación inicial marca_Página_1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBocetacionInicialMarcaPagina1} />
      </div>
      <Home />
      <div className="absolute h-[561px] left-[1051.74px] top-0 w-[519px]" data-name="image 60">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[437.06%] left-0 max-w-none top-[0.84%] w-full" src={imgImage60} />
        </div>
      </div>
    </div>
  );
}