import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen"
    >
      <div className="relative">
        <Image
          src="/bulbul.png"
          alt="Chinese bulbul"
          width={0}
          height={0}
          sizes="90vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="absolute p-4 bottom-0 right-0 text-right text-white font-bold">
          <div className="text-5xl">白頭翁 (Chinese bulbul)</div>
          <div className="text-lg">又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。</div>
        </div>
      </div>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 p-10">
        <div className="flex gap-5">
          <span>外觀</span>
          <span>白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。</span>
        </div>
        <div className="flex gap-5">
          <span>棲地</span>
          <span>白頭翁和麻雀，綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。</span>
        </div>
        <div className="flex gap-5">
          <span>食性</span>
          <span>以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。</span>
        </div>
      </div>
    </main>
  );
}
