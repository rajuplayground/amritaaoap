import ApplicationsPanel from "../components/applications-panel";
import ApplicationStats from "./components/ApplicationStats";

export default function Page() {
  return (
    <>
      <ApplicationStats />
      <div className="h-10"></div>
      <ApplicationsPanel />
    </>
  );
}
