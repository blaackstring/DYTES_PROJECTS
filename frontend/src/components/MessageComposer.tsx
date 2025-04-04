import { useState } from "react";
import { Image as ImageIcon, Send } from "lucide-react";
import { nanoid } from "nanoid";
import type { Message, Participant } from "../types";

interface Props {
  participants: Participant[];
  onSend: (message: Message) => void;
}

export default function MessageComposer({ participants, onSend }: Props) {
  const [text, setText] = useState("");
  const [senderId, setSenderId] = useState(participants[0]?.id || "");
  const [image, setImage] = useState<string>("");

  const handleSend = () => {
    if (!text.trim() && !image) return;

    onSend({
      id: nanoid(),
      senderId,
      text: text.trim(),
      image,
      timestamp: Date.now(),
    });

    setText("");
    setImage("");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-3 p-4 bg-white rounded-lg shadow">
      <select
        value={senderId}
        onChange={(e) => setSenderId(e.target.value)}
        className="w-full p-2 border rounded-lg"
      >
        {participants.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg resize-none"
          rows={3}
        />

        <div className="flex flex-col gap-2">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <ImageIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </label>

          <button
            onClick={handleSend}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <Send size={20} />
          </button>
        </div>
      </div>

      {image && (
        <div className="relative">
          <img src={image} alt="Upload preview" className="max-h-32 rounded" />
          <button
            onClick={() => setImage("")}
            className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
