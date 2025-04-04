import type { Message, Participant, ChatSettings } from "../types";

interface Props {
  messages: Message[];
  participants: Participant[];
  settings: ChatSettings;
}

export default function ChatPreview({
  messages,
  participants,
  settings,
}: Props) {
  const formatTime = (timestamp: number) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(new Date(timestamp));
  };

  return (
    <div
      id="chat-preview"
      className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
      style={{ backgroundColor: settings.backgroundColor }}
    >
      {/* Header */}
      <div className="px-4 py-3 bg-gray-800 text-white">
        <h2 className="text-center font-medium">{settings.headerTitle}</h2>
      </div>

      {/* Day Label */}
      <div className="text-center py-2 text-sm text-gray-500">
        {settings.dayLabel}
      </div>

      {/* Messages */}
      <div className="p-4 space-y-4">
        {messages.map((message) => {
          const sender = participants.find((p) => p.id === message.senderId);
          if (!sender) return null;

          return (
            <div key={message.id} className="flex gap-3">
              <div
                className="w-1 rounded-full"
                style={{ backgroundColor: sender.color }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{sender.name}</span>
                  <span className="text-sm text-gray-500">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
                <p className="text-gray-700">{message.text}</p>
                {message.image && (
                  <img
                    src={message.image}
                    alt="Message attachment"
                    className="mt-2 rounded-lg max-w-xs"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
