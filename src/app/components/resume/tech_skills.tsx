import AutoGrid from "@/app/components/ui/auto_grid";

const getAltBg = (background:string) => {
  return background == "bg-white" ? "bg-gray-200" : "bg-white"
};

const TextGrid = (props: any) => {
  const data = Array.from(props.data);
  const className = props.className || '';
  const altBg = getAltBg(className);
  return (
    <AutoGrid cols={'auto'} className={`px-4 py-1 rounded max-w-max grow ${altBg}`}>
      {data.map((el) => (
        <div key={`${el}`} className={`rounded-full font-semibold max-w-max px-1 ${className}`}><span>{`${el}`}</span></div>
      ))}
    </AutoGrid>
  );
};

const Skill = (props: any) => {
  return (
    <dl className={`p-1 flex grow rounded text-xs ${props.background}`}>
      <dt className="grow-0 max-w-max px-2 font-bold self-center">{props.label}</dt>
      {getSkills(props.data, props.background)}
    </dl>
  );
};

const getSkills = (skills: any, parentBackground: string): any => {
  const childBackground = getAltBg(parentBackground);
  let skillComponents = [];
  for (let skill in skills) {
    if (skills[skill].label) {
      skillComponents.push(
        <Skill key={skill} background={childBackground} {...skills[skill]} />
      );
    } else {
      return <TextGrid data={skills} className={childBackground} />;
    }
  }
    return skillComponents;
  // return <TextGrid {...skills} />;
};

const TechSkills = (props: any) => {
  return (
    <section className="p-2 py-4 flex w-full relative text-sm">
      <dl className="w-full relative">
        <dt className="absolute z-10 -top-1 left-4 px-2 max-w-max border-2 border-gray-800 rounded-full bg-gray-800 text-white font-bold text-xs">
          {props.label}
        </dt>
        <dd className="mt-2 p-2 border-2 border-gray-800">
          <div className="flex flex-wrap gap-1 bg-white">{getSkills(props.data, "bg-white")}</div>
        </dd>
      </dl>
    </section>
  );
};

export default TechSkills;
