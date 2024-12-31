import { Check } from 'lucide-react';

interface StepperProps {
  currentStep: number;
}

const BookingStepper = ({ currentStep }: StepperProps) => {
  const steps = [
    { id: 1, name: 'Package Selection' },
    { id: 2, name: 'Slot Selection' },
    { id: 3, name: 'Cart Detail' },
    { id: 4, name: 'Make Payment' },
  ];

  return (
    <div className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                    ${currentStep >= step.id 
                      ? 'bg-orange-600 border-orange-600 text-white' 
                      : 'border-gray-300 text-gray-300'
                    }`}
                >
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={`mt-2 text-sm ${
                    currentStep >= step.id ? 'text-orange-600' : 'text-gray-500'
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 w-16 mx-4 ${
                    currentStep > step.id ? 'bg-orange-600' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingStepper; 