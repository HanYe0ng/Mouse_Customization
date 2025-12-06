import React from 'react';
import { Check, Scan, Brain, Layers, Sliders, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { number: 1, label: '손 스캔', icon: Scan },
    { number: 2, label: 'AI 분석', icon: Brain },
    { number: 3, label: '쉘 추천', icon: Layers },
    { number: 4, label: '커스터마이징', icon: Sliders },
    { number: 5, label: '주문 완료', icon: ShoppingCart },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00FF5A] to-[#4FF3FF]"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step) => {
            const Icon = step.icon;
            const isComplete = step.number < currentStep;
            const isCurrent = step.number === currentStep;
            const isUpcoming = step.number > currentStep;

            return (
              <div key={step.number} className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: isCurrent ? 1.1 : 1 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center relative ${
                    isComplete
                      ? 'bg-[#00FF5A] text-[#0D0F12]'
                      : isCurrent
                      ? 'bg-[#4FF3FF] text-[#0D0F12] glow-cyan'
                      : 'bg-[#111418] text-gray-500 border border-white/10'
                  }`}
                >
                  {isComplete ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </motion.div>
                <span
                  className={`mt-2 hidden sm:block ${
                    isCurrent ? 'text-[#4FF3FF]' : isComplete ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
