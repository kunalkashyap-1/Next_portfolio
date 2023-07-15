import config from "../config";

export default function skills() {
  return (
    <div >
      <div>
        <div>
          <h1 id="Skills">Skills</h1>
          <span></span>
          <div>
            <div>
              <h2>
                <span></span>
                <span>Development</span>
              </h2>
              <ul>
                {config.skills.dev.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <div>
                <h2>
                  <span></span>
                  <span>Tools</span>
                </h2>
                <ul>
                  {config.skills.tools.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
