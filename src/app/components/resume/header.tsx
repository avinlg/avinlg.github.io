import Image from "next/image";

function SummaryItem(props: {text: string, className?: string}) {
  return <dd className={props.className}>{props.text}</dd>;
}

export default function Header(props: any) {
  return (
    <section className="flex flex-col items-stretch w-full justify-between text-center sm:text-left">
      <div className="flex w-full bg-gray-800 dark:bg-white p-4 text-white dark:text-gray-800">
        <Image
          src={props.profile_image}
          alt="profile image"
          className="invert-[0.15] w-2/9 h-2/9"
          width={160}
          height={160}
          priority={true}
          style={{ objectFit: "contain", aspectRatio: 1 }}
        />
        <div className="flex pl-4">
          <dl>
            <dt className="text-xs font-bold uppercase after:content-[':']">Summary </dt>
            {props.summary.map((val: string, i: string) => (
              <SummaryItem key={i} text={val} className="" />
            ))}
          </dl>
        </div>
      </div>
      <div className="flex flex-col font-extrabold my-auto min-w-max px-4">
        <h1 className="text-6xl tracking-widest pt-2">
          {props.title} <span className="text-3xl">(Resume)</span>
        </h1>
        <div className="flex justify-between">
          <h5>{props.designation}</h5>
          <span className="text-xs font-normal self-end">
            <b>Updated On:</b> {props.updatedOn}
          </span>
        </div>
        <hr className="border-t-4 border-gray-800 dark:border-white" />
      </div>
    </section>
  );
}
