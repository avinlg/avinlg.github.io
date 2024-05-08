import Image from "next/image";

function SummaryItem(props: {text: string, className?: string}) {
  return <dd className={`before:content-['-'] before:pr-2 ${props.className}`}>{props.text}</dd>;
}

export default function Header(props: any) {
  return (
    <section className="flex flex-col items-stretch w-full justify-between text-center sm:text-left">
      <div className="flex w-full bg-white dark:bg-white px-4 py-2 dark:text-gray-800">
        <Image
          src={props.profile_image}
          alt="profile image"
          className="invert-[0.15] w-2/9 h-2/9"
          width={160}
          height={160}
          priority={true}
          style={{ objectFit: "contain", aspectRatio: 1 }}
        />
        <div className="flex pl-4 text-xs font-bold">
          <dl>
            <dt className="uppercase after:content-[':']">Summary </dt>
            <div className="bg-gray-200 pl-2 pr-4 mb-2 mt-1 py-2 rounded leading-tight">
              {props.summary.map((val: string, i: string) => (
                <SummaryItem key={i} text={val} className="italic" />
              ))}
            </div>
            
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
