import React from "react";

export default function ChatSettings({ settings, onUpdate }) {
  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold">Chat Settings</h2>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Header Title
          </label>
          <input
            type="text"
            value={settings.headerTitle}
            onChange={(e) =>
              onUpdate({ ...settings, headerTitle: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Day Label
          </label>
          <input
            type="text"
            value={settings.dayLabel}
            onChange={(e) =>
              onUpdate({ ...settings, dayLabel: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Background Color
          </label>
          <input
            type="color"
            value={settings.backgroundColor}
            onChange={(e) =>
              onUpdate({ ...settings, backgroundColor: e.target.value })
            }
            className="w-full h-10 rounded cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
