import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import AIWorkflowSection from "./AIWorkflowSection";

export default function PreOrderSection() {
  return (
    <section
      className="w-full bg-white text-black overflow-hidden"
      aria-label="BharatBMS Impact & Overview"
    >
      {/* top border row */}
      <div className="w-full flex h-16">
        <div className="w-[3%] bg-[#020202]" />
        <div className="w-[94%] border-l border-r border-gray-400" />
        <div className="w-[3%] bg-[#020202]" />
      </div>

      {/* main content area */}
      <div className="w-full flex">
        <div className="w-[3%] border-t border-b border-r  border-gray-300" />
        <div className="w-[94%] border-t border-b  border-gray-300">
          <div className="">
            <div className="flex">
              {/* Quote / Message */}
              <div className="flex flex-col justify-center items-center w-full">
             

                <div className="flex justify-center items-center w-full mt-">
                  <AIWorkflowSection />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[3%] border-t border-b border-l  border-gray-300" />
      </div>

      {/* bottom border row */}
      <div className="w-full flex h-16">
        <div className="w-[3%] bg-white" />
        <div className="w-[94%] border-l border-r  border-gray-300" />
        <div className="w-[3%] bg-white" />
      </div>
    </section>
  );
}
