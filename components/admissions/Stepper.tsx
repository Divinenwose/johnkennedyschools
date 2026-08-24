import React from 'react';
import { STEP_LABELS } from './types';

interface StepperProps {
  currentStep: number; // 1-indexed
}

export const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  return (
    <div className="mb-12">
      {/* Mobile: compact "Step X of Y" + progress bar */}
      <div className="sm:hidden">
        <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-500 mb-2">
          Step {currentStep} of {STEP_LABELS.length} — {STEP_LABELS[currentStep - 1]}
        </p>
        <div className="h-1 bg-stone-300 w-full">
          <div
            className="h-1 bg-gold-500 transition-all duration-300"
            style={{ width: `${(currentStep / STEP_LABELS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop: numbered stepper */}
      <div className="hidden sm:flex items-center">
        {STEP_LABELS.map((label, index) => {
          const step = index + 1;
          const isComplete = step < currentStep;
          const isCurrent = step === currentStep;
          return (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-9 h-9 flex items-center justify-center text-xs font-semibold border transition-colors ${
                    isComplete
                      ? 'bg-navy-900 border-navy-900 text-ivory-50'
                      : isCurrent
                      ? 'bg-gold-500 border-gold-500 text-navy-950'
                      : 'bg-ivory-50 border-stone-300 text-charcoal-400'
                  }`}
                >
                  {isComplete ? '✓' : step}
                </div>
                <span
                  className={`mt-2 text-[11px] uppercase tracking-wider whitespace-nowrap ${
                    isCurrent ? 'text-navy-950 font-semibold' : 'text-charcoal-400'
                  }`}
                >
                  {label}
                </span>
              </div>
              {step < STEP_LABELS.length && (
                <div className={`flex-1 h-px mx-2 ${isComplete ? 'bg-navy-900' : 'bg-stone-300'}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
