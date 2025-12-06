import React from 'react';
import { motion } from 'motion/react';
import { RotateCw } from 'lucide-react';

interface ThreeDModelViewerProps {
  type?: 'mouse' | 'hand';
  className?: string;
  animate?: boolean;
}

export default function ThreeDModelViewer({ 
  type = 'mouse', 
  className = '',
  animate = true 
}: ThreeDModelViewerProps) {
  const [rotation, setRotation] = React.useState(0);

  React.useEffect(() => {
    if (!animate) return;
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [animate]);

  return (
    <div className={`relative ${className}`}>
      {/* 3D Model Placeholder */}
      <div className="relative w-full h-full glass rounded-2xl overflow-hidden flex items-center justify-center">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 90, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 90, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* 3D Model */}
        <motion.div
          className="relative z-10"
          style={{ 
            transform: `perspective(1000px) rotateY(${rotation}deg) rotateX(15deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {type === 'mouse' ? (
            <MouseModel />
          ) : (
            <HandModel />
          )}
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00FF5A]/20 via-transparent to-[#4FF3FF]/20 pointer-events-none" />

        {/* Rotation Indicator */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 text-gray-400">
          <RotateCw className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
          <span>3D View</span>
        </div>
      </div>
    </div>
  );
}

function MouseModel() {
  return (
    <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
      {/* Main Body */}
      <div 
        className="w-32 h-48 bg-gradient-to-br from-[#111418] to-[#1a1d23] rounded-[40px] border-2 border-[#00FF5A]/30 relative"
        style={{
          transform: 'translateZ(20px)',
          boxShadow: '0 20px 60px rgba(0, 255, 90, 0.3)',
        }}
      >
        {/* Mouse Buttons */}
        <div className="absolute top-4 left-4 right-4 h-20 flex gap-1">
          <div className="flex-1 bg-white/5 rounded-t-2xl border-b border-white/10" />
          <div className="flex-1 bg-white/5 rounded-t-2xl border-b border-white/10" />
        </div>

        {/* Scroll Wheel */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4 h-8 bg-[#00FF5A]/20 rounded-full border border-[#00FF5A]" />

        {/* Side Buttons */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-12 bg-white/5 rounded-l-lg border-l border-white/10" />

        {/* LED Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#4FF3FF] rounded-full glow-cyan animate-pulse-glow" />
      </div>

      {/* Shadow */}
      <div 
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-8 bg-black/40 rounded-full blur-xl"
        style={{ transform: 'translateZ(-50px)' }}
      />
    </div>
  );
}

function HandModel() {
  return (
    <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
      {/* Palm */}
      <div 
        className="w-32 h-40 bg-gradient-to-br from-[#111418] to-[#1a1d23] rounded-3xl border-2 border-[#4FF3FF]/30 relative"
        style={{
          transform: 'translateZ(20px)',
          boxShadow: '0 20px 60px rgba(79, 243, 255, 0.3)',
        }}
      >
        {/* Measurement Points */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-[#00FF5A] rounded-full glow-green" />
        <div className="absolute top-4 right-4 w-2 h-2 bg-[#00FF5A] rounded-full glow-green" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#4FF3FF] rounded-full glow-cyan" />

        {/* Measurement Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.4 }}>
          <line x1="20" y1="20" x2="112" y2="20" stroke="#00FF5A" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="66" y1="10" x2="66" y2="130" stroke="#4FF3FF" strokeWidth="1" strokeDasharray="2,2" />
        </svg>
      </div>

      {/* Fingers Indication */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="w-3 h-12 bg-gradient-to-t from-[#111418] to-transparent rounded-t-full border border-white/10"
            style={{ 
              height: `${3 - Math.abs(i - 2)}rem`,
              transform: `translateZ(${10 - Math.abs(i - 2) * 5}px)`,
            }}
          />
        ))}
      </div>

      {/* Shadow */}
      <div 
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-8 bg-black/40 rounded-full blur-xl"
        style={{ transform: 'translateZ(-50px)' }}
      />
    </div>
  );
}
