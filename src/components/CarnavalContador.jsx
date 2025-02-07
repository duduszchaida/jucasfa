import React, { useState, useEffect } from "react";
import {
  X,
  PartyPopper,
  Music2,
  VenetianMask,
  Sparkles,
  SettingsIcon as Confetti,
} from "lucide-react";

function CarnavalContador() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const carnival = new Date("2025-03-06T00:00:00");
      const now = new Date();
      const difference = carnival.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-4 md:p-6 max-w-md w-full relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/vetores-gratis/modelo-realista-de-carnaval-brasileiro_52683-54252.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="relative">
          <div className="flex items-center justify-center mb-6 space-x-2">
            <PartyPopper className="text-yellow-500" size={54} />
           
            <h2 className="text-2xl md:text-3xl  font-bold text-center bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 text-transparent bg-clip-text px-2">
              Contagem para o Carnacasfa!
            </h2>
            <VenetianMask className="text-purple-500" size={54} />
           
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6 justify-items-center">
            {[
              { label: "Dias", value: timeLeft.days },
              { label: "Horas", value: timeLeft.hours },
              { label: "Minutos", value: timeLeft.minutes },
              { label: "Segundos", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-3 shadow-lg border-2 border-yellow-300 flex items-center justify-center w-16 h-16">
                  <span className="text-2xl font-bold text-white">
                    {item.value}
                  </span>
                </div>
                <span className="text-sm text-gray-600 mt-1 block font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-3">
            <p className="text-lg text-gray-700 font-medium">
              Já prepara a sua fantasia!
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="text-yellow-500" size={20} />
              <span className="font-bold text-xl bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                06 de Março de 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarnavalContador;
