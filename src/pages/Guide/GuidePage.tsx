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
                  <li>
                    Make sure it has a simple outline, like this loch ness
                    monster!
                  </li>
                  <li>
                    Once you've got your outline, save an image of it and return
                    to Onshape
                  </li>
                </ul>
              </div>
              <img
                src="/src/assets/guide/dinooutline.png"
                className="ml-auto "
              />
            </StepContent>
          </Step>
          <Step>
            <StepHeader>Importing The Image</StepHeader>
            <StepContent>
              <div className="">
                <ul>
                  <li>
                    Now that you have your template, we can start designing!
                  </li>
                  <li>
                    <span>
                      Click the Plus Sign next to Part Studio and dropdown menu
                      should appear (bottom left corner){" "}
                      <ul className="pl-4">
                        <li>Click on the last option "Import"</li>
                      </ul>
                    </span>
                  </li>
                  <li>Select your chosen file and click "Open"</li>
                  <li>Message will confirm when the image has been imported</li>
                </ul>
              </div>
              <img src="src/assets/guide/importingtheimage.png" />
            </StepContent>
          </Step>
          <Step>
            <StepHeader>Inserting The Image</StepHeader>
            <StepContent>
              <div className="">
                <ul>
                  <li>Click "Sketch" in the top left</li>
                  <li>
                    <span>
                      Click the "Top" plane{" "}
                      <ul className="ml-4">
                        <li>
                          Might help to change your POV by clicking the top side
                          of the cube in the top right
                        </li>
                        <li>"Top plane" should appear under "Sketch plane"</li>
                      </ul>
                    </span>
                  </li>
                  <li>
                    Find the folder icon (top middle) and click the drop down
                  </li>
                  <li>Press "Insert image"</li>
                </ul>
              </div>
              <img src="src/assets/guide/insertingtheimage.png" />
            </StepContent>
          </Step>
          <Step>
            <StepHeader>Inserting The Image</StepHeader>
            <StepContent>
              <div className="">
                <ul>
                  <li>Choose your image from the pop-up</li>
                  <li>A message should appear saying "Draw image rectangle"</li>
                  <li>Click and drag to insert the image</li>
                  <li className="underline">DO NOT CONFIRM YOUR SKETCH YET</li>
                </ul>
              </div>
              <img src="src/assets/guide/insertingtheimage2.png" />
            </StepContent>
          </Step>
          <Step>
            <StepHeader>Dimension</StepHeader>
            <StepContent>
              <ul>
                <li>Click the "Dimension" tool or press "d"</li>
                <li>Click any 2 corners</li>
                <li>
                  Drag your mouse to the outside of the border, and lines and a
                  number should appear, then click again
                </li>
                <li>
                  <span>The number is the size of your image</span>
                  <ul>
                    <li>
                      In general your outline probably shouldn't be over 4in x
                      4in or 100mm x 100mm
                    </li>
                  </ul>
                </li>
              </ul>
              <img src="src/assets/guide/dimension.png" />
            </StepContent>
          </Step>
          <Step>
            <StepHeader>Tracing</StepHeader>
            <StepContent>
              <ul>
                <li>
                  Once you have your image inserted and properly dimensioned you
                  can starts tracing! DO NOT PRESS THE GREEN CHECKMARK YET!!
                </li>
                <li>
                  <span>
                    Use the spline tool and click along your outline to trace it
                    out
                  </span>
                  <ul>
                    <li></li>
                  </ul>
                </li>
              </ul>
            </StepContent>
          </Step>
        </div>
      </div>
    </div>
  );
}
