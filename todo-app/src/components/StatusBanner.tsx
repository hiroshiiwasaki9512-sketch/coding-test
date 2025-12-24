interface StatusBannerProps {
  message: string;
  tone?: 'success' | 'error' | 'info';
}

export function StatusBanner({ message, tone = 'info' }: StatusBannerProps) {
  if (!message) return null;

  return <p className={`status-banner ${tone}`}>{message}</p>;
}
