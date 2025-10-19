export default function CTASection() {
  return (
    <div className="w-full bg-[#0F0F0F] flex flex-col justify-center items-center gap-2 p-10 font-sans">
      {/* Row 1 */}
      <div className="w-full flex">
        {/* Left Small Image */}
        <div className="w-[30%] flex justify-end items-end">
          <div className="h-[4cm] w-[4cm] border-2 border-[#26CC6B]  overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/1777777804/photo/smiling-bearded-indian-man-driving-auto-sitting-in-drivers-seat.jpg?s=612x612&w=0&k=20&c=23wY8y_1bkIbxo_Swc4N9x9gCHBp-iqjiRdcbB5qri4="
              alt="Professional cab driver smiling while driving"
            />
          </div>
        </div>

        {/* Middle Tagline */}
        <div className="w-[40%] flex justify-center items-end   pb-5">
          <h1 className="px-4 py-3 border border-dashed border-[#26CC6B] text-[#26CC6B] text-sm text-center ">
            Safe, Reliable, and Comfortable Rides — Anytime, Anywhere.
          </h1>
        </div>

        {/* Right Large Image */}
        <div className="w-[30%]">
          <div className="h-[7cm] w-[7cm] border-2 border-[#26CC6B]  overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg"
              alt="Exciting cab offers and discounts"
            />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="w-full flex">
        {/* Left Image */}
        <div className="w-[30%]">
          <div className="h-[5cm] w-[5cm] border-2 border-[#26CC6B]  overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhjv6wyGVyJohzdGfKX3tWdQ8OCajPxaF0Q&s"
              alt="Comfortable car interior for your journey"
            />
          </div>
        </div>

        {/* Middle Heading */}
        <div className="w-[40%] text-white flex justify-center items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold ">
            Join Us in Making Travel{" "}
            <span className="text-[#26CC6B]">Better</span>
          </h1>
        </div>

        {/* Right Image */}
        <div className="w-[30%] flex justify-end items-end">
          <div className="h-[5cm] w-[5cm] border-2 border-[#26CC6B]  overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uz7Q-RJMuFZhbO7JTF6dTTBGZFag5OX7hQ&s"
              alt="Driver assisting customer with luggage"
            />
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="w-full flex">
        {/* Left Image */}
        <div className="w-[30%] h-[8cm] flex justify-end">
          <div className="h-[8cm] w-[8cm] border-2 border-[#26CC6B]  overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsKHXWjXpRnjuCH6W6XAkTE-TXqnU2E2j5iIGjlOpscLcqLSorixcTGwNvUcFl4W7wpo&usqp=CAU"
              alt="Customer enjoying scenic road trip view"
            />
          </div>
        </div>

        {/* Middle Buttons */}
        <div className="w-[40%] flex flex-col justify-center items-center">
          <div className="text-white flex flex-wrap justify-center items-center gap-8 mt-[1cm] mb-[1cm]">
            <button
              className="bg-[#26CC6B] text-[#0F0F0F] text-2xl  px-10 py-3  hover:drop-shadow-[0px_0px_25px_rgba(38,204,107,0.7)]  transition-all duration-300 "
              aria-label="Book a cab now"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[30%] h-[8cm] flex items-start">
          <div className="h-[4cm] w-[4cm] border-2 border-[#26CC6B]  overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/27/33/b1/kochi-taxi.jpg?w=1200&h=-1&s=1"
              alt="Well-maintained cab ready for your next ride"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
