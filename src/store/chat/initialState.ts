import { ChatState } from "./types";

export const initialState: ChatState = {
  contacts: [
    {
      id: "1",
      name: "James Johnson",
      avatar:
        "https://modernize-react.adminmart.com/assets/user-1-6d05e3ce.jpg",
      status: "online",
      time: "13 minutes",
      messages: [
        {
          id: "m1",
          sender: "James Johnson",
          text: "Wa luvocji hul wepigulus mobohu.",
          timestamp: "2 hours ago",
        },
        {
          id: "m2",
          sender: "James Johnson",
          text: "Vobmo ovru wime zur berega uchim fb wu hilo rouh.",
          timestamp: "2 hours ago",
        },
        {
          id: "m3",
          sender: "John Deo",
          text: "Ururun wedagelab mad na rab.",
          timestamp: "1 hour ago",
        },
        {
          id: "m4",
          sender: "John Deo",
          text: "Matlici tu famo ijanocali gojik.",
          timestamp: "ago",
        },
      ],
      media: [
        {
          id: "img1",
          type: "image",
          url: "media-url-1",
          fileName: "cylinders.jpg",
          fileSize: "1MB",
        },
      ],
      attachments: [
        {
          id: "file1",
          type: "document",
          url: "service-task.pdf",
          fileName: "service-task.pdf",
          fileSize: "2MB",
        },
        {
          id: "file2",
          type: "document",
          url: "homepage-design.fig",
          fileName: "homepage-design.fig",
          fileSize: "3MB",
        },
        {
          id: "file3",
          type: "document",
          url: "about-us.html",
          fileName: "about-us.html",
          fileSize: "1KB",
        },
        {
          id: "file4",
          type: "document",
          url: "work-project.zip",
          fileName: "work-project.zip",
          fileSize: "20MB",
        },
        {
          id: "file5",
          type: "document",
          url: "custom.js",
          fileName: "custom.js",
          fileSize: "2MB",
        },
      ],
    },
    {
      id: "2",
      name: "Maria Hernandez",
      avatar:
        "https://modernize-react.adminmart.com/assets/user-2-8a001bcb.jpg",
      status: "away",
      time: "13 minutes",
      messages: [
        {
          id: "m5",
          sender: "Maria Hernandez",
          text: "Komrimgir kubsief odcimtu hepiti fakmof.",
          timestamp: "1 hour ago",
        },
        {
          id: "m6",
          sender: "John Deo",
          text: "Laravel ema iwrinoto liuza owken.",
          timestamp: "ago",
        },
        {
          id: "m7",
          sender: "Maria Hernandez",
          text: "fsfsds",
          timestamp: "3 minutes ago",
        },
      ],
      media: [
        {
          id: "img2",
          type: "image",
          url: "media-url-2",
          fileName: "cylinders.jpg",
          fileSize: "1MB",
        },
      ],
      attachments: [
        {
          id: "file1",
          type: "document",
          url: "service-task.pdf",
          fileName: "service-task.pdf",
          fileSize: "2MB",
        },
        {
          id: "file2",
          type: "document",
          url: "homepage-design.fig",
          fileName: "homepage-design.fig",
          fileSize: "3MB",
        },
        {
          id: "file3",
          type: "document",
          url: "work-project.zip",
          fileName: "work-project.zip",
          fileSize: "20MB",
        },
        {
          id: "file4",
          type: "document",
          url: "custom.js",
          fileName: "custom.js",
          fileSize: "2MB",
        },
      ],
    },
    {
      id: "3",
      name: "David Smith",
      avatar:
        "https://modernize-react.adminmart.com/assets/user-3-94da4ac7.jpg",
      status: "busy",
      time: "13 minutes",
      messages: [
        {
          id: "m8",
          sender: "David Smith",
          text: "Hoz zosdo vo le savefs.",
          timestamp: "1 hour ago",
        },
        {
          id: "m9",
          sender: "David Smith",
          text: "Ibo cumolal hik os lu.",
          timestamp: "1 hour ago",
        },
      ],
      media: [],
      attachments: [
        {
          id: "file1",
          type: "document",
          url: "service-task.pdf",
          fileName: "service-task.pdf",
          fileSize: "2MB",
        },
        {
          id: "file2",
          type: "document",
          url: "custom.js",
          fileName: "custom.js",
          fileSize: "2MB",
        },
      ],
    },
    {
      id: "4",
      name: "Maria Rodriguez",
      avatar:
        "https://modernize-react.adminmart.com/assets/user-4-a9b2728d.jpg",
      status: "offline",
      time: "13 minutes",
      messages: [
        {
          id: "m5",
          sender: "Maria Hernandez",
          text: "Komrimgir kubsief odcimtu hepiti fakmof.",
          timestamp: "1 hour ago",
        },
        {
          id: "m6",
          sender: "John Deo",
          text: "Laravel ema iwrinoto liuza owken.",
          timestamp: "ago",
        },
        {
          id: "m7",
          sender: "Maria Hernandez",
          text: "fsfsds",
          timestamp: "3 minutes ago",
        },
      ],
      media: [
        {
          id: "img2",
          type: "image",
          url: "media-url-2",
          fileName: "cylinders.jpg",
          fileSize: "1MB",
        },
      ],
      attachments: [
        {
          id: "file1",
          type: "document",
          url: "service-task.pdf",
          fileName: "service-task.pdf",
          fileSize: "2MB",
        },
        {
          id: "file2",
          type: "document",
          url: "homepage-design.fig",
          fileName: "homepage-design.fig",
          fileSize: "3MB",
        },
        {
          id: "file3",
          type: "document",
          url: "work-project.zip",
          fileName: "work-project.zip",
          fileSize: "20MB",
        },
        {
          id: "file4",
          type: "document",
          url: "custom.js",
          fileName: "custom.js",
          fileSize: "2MB",
        },
      ],
    },
  ],
};
