interface StatusBadgeProps {
  status: "available" | "coming-soon" | "beta";
  label?: string;
}

const DEFAULT_LABELS: Record<StatusBadgeProps["status"], string> = {
  available: "Available now",
  "coming-soon": "Coming soon",
  beta: "Beta",
};

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const text = label ?? DEFAULT_LABELS[status];
  const statusClass =
    status === "available"
      ? "status-available"
      : status === "coming-soon"
        ? "status-coming-soon"
        : "status-beta";

  return (
    <span className={`status-badge ${statusClass}`}>
      <span className="status-dot" />
      {text}
    </span>
  );
}
