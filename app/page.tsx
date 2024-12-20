import Image from "next/image";
import QrCodeGenerator from "./components/QrCodeGenerator";

export default function Home() {
  return (
    <div className="relative min-h-[100vh] h-full flex items-center justify-center">
      <QrCodeGenerator />
      <Image
        src="/bg.jpg"
        alt="Glass Image"
        height={1200}
        width={1600}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      />
    </div>
  );
}
