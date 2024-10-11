export type Message = {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
};

export type Media = {
  id: string;
  type: "image" | "video" | "document";
  url: string;
  fileName: string;
  fileSize: string;
};

export type Contact = {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "away" | "busy" | "offline";
  time: string;
  messages: Message[];
  media: Media[];
  attachments: Media[];
};

export type ChatState = {
  contacts: Contact[];
};

export type AddMessagePayload = {
  contactId: string;
  message: Message;
};

export type AddMediaPayload = {
  contactId: string;
  media: Media;
};
