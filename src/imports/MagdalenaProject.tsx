function Text() {
  return (
    <div className="bg-[#171717] relative rounded-[51198028px] shrink-0 size-[48.826px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.413px] not-italic relative shrink-0 text-[18.31px] text-white whitespace-nowrap">Aa</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[30.516px] relative shrink-0 w-[279.964px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30.516px] not-italic relative shrink-0 text-[21.362px] text-white tracking-[2.1362px] uppercase whitespace-nowrap">Primaria / Titulares</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[18.31px] h-[48.826px] items-center left-0 top-0 w-[855.461px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Heading() {
  return <div className="absolute h-[109.859px] left-0 top-[85.45px] w-[855.461px]" data-name="Heading 4" />;
}

function Group() {
  return (
    <div className="absolute contents font-['Sirukota:Regular',sans-serif] left-0 not-italic top-0 whitespace-nowrap">
      <p className="absolute leading-[109.859px] left-0 text-[109.859px] text-white top-0 tracking-[5.493px]">Sirukota</p>
      <div className="absolute leading-[42.723px] left-0 text-[#a1a1a1] text-[30.516px] top-[135.8px]">
        <p className="mb-0">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        <p>0 1 2 3 4 5 6 7 8 9</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[221.799px] left-0 top-[-137.32px] w-[638px]">
      <Group />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[42.723px] left-0 top-[219.72px] w-[855.461px]" data-name="Paragraph">
      <Frame />
    </div>
  );
}

export default function MagdalenaProject() {
  return (
    <div className="relative size-full" data-name="MagdalenaProject">
      <Container />
      <Heading />
      <Paragraph />
    </div>
  );
}