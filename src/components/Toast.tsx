import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

type ToastProps = {
  message: string;
  onClose: () => void;
};

/** Lightweight success toast, auto-dismisses after 5 seconds. */
export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      role="status"
      className="fixed right-4 top-24 z-[70] flex max-w-[calc(100vw-2rem)] animate-[fade-up_0.4s_ease-out_both] items-start gap-3 rounded-2xl border border-teal-200 bg-white p-4 pr-10 shadow-[0_20px_50px_-20px_rgba(12,33,56,0.5)] sm:max-w-sm"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-600">
        <CheckCircle2 className="h-6 w-6" />
      </span>
      <div>
        <p className="font-display text-sm font-bold text-navy-900">
          Appointment Requested!
        </p>
        <p className="mt-0.5 text-sm leading-snug text-navy-500">{message}</p>
      </div>
      <button
        onClick={onClose}
        aria-label="Dismiss"
        className="absolute right-3 top-3 text-navy-300 transition hover:text-navy-600"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
