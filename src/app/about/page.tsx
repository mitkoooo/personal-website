import Image from "next/image";

export default function About() {
  const titleCSS = "text-2xl font-semibold";

  return (
    <div className="mt-8 px-2">
      <h1 className={titleCSS}>About</h1>
      <div className="relative mx-auto my-8 flex h-[108px] w-[108px]">
        <Image
          quality={50}
          loading="lazy"
          className="rounded-full grayscale"
          alt="Vadim Mitko"
          src="/vadimmitko.jpeg"
          fill
        />
      </div>
      <div className="flex flex-col gap-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          consectetur nibh in lacus luctus, ut tincidunt sapien efficitur. Ut id
          odio ipsum. Fusce at velit facilisis, cursus nisi eu, pellentesque
          leo. Phasellus lobortis venenatis libero eu suscipit. Aliquam dui
          mauris, venenatis in varius quis, molestie ac augue. Mauris vitae
          tellus magna. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos.
        </p>
        <p>
          Donec auctor sed dolor in volutpat. Aenean eu nisl in quam condimentum
          viverra. Sed aliquam condimentum nisi nec blandit. Integer et neque
          tortor. Sed ac aliquam eros. Maecenas non aliquam metus. In quis
          tincidunt ex, non convallis risus. Duis dictum semper auctor. Nulla
          facilisi.
        </p>
        <h1 className={titleCSS}>Technical Contributions</h1>
      </div>
    </div>
  );
}
