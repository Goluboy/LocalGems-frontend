// src/components/Moderator/StatusBadge.tsx
import { CheckCircle, Hourglass, XCircle } from "lucide-react";

type Status = "published" | "moderation" | "rejected";

const statusConfig = {
  published: {
    icon: CheckCircle,
    color: "text-green-600",
    label: "Опубликовано",
  },
  moderation: {
    icon: Hourglass,
    color: "text-orange-500",
    label: "На модерации",
  },
  rejected: {
    icon: XCircle,
    color: "text-red-500",
    label: "Отклонено",
  },
};

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const StatusBadge = ({ status, className = "" }: StatusBadgeProps) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span className={`flex items-center gap-1 text-sm font-medium ${config.color} ${className}`}>
      <Icon className="w-4 h-4" strokeWidth={2} />
      {config.label}
    </span>
  );
};

export default StatusBadge;