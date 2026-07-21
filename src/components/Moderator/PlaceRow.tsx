// src/components/Moderator/PlaceRow.tsx
import type { Place } from "../../data/mockPlaces";
import StatusBadge from "./StatusBadge";

interface PlaceRowProps {
  place: Place;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onApprove?: (id: string) => void;
  isProcessing?: boolean;
}

const PlaceRow = ({ place, onEdit, onDelete, onApprove, isProcessing = false }: PlaceRowProps) => {
  const id = String(place.id);

  return (
    <tr className={`hover:bg-gray-50 transition ${isProcessing ? "opacity-50" : ""}`}>
      <td className="px-4 py-3 text-sm text-gray-900">{place.name}</td>
      <td className="px-4 py-3 text-sm text-gray-600">{place.category}</td>
      <td className="px-4 py-3 text-sm text-gray-600">{place.address}</td>
      <td className="px-4 py-3">
        <StatusBadge status={place.status} />
      </td>
      <td className="px-4 py-3 text-sm whitespace-nowrap">
        {place.status === "moderation" ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => onEdit(id)}
              disabled={isProcessing}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Редактировать
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => onApprove?.(id)}
              disabled={isProcessing}
              className="text-sm font-medium text-green-600 hover:text-green-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? "Обработка..." : "Утвердить"}
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => onDelete(id)}
              disabled={isProcessing}
              className="text-sm font-medium text-red-500 hover:text-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? "Обработка..." : "Удалить"}
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => onEdit(id)}
              disabled={isProcessing}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Редактировать
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => onDelete(id)}
              disabled={isProcessing}
              className="text-sm font-medium text-red-500 hover:text-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Удалить
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default PlaceRow;