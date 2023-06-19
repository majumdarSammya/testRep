import NavBar from "./navBar";

export default function dashboardPage() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center m-10 ">
        <iframe
          title="dashboard"
          width="800"
          height="600"
          src="https://lookerstudio.google.com/embed/reporting/b810abeb-5844-44df-af4b-779216182ae1/page/aAGCD"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen
        ></iframe>
      </div>
      <div></div>
    </div>
  );
}
