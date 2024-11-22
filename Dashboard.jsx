import UploadForm from "../components/UploadForm";
import ReportTable from "../components/ReportTable";

export default function Dashboard() {
  const dummyReports = [
    { title: "Research Paper 1", author: "John Doe", url: "#" },
    { title: "Project Report", author: "Jane Doe", url: "#" },
  ];

  return (
    <div className="p-5">
      <UploadForm />
      <h2 className="text-xl font-bold mt-10 mb-4">Available Reports</h2>
      <ReportTable reports={dummyReports} />
    </div>
  );
}
