import { Check } from 'lucide-react';

interface StepperProps {
  steps: {
    label: string;
    completed?: boolean;
    active?: boolean;
    upcoming?: boolean;
  }[];
}

const BookingStepper = ({ steps }: StepperProps) => {
  return (
    <div className="flex justify-between items-center">
      {steps.map((step, index) => (
        <div key={step.label} className="flex items-center">
          <div className="relative">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step.completed
                  ? 'bg-orange-600 text-white'
                  : step.active
                  ? 'border-2 border-orange-600 text-orange-600'
                  : 'border-2 border-gray-300 text-gray-300'
              }`}
            >
              {step.completed ? (
                '✓'
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div className="mt-2 text-xs text-center whitespace-nowrap">
              {step.label}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-0.5 w-full mx-2 ${
                step.completed ? 'bg-orange-600' : 'bg-gray-300'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BookingStepper; 