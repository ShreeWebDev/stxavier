'use client';

import Image from 'next/image';
import { GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function SchoolLogo({
  size,
  priority,
  className = '',
}: {
  size: number;
  priority?: boolean;
  className?: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <div
        className={`flex items-center justify-center text-[#D62828] ${className}`}
        style={{ width: size, height: size }}
        aria-label="St. Xavier's High School Logo"
      >
        <GraduationCap
          style={{
            width: Math.max(18, Math.floor(size * 0.55)),
            height: Math.max(18, Math.floor(size * 0.55)),
          }}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Image
        src="/logo.png"
        alt="St. Xavier's High School Logo"
        fill
        sizes={`${size}px`}
        className="object-contain"
        priority={priority}
        onError={() => setImageFailed(true)}
      />
    </div>
  );
}

