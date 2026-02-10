interface ComparisonRow {
  feature: string;
  others: string;
  omega: string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
  otherLabel?: string;
  omegaLabel?: string;
}

export function ComparisonTable({
  rows,
  otherLabel = "Other Agents",
  omegaLabel = "OmegaCode",
}: ComparisonTableProps) {
  return (
    <table className="comparison-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>{otherLabel}</th>
          <th>{omegaLabel}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <td>{row.feature}</td>
            <td>{row.others}</td>
            <td style={{ color: "var(--text-primary)" }}>{row.omega}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
