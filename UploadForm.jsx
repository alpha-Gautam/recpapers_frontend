import { useState } from 'react';

export default function UploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    console.log('Uploading:', file);
  };

  return (
    <form onSubmit={handleUpload} className="max-w-md mx-auto mt-10 bg-gray-100 p-5 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Upload Report</h2>
      <div className="mb-4">
        <input type="file" onChange={handleFileChange} className="w-full border p-2 rounded" />
      </div>
      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">Upload</button>
    </form>
  );
}
