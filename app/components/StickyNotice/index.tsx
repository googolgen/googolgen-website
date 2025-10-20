'use client';
import { useState } from 'react';
import Link from 'next/link';

const notice = {
  label: "🎓 Join our Free Online Session on Artificial Intelligence and Your Future",
  date: "25th August, 11:00 AM",
  link: "https://forms.gle/VXQ66rw9E83rLDA96"
};

export default function StickyNotice() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="sticky bottom-0 z-50 bg-black text-white px-4 py-3 flex items-center justify-between shadow-md">
      <div className="flex flex-col flex-grow justify-center sm:flex-row sm:items-center gap-2">
        <p className="font-medium text-justify">
          {notice.label} – <span className="underline">{notice.date}</span>
        </p>
        <Link
          href={notice.link}
          target="_blank"
          className="text-sm bg-[#173fae] text-center text-blue-600 font-semibold px-3 py-1 rounded hover:bg-gray-100 transition"
        >
          Register Now
        </Link>
      </div>
      <button
        onClick={() => setShow(false)}
        className="ml-4 text-white hover:text-gray-200 text-lg font-bold"
        aria-label="Close notice"
      >
        ×
      </button>
    </div>
  );
}
