import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-center">
      <Image
        src={
          "https://preview.redd.it/d7kt1lx5dol01.png?auto=webp&s=64ee3e906a6003a1ca20d319f44120b15573b0b4"
        }
        alt={"프로필 이미지"}
        width={200}
        height={200}
        className="mx-auto rounded-full bg-slate-50"
        priority
      />
      <h2 className="text-3xl font-bold mt-2">Hi, I'm Freddy</h2>
      <h3 className="text-xl font-semibold">Front Engineer</h3>
      <p className="text-sm">꿈을 코딩하는 사람</p>
      <Link href="/contact">
        <button className="mt-2 font-bold bg-yellow-500 py-1 px-4 rounded-xl">
          Contact me
        </button>
      </Link>
    </section>
  );
};

export default Hero;
