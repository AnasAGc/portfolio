import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold ">Education</h5>
          <div>
            <h5 className="my-3 text-xl font-bold ">
              {" "}
              Full Stack Web Developer.{" "}
            </h5>
            <p className="font-semibold">
              {" "}
              Abdul Aziz Al Ghurair School of Advanced Computing (ASAC){" "}
            </p>
            <p className="my-4">
              Well-qualified Full-Stack Developer with engineering background
              familiar with a wide range of programming languages., Passionate
              web Developer, looking to add value to this community.
            </p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold ">Experience</h5>
          <div>
            <h5 className="my-3 text-xl font-bold "> Team Leader. </h5>
            <p className="font-semibold"> Action Against Hunger | ACF-USA </p>
            <p className="my-4">
              responsible for overseeing and supervising the staff, day-to-day
              activities, and operations of technical staff. Manages and reports
              relevant key performance indicators. Regularly directs the work of
              at least three or more full-time employees.
            </p>
          </div>
        </div>
      </div>

      {/* languages*/}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold"> Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((lang) => (
              <Bar value={lang} key={lang.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold"> Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar value={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
