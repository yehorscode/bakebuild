import { Step, StepHeader, StepContent } from "./components/reproducible-step";
export default function GuidePage() {
  return (
    <div className="justify-center flex text-white align-center">
      <div className="mt-10 xl:w-2/3">
        <div className="justify-center flex flex-col p-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="smtxt text-8xl font-jaro">The Guide</h1>
            <div className="text-xl text-center font-slackey mt-3">
              <span>Welcome! Welcome to the ultimate guide page.</span>
            </div>
          </div>
        </div>
        {/*<span>content</span>*/}
        <div className="flex flex-col gap-5">
          <Step className="">
            <StepHeader>The Goal</StepHeader>
            <StepContent>
              <div className="">
                <h3>You Will...</h3>
                <ul className="">
                  <li>
                    Learn the basics of CAD by designing your own cookie cutter
                  </li>
                  <li>Get your cookie cutter printed out</li>
                  <li className="font-bold text-lg">Get cookies!!!!</li>
                </ul>
              </div>
              <img src="/src/assets/guide/cadtocookies.png" />
            </StepContent>
          </Step>
          <Step>
            <StepHeader>Getting Started</StepHeader>
            <StepContent>
              <div className="">
                <ul className="">
                  <li>First, log in or sign up to Onshape</li>
                  <li className="">
                    <span>Once signed in</span>
                    <ul className="pl-4">
                      <li>Click "Create"</li>
                      <li>Click "Document"</li>
                      <li>Name it "Cookie Cutter"</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <img src="/src/assets/guide/gettingstarted.png" />
            </StepContent>
          </Step>
          <Step>
            <StepHeader>Design Time</StepHeader>
            <StepContent>
              <div className="">
                <ul>
                  <li>
                    <span>Decide what you want to make</span>
                    <ul className="pl-4">
                      <li>Talk to your friends and brainstorm ideas</li>
                      <li>
                        Sketch an outline of it using either digital tools or
                        paper
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <img
                src="/src/assets/guide/dinooutline.png"
                className="ml-auto"
              />
            </StepContent>
          </Step>
        </div>
      </div>
    </div>
  );
}
