import WorksSection from "@/components/WorksSection";
import RotatingText from "@/components/RotatingText";

export default function Home() {
  return (
    <main className="relative" style={{opacity: 1}}>
      <h1 className="h1-kononenko">
        I enjoy creating{" "}
        <RotatingText />
        {" "}
        designs.
      </h1>
      <WorksSection />
    </main>
  );
}