import React, { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

const SuccessPopup = ({
  isVisible,
  onClose,
  title = "تم بنجاح!",
  description = "تمت العملية بنجاح",
  duration = 4000,
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Popup Content */}
      <div className="relative bg-[#1a1a1a] rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-500 ease-out animate-popup">
        {/* Close Button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 left-4 transition-colors duration-200"
            style={{
              color: "#b59f8d",
            }}
          >
            <X size={20} />
          </button>
        )}

        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 rounded-full p-3 animate-bounce-slow">
            <CheckCircle className="text-green-600 w-12 h-12" />
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold text-center mb-3"
          style={{ color: "#fff", textShadow: "0 1px 4px #63504788" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-center leading-relaxed" style={{ color: "#f5ede7" }}>
          {description}
        </p>

        {/* Progress Bar (optional) */}
        {duration > 0 && (
          <div
            className="mt-6 rounded-full h-1"
            style={{
              background: "rgba(99, 80, 71, 0.25)",
            }}
          >
            <div
              className="h-1 rounded-full animate-progress"
              style={{
                background: "linear-gradient(90deg, #b59f8d 0%, #635047 100%)",
                animationDuration: `${duration}ms`,
              }}
            />
          </div>
        )}

        {/* CSS للأنيميشن المخصص */}
        <style>
          {` @keyframes popup {
                    0% {
                      opacity: 0;
                      transform: scale(0.8) translateY(20px);
                    }
        
                    100% {
                      opacity: 1;
                      transform: scale(1) translateY(0);
                    }
                  }
        
                  @keyframes bounce-slow {
        
                    0%,
                    100% {
                      transform: translateY(0);
                    }
        
                    50% {
                      transform: translateY(-10px);
                    }
                  }
        
                  @keyframes progress {
                    0% {
                      width: 100%;
                    }
        
                    100% {
                      width: 0%;
                    }
                  }
        
                  .animate-popup {
                    animation: popup 0.5s ease-out;
                  }
        
                  .animate-bounce-slow {
                    animation: bounce-slow 2s infinite;
                  }
        
                  .animate-progress {
                    animation: progress linear;
                    animation-fill-mode: forwards;
                  }
        
                  `}
        </style>
      </div>
    </div>
  );
};

export const useSuccessPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [config, setConfig] = useState({});

  const showPopup = (options) => {
    setConfig(options);
    setIsVisible(true);
  };

  const hidePopup = () => setIsVisible(false);

  return {
    showPopup,
    PopupComponent: () => (
      <SuccessPopup
        title={undefined}
        description={undefined}
        isVisible={isVisible}
        onClose={hidePopup}
        {...config}
      />
    ),
  };
};
