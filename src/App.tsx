import React from "react";
import Button from "./components/Button/Button.tsx";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import VolumetricCanvas from "./components/Canvas/VolumetricCanvas.tsx";

// Wrapper 컴포넌트
const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="w-full flex justify-center">
    <section className="flex flex-col justify-center items-center text-center py-2 px-4 gap-4 leading-6 tracking-wide max-w-[620px]">
      {children}
    </section>
  </main>
);

// Heading 컴포넌트
const Heading: React.FC<{ level: number; children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <header className={`text-start text-lg font-semibold`}>{children}</header>
  );
};

// Line 컴포넌트 유지
const Line = () => <div className="w-full h-[1px] bg-slate-400 opacity-35" />;

// App 컴포넌트
function App() {
  return (
    <Wrapper>
      <img
        src="/jmrd-horizontal.png"
        alt="JMRD"
        className="rounded-md object-cover w-full"
      />
      <div className="text-2xl font-serif font-bold">
        <div>2024-12-28 Sat 18:00</div>
        <div className="font-sans text-sm text-gray-400">웰컴 드링크 제공</div>
      </div>

      <Line />

      <Section title="JMRD LAST PARTY 🎉">
        <p>
          2019년부터 우리들의 낭만적인 술자리를 책임져주던
          <span className="font-bold"> 주모르드가 드디어 막을 내립니다. </span>
          이를 위해 마지막으로
          <span className="font-bold text-yellow-300">
            {" "}
            2024년 12월 28일에 주모르드에서{" "}
          </span>
          라스트 파티를 진행하려고 합니다. 파티에 참여해주시는 분들에게는
          마지막으로
          <span className="font-bold"> 주모르드와의 아름다운 향기를 </span>
          몸에 새겨드리겠습니다.
        </p>
      </Section>

      <Line />

      <Section title="📝 사전 준비물">
        <SubSection title="📦 교환용 애장품">
          <p>
            애장품 교환식이 있을 예정입니다. 적당한 성의를 담아 준비해주시면
            되고, 음식류는 무조건 제한합니다.{" "}
            <span className="font-bold text-yellow-300">
              준비를 안해오신 분들은 그에 따른 패널티가 존재
            </span>
            하니 꼭 준비해주세요!
          </p>
        </SubSection>
        <SubSection title="🎁 찬조품 (Optional)">
          <p>
            뭐든 찬조하여 주시면 감사히 받겠습니다. 필수는 절대 아니고, 여유가
            넘치시는 분들의 배려 정도면 될 것 같습니다.
          </p>
        </SubSection>
        <SubSection title="🏃🏻 강인한 체력">
          <p>
            웬만해서는 새벽까지 진행할 확률이 높기에 적절한 체력을 챙겨오셨으면
            좋겠습니다. 물론 힘드시면 먼저 떠나셔도 좋습니다.
          </p>
        </SubSection>
      </Section>

      <Line />

      <Section
        title="찾아오는 길"
        description={"부산광역시 부산진구 엄광로222번길 7 201호"}
      >
        <Map
          center={{ lat: 35.150610816211504, lng: 129.03678412210786 }}
          style={{ width: "100%", height: "60vh" }}
          level={4}
        >
          <CustomOverlayMap
            position={{
              lat: 35.150610816211504,
              lng: 129.03678412210786,
            }}
          >
            <div className="relative inline-block">
              <div className="bg-black text-white rounded-md p-2 shadow-md text-xs">
                <div>JMRD LAST PARTY</div>
              </div>
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-black shadow-md"></div>
            </div>
          </CustomOverlayMap>
        </Map>
      </Section>

      <Line />

      <Section title="👕 Merchandise">
        <VolumetricCanvas style={{ height: "50vh" }} />
        <p className="text-xs">* 위 디자인으로 MD를 구매하실 수 있습니다.</p>
        <Button>티셔츠 사러가기</Button>
      </Section>

      <Line />

      <Section title="Credits">
        <SubSection title="✏️ 기획">
          <CreditItem name="김종운" description="라스트 파티 컨텐츠 기획" />
          <CreditItem name="주현우" description="라스트 파티 컨텐츠 기획" />
        </SubSection>
        <SubSection title="✏️ 초대장 제작">
          <CreditItem
            name="김종운"
            description="라스트 파티 초대장 앱 개발 및 배포"
          />
        </SubSection>
        <SubSection title="✏️ 장소 제공">
          <CreditItem name="주현우" description="주모르드 마지막 장소 제공" />
        </SubSection>
      </Section>

      <Line />
    </Wrapper>
  );
}

// Section 컴포넌트
const Section: React.FC<{
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, description, children }) => (
  <section className="text-start w-full flex flex-col gap-2">
    <Heading level={2}>
      {title}
      {description && <p className={"text-gray-400 text-xs"}>{description}</p>}
    </Heading>
    {children}
  </section>
);

// SubSection 컴포넌트
const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section>
    <Heading level={3}>{title}</Heading>
    {children}
  </section>
);

// CreditItem 컴포넌트
const CreditItem: React.FC<{ name: string; description: string }> = ({
  name,
  description,
}) => (
  <section>
    <div className="font-semibold">- {name}</div>
    <div className="ml-4">- {description}</div>
  </section>
);

export default App;
