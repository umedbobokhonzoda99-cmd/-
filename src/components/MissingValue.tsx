import { AlertTriangle } from 'lucide-react';

interface MissingValueProps {
  text?: string;
  className?: string;
}

export function MissingValue({ text = 'Маълумот нест', className = '' }: MissingValueProps) {
  return (
    <span
      id="missing-value-badge"
      className={`inline-flex items-center gap-1.5 text-red-600 font-semibold tracking-tight text-[13px] sm:text-[14px] ${className}`}
    >
      <AlertTriangle className="w-4 h-4 shrink-0 stroke-[2.2]" />
      <span>{text}</span>
    </span>
  );
}
