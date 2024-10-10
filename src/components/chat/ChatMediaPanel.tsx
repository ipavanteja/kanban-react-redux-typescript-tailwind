import React from "react";

const media = { img: "https://via.placeholder.com/100" };
const attachments = [
  { name: "service-task.pdf", size: "2MB" },
  { name: "homepage-design.fig", size: "3MB" },
  { name: "about-us.html", size: "1KB" },
  { name: "work-project.zip", size: "20MB" },
  { name: "custom.js", size: "2MB" },
];

const ChatMediaPanel = () => {
  return (
    <div className="w-1/4 border-1 border-gray-200 p-4 bg-gray-50">
      {/* Media Section */}
      <h2 className="text-lg font-semibold mb-4">Media</h2>
      <div className="mb-6">
        <img src={media.img} alt="Media" className="rounded-lg w-full" />
      </div>
      {/* Attachments */}
      <h2 className="text-lg font-semibold mb-4">Attachments</h2>
      <div className="space-y-4">
        {attachments.map((attachment, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 bg-white rounded-lg shadow-sm hover:shadow-md"
          >
            <div className="flex items-center space-x-2">
              <i></i>
              <p> {attachment.name} </p>
            </div>
            <p className="text-xs text-gray-500"> {attachment.size} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMediaPanel;
