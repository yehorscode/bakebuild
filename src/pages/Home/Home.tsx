import "./home.scss";
import cookie1 from "@/assets/cookie1.webp";
import cookie2 from "@/assets/cookie2.webp";
import stars from "@/assets/stars.webp";
import belt from "@/assets/belt.svg";
import sticker from "@/assets/sticker.webp";
import dimensions from "@/assets/dimensions.webp";
import prefed from "@/assets/prefed.webp";
import clubCutters from "@/assets/clubcutters.webp";
import threeCutters from "@/assets/3cutters.webp";
import noHackatime from "@/assets/nohackatime.webp";
import guideHere from "@/assets/guidehere.webp";
import teachingDino from "@/assets/teachingdino.webp";
import bakeit from "@/assets/bakeit.webp";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import HomeGallery from "./components/gallery";

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
            className="absolute w-40 top-10 -right-10 cookie"
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
          {/*<img src="src/assets/cut.webp" className="w-250" />*/}
          <h1 className="relative z-5 text-[30vw] lg:text-[280px] xl:text-[30vh] -mt-10 font-jaro uppercase inline-flex flex-col w-fit leading-none">
            <img
              fetchPriority="low"
              src={stars}
              className="absolute invisible sm:visible -top-12 -left-10 -translate-x-1/2 w-100 pointer-events-none"
            />
            <img
              fetchPriority="low"
              src={stars}
              className="absolute invisible sm:visible -bottom-12 -right-10 translate-x-1/2 rotate-180 w-100 pointer-events-none"
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
              src={sticker}
              className="absolute w-75 sm:w-[55vw] lg:w-125 xl:w-[50vh]  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
          </h1>

          <span className="txtstroke2 px-5 lg:px-5 text-md text-center z-50 sm:text-2xl lg:text-3xl font-slackey">
            Make your own cookie cutter and get it shipped to you!
          </span>
          <div className="flex gap-3 z-100 mt-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#make-it"
                  className="underline border-2 px-5 py-2 text-xl rounded-xl font-milkyway"
                >
                  Make It
                </a>
              </TooltipTrigger>
              <TooltipContent>Learn how to make it</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#bake-it"
                  className="underline group border-2 border-dashed px-5 py-2 text-xl rounded-xl font-milkyway"
                >
                  Bake It
                </a>
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
              <img className="belt-image h-[10vh]" src={belt} />
              <img className="belt-image h-[10vh]" src={belt} />
            </div>
            <div className="belt-group" aria-hidden="true">
              <img className="belt-image h-[10vh]" src={belt} />
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative border-5 text-white flex flex-col  w-full overflow-hidden"
        id="make-it"
      >
        <div className="justify-center flex flex-col p-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="smtxt text-6xl sm:text-8xl font-jaro">Make it!</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 font-jaro text-2xl mt-5 items-start w-fit mx-auto">
            <span className="flex border p-2 rounded-sm flex-col items-center text-center gap-3 max-w-[290px] mx-auto">
              <img src={dimensions} className="w-full max-w-50" />
              <span>Maximum 100x100x100mm on each cutter</span>
            </span>
            <span className="flex border p-2 rounded-sm flex-col items-center text-center gap-3 max-w-[290px] mx-auto">
              <img src={prefed} className="w-full max-w-50" />
              <span>Any CAD software accepted, but Onshape preferred!</span>
            </span>
            <span className="flex border p-2 rounded-sm flex-col items-center text-center gap-3 max-w-[290px] mx-auto sm:col-span-2 lg:col-span-1">
              <img
                src={clubCutters}
                className="w-full max-w-50"
                fetchPriority="low"
              />
              <span>Up to 3 cutters per person for clubs!</span>
            </span>
            <span className="flex border p-2 rounded-sm flex-col items-center text-center gap-3 max-w-[290px] mx-auto">
              <img
                src={threeCutters}
                className="w-full max-w-50"
                fetchPriority="low"
              />
              <span>3 cutters REQUIRED for individuals</span>
            </span>
            <span className="flex border p-2 rounded-sm flex-col items-center text-center gap-3 max-w-[290px] mx-auto">
              <img
                src={noHackatime}
                className="w-full max-w-30"
                fetchPriority="low"
              />
              <span>Time tracking not required!</span>
            </span>
            <a
              href="/guide"
              className="underline border p-2 rounded-sm flex flex-col items-center text-center gap-3 max-w-[290px] mx-auto"
            >
              <img src={guideHere} className="w-full max-w-50" />
              <span>Guide Available!</span>
            </a>
          </div>
          <div className="text-xl mt-5 text-center font-slackey underline">
            <a href="/guide">Don't know how? Click here for a tutorial</a>
          </div>
          {/*<div className="flex flex-col justify-center items-center">
            <span className="text-xl font-jaro mt-5">
              You can print cookie cutters on your own printer too! (no filament
              grants)
            </span>
          </div>*/}
        </div>
      </section>
      <section
        className="relative border-5 text-white flex flex-col  w-full overflow-hidden"
        id="bake-it"
      >
        <div className="justify-center flex flex-col items-center  p-10">
          <div className="flex mb-5 flex-col justify-center items-center">
            <h1 className="smtxt  text-6xl sm:text-8xl font-jaro">Bake it!</h1>
          </div>
          <img src={bakeit} fetchPriority="low" className="lg:max-w-[50vw]" />
          <p className="text-xl mt-3 font-jaro max-w-2xl">
            You can print your own cookie cutters on your own 3d printer (no
            filament grants tho) or you may request them to be shipped to your
            house from Hack Club hq
          </p>
          <div className="text-xl mt-5 text-center font-slackey underline">
            <a href="https://hack.club/submit-bakebuild">
              Submit your project here
            </a>
          </div>
        </div>
      </section>
      <section className="relative border-5 text-white xl:px-50 2xl:px-80 flex flex-col  w-full overflow-hidden">
        <div className="justify-center flex flex-col p-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="smtxt text-6xl sm:text-8xl font-jaro">
              Past workshops
            </h1>
            <div className="mt-5 text-xl text-center flex flex-col  font-jaro">
              <HomeGallery />
              <div className="flex flex-col mt-3">
                <span>Looks cool doesn't it?</span>
                <a
                  className="text-xl text-center font-slackey underline"
                  href="/gallery"
                >
                  View more images in our gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative border-5 text-white xl:px-50 2xl:px-80 flex flex-col bg-red-400  w-full overflow-hidden">
        <div className="justify-center items-center flex flex-col p-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="smtxt text-6xl sm:text-8xl font-jaro">
              Run a workshop!
            </h1>
          </div>
          <img src={teachingDino} fetchPriority="low" />
          <div className="max-w-3xl">
            <span className="text-3xl font-jaro">Hey club leader!</span>
            <p className="text-lg ">
              Have you ever wanted to run a BakeBuild workshop in your club?
              Yes? Everyone wants that. It's actually pretty easy! To run a
              workshop you <b>must</b> have first completed BakeBuild. Do you
              want to learn more? <a className="underline">click here</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
