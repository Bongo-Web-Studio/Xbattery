"use client";
import React from "react";

export default function ContactFAQuestionsSection() {
  const steps = [
    {
      id: 1,
      title: "Normal Mode",
      desc: "In Normal Mode, the 5kWh Xbattery provides reliable power for your home, ensuring daily activities run smoothly without any interruptions.",
      video: "https://xbattery.energy/videos/steps/1.mp4",
    },
    {
      id: 2,
      title: "Backup Power",
      desc: "When a power outage occurs, the 5kWh Xbattery instantly switches to backup mode, keeping your home powered for up to a day without interruption.",
      video: "https://xbattery.energy/videos/steps/2.mp4",
    },
    {
      id: 3,
      title: "Power Restoration",
      desc: "Once the grid power is restored, the 5kWh Xbattery automatically switches back to normal mode, ensuring a smooth and seamless transition.",
      video: "https://xbattery.energy/videos/steps/3.mp4",
    },
    {
      id: 4,
      title: "Solar Integration",
      desc: "The 5kWh Xbattery works seamlessly with your solar system, managing energy usage and maximizing storage to reduce your reliance on the grid.",
      video: "https://xbattery.energy/videos/steps/4.mp4",
    },
  ];

  return (
    <div className="flex w-full justify-center items-center bg-[#121212] border-t border-gray-500">
      <div className="w-[3%] border-r border-b border-gray-500" />
      <div className="w-[94%] border border-gray-500">
        <section className="w-full">
          <div className="overflow-hidden">
            <div className="flex w-full justify-center items-center border-b border-gray-500 h-[30vh]">
              <div className="w-[60%] border-r border-gray-500  bg-[#1A1A1A] flex items-start h-full">
                <h1
                  style={{ fontFamily: "ppneuebitbold" }}
                  className="mt-8 ml-8 text-9xl font-semibold text-white"
                >
                  How It Works
                </h1>
              </div>
              <div className="w-[40%] p-5 text-white text-xl ">
                You're covered at every stage of an outage. Its intelligent modes kick in before the power goes out, ensuring you stay powered through any disruption.
              </div>
            </div>

            {/* Grid of static cards (no animations) */}
            <div className="flex justify-center items-center gap-10 p-10">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="faq-card flex flex-col items-start  bg-[#1A1A1A] text-white border border-gray-500 p-4 max-w-xs"
                >
                  <div className="overflow-hidden mb-6 w-full aspect-[4/3] border border-gray-400">
                    <video
                      src={step.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-start justify-start mb-3">
                    <span className="text-white bg-[#1A1A1A] border border-gray-500 px-3 py-1 font-semibold">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 max-w-xs mx-auto text-[14px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="w-[3%] border border-gray-500" />
    </div>
  );
}
