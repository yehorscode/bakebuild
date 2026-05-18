import "./home.scss";
import cookie1 from "@/assets/cookie1.png";
import cookie2 from "@/assets/cookie2.png";
import stars from "@/assets/stars.png";
import belt from "@/assets/belt.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function Home() {
  return (
    <div className="flex-1">
      <section
        className="relative text-white border-5 flex flex-col h-screen w-full justify-center overflow-hidden"
        // style={{
        //   backgroundImage: `url("https://i.ibb.co/5hxNqBK1/top-view-paper-texture.jpg")`,
        // }}
      >
        <div className="flex flex-col justify-center items-center">
          <img
            src={cookie1}
            className="absolute w-40  top-10 -right-10 cookie"
          />
          <img
            src={cookie1}
            className="absolute w-60 bottom-10 -left-20 cookie2"
          />
          <img
            src={cookie2}
            className="absolute w-50 top-20 -left-20 cookie2"
          />
          <img
            src={cookie2}
            className="absolute w-50 bottom-19 -right-20 cookie"
          />
          {/*<img src="src/assets/cut.png" className="w-250" />*/}
          <h1 className="relative z-5 text-[35vw] lg:text-[280px] xl:text-[360px] -mt-30 font-jaro uppercase inline-flex flex-col w-fit leading-none">
            <img
              src={stars}
              className="absolute -top-12 -left-10 -translate-x-1/2 w-100 pointer-events-none"
            />
            <img
              src={stars}
              className="absolute -bottom-12 -right-10 translate-x-1/2 rotate-180 w-100 pointer-events-none"
            />
            <div className="flex flex-col gap-30">
              <span className="txtshdw z-50 flex w-full text-shadow-accent justify-between">
                <span>B</span>
                <span>A</span>
                <span>K</span>
                <span>E</span>
              </span>

              <span className="txtshdw z-50">BUILD</span>
            </div>
            <img
              src="src/assets/sticker.png"
              className="absolute z-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
          </h1>

          <span className="txtstroke2 px-5 sm:px-0 text-xl sm:text-2xl lg:text-4xl font-slackey">
            Make your own cookie cutter and get it shipped to you!
          </span>
          <div className="flex gap-3 mt-5">
            <Tooltip>
              <TooltipTrigger className="underline border-2 px-5 py-2 text-xl rounded-xl font-milkyway">
                Make It
              </TooltipTrigger>
              <TooltipContent>Learn how to make it</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="underline group border-2 border-dashed px-5 py-2 text-xl rounded-xl font-milkyway">
                Bake It
              </TooltipTrigger>
              <TooltipContent>
                <span>Ship your project!</span>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="belt-container absolute bottom-0">
          <div className="belt-track">
            <div className="belt-group">
              <img className="belt-image" src={belt} />
              <img className="belt-image" src={belt} />
            </div>
            <div className="belt-group" aria-hidden="true">
              <img className="belt-image" src={belt} />
            </div>
          </div>
        </div>
      </section>
      <section className="relative border-5 text-white flex flex-col  w-full overflow-hidden">
        <div className="justify-center flex flex-col p-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="smtxt text-8xl font-jaro">Make it!</h1>
            <div className="text-2xl font-slackey underline">
              <a href="/somepath">Don't know how? Click here for a tutorial</a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 font-jaro text-2xl mt-5 items-start w-fit mx-auto">
            <span className="flex border p-2 rounded-sm flex-col items-center text-center gap-3 max-w-[290px] mx-auto">
              <img
                src="src/assets/dimensions.png"
                className="w-full max-w-50"
              />
              <span>Maximum 100x100x100mm on each cutter</span>
            </span>
            <span className="flex border p-2 rounded-sm flex-col items-center text-center gap-3 max-w-[290px] mx-auto">
              <img src="src/assets/prefed.png" className="w-full max-w-50" />
              <span>Any CAD software accepted, but Onshape preferred!</span>
            </span>
            <span className="flex border p-2 rounded-sm flex-col items-center text-center gap-3 max-w-[290px] mx-auto sm:col-span-2 lg:col-span-1">
              <img
                src="src/assets/clubcutters.png"
                className="w-full max-w-50"
              />
              <span>Up to 3 cutters per person for clubs!</span>
            </span>
            <span className="flex border p-2 rounded-sm flex-col items-center text-center gap-3 max-w-[290px] mx-auto">
              <img src="src/assets/3cutters.png" className="w-full max-w-50" />
              <span>3 cutters REQUIRED for individuals</span>
            </span>
            <a
              href="/somepath"
              className="underline border p-2 rounded-sm flex flex-col items-center text-center gap-3 max-w-[290px] mx-auto"
            >
              <img src="src/assets/guidehere.png" className="w-full max-w-50" />
              <span>Guide Available!</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
