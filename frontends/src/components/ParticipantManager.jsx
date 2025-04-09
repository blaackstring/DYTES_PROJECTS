import React from "react";
import { Plus, Trash2, User } from "lucide-react";
import { nanoid } from "nanoid";

export default function ParticipantManager({ participants, onUpdate }) {
  const addParticipant = () => {
    const newParticipant = {
      id: nanoid(),
      name: `User ${participants.length + 1}`,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      icon: "user",
    };
    onUpdate([...participants, newParticipant]);
  };

  const updateParticipant = (id, updates) => {
    onUpdate(participants.map((p) => (p.id === id ? { ...p, ...updates } : p)));
  };

  const removeParticipant = (id) => {
    onUpdate(participants.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Participants</h2>
        <button
          onClick={addParticipant}
          className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <Plus size={16} />
          Add Participant
        </button>
      </div>

      <div className="space-y-3">
        {participants.map((participant) => (
          <div
            key={participant.id}
            className="flex items-center gap-3 p-3 bg-white rounded-lg shadow"
          >
            <User size={24} className="text-gray-500" />

            <input
              type="text"
              value={participant.name}
              onChange={(e) =>
                updateParticipant(participant.id, { name: e.target.value })
              }
              className="flex-1 px-2 py-1 border rounded"
              placeholder="Name"
            />

            <input
              type="color"
              value={participant.color}
              onChange={(e) =>
                updateParticipant(participant.id, { color: e.target.value })
              }
              className="w-10 h-8 rounded cursor-pointer"
            />

            <button
              onClick={() => removeParticipant(participant.id)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
