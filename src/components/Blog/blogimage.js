import Image from "next/image";

export default function BlogImage() {
  return (
    <div class="relative h-[600px]">
      <Image src={"/shield-and-globe.png"} alt="shield and globe" fill />
    </div>
  );
}
