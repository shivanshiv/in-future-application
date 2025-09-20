import { useEffect, useState } from "react";

interface Application {
  _id: string;
  studentId: string;
  projectId: string;
  status: string;
  submittedAt: string;
}

function ApplicationsList() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/application")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data: Application[]) => setApplications(data))
      .catch((err) => {
        console.error("Error fetching applications:", err);
        setError("Failed to load applications.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading applications...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Applications</h1>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <ul>
          {applications.map((app) => (
            <li key={app._id}>
              <strong>{app.studentId}</strong> — {app.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApplicationsList;
