import AutoGrid from "@/app/components/ui/auto_grid";
import CircularProgressBar from '@/app/components/ui/circular_progress_bar';

const getAltBg = (background:string) => {
  return background == "bg-white" ? "bg-gray-200" : "bg-white"
};

interface Marksheet {
  title: String,
  subTitle: String,
  score: String,
  pct: number,
  board: String,
  passingYear: String
}
type Marksheets = Record<string, Marksheet>;

const MarksheetsUI = (props: Marksheets) => {
  let marksheets = [];
  for (const [key, data] of Object.entries(props)) {
    marksheets.push((
      <div key={`${key}`} className={`w-full rounded text-white font-semibold px-4 bg-gray-800`}>
        <h4 className="font-bold text-sm py-2 underline">{data.title}</h4>
        <div className="flex pb-2">
          <div className="flex flex-col pb-1 w-full self-end">
            <span>{data.subTitle}</span>
            <span>{data.passingYear}</span>
            <span>{data.board}</span>
          </div>
          <CircularProgressBar
            className="w-1/3 h-auto"
            progress={data.pct}
            scaleColorClass="text-gray-600"
            progressColorClass="text-gray-200"
          >
            <span className="flex text-sm w-full h-full whitespace-pre justify-center items-center">{data.score}</span>
          </CircularProgressBar>
        </div>
      </div>
    ))
  }
  return (
    <AutoGrid cols={3} className={`px-2 py-1 rounded max-w-max grow`}>
      {marksheets}
    </AutoGrid>
  );
};

const Academics = (props: any) => {
  return (
    <dl className={`px-1 pt-2 grow rounded text-xs`}>
      <dt className="grow-0 max-w-max px-2 font-bold self-center">{props.label}</dt>
      <dd>
        <MarksheetsUI {...props.data.marksheets}></MarksheetsUI>
      </dd>
    </dl>
  );
};

const Qualifications = (props: any) => {
  return (
    <section className="p-2 py-4 flex w-full relative text-sm">
      <dl className="w-full relative">
        <dt className="absolute z-10 -top-1 left-4 px-2 max-w-max border-2 border-gray-800 rounded-full bg-gray-800 text-white font-bold text-xs">
          {props.label}
        </dt>
        <dd className="mt-2  border-2 border-gray-800">
          <Academics {...props.data.academics} ></Academics>
        </dd>
      </dl>
    </section>
  );
};

export default Qualifications;
