import { useEffect } from 'react';

export default function Toast({ message, type = 'success', onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const bgColor = type === 'error' ? 'bg-red-100 border-red-400 text-red-700' : 
                  type === 'warning' ? 'bg-yellow-100 border-yellow-400 text-yellow-700' : 
                  'bg-green-100 border-green-400 text-green-700';

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className={`${bgColor} border px-4 py-3 rounded-lg shadow-lg flex items-center justify-between`}>
        <span className="block sm:inline">{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-lg font-semibold leading-none"
        >
          &times;
        </button>
      </div>
    </div>
  );
}