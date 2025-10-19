export default function CTASectionMobile() {
  return (
    <div className="w-full bg-[#0F0F0F] flex flex-col justify-center items-center gap-8 p-6 sm:p-10 font-sans">
      {/* Hero CTA Row */}
      <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-6 justify-between">
        {/* Left Image */}
        <div className="  flex  justify-between  ">
          <div className="h-28 w-28 sm:h-32 sm:w-32 border-2 border-[#26CC6B] overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/1777777804/photo/smiling-bearded-indian-man-driving-auto-sitting-in-drivers-seat.jpg?s=612x612&w=0&k=20&c=23wY8y_1bkIbxo_Swc4N9x9gCHBp-iqjiRdcbB5qri4="
              alt="Professional cab driver smiling while driving"
            />
          </div>

          <div className="flex justify-center items-center sm:w-1/3">
            <div className="h-40 w-40 sm:h-40 sm:w-40 border-2 border-[#26CC6B] overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src="https://promos.makemytrip.com/appfest/xhdpi/ChicletBG_OSCabOffer_28Jan_BG.jpg"
                alt="Exciting cab offers and discounts"
              />
            </div>
          </div>
        </div>

        {/* Middle Text */}
        <div className=" text-center">
          <h2 className="text-[#26CC6B] text-[12px] sm:text-base px-4 py-2 border border-dashed border-[#26CC6B] -md">
            Safe, Reliable, and Comfortable Rides — Anytime, Anywhere.
          </h2>
        </div>

        {/* Right Image */}
      </div>

      {/* Middle Heading Row */}
      <div className="flex w-full gap-4 sm:gap-6 justify-between  ">
        <div className="flex justify-center">
          <div className="h-40 w-40 sm:h-28 sm:w-28 border-2 border-[#26CC6B] overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uz7Q-RJMuFZhbO7JTF6dTTBGZFag5OX7hQ&s"
              alt="Driver assisting customer with luggage"
            />
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="h-24 w-24 sm:h-28 sm:w-28 border-2 border-[#26CC6B] overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhjv6wyGVyJohzdGfKX3tWdQ8OCajPxaF0Q&s"
              alt="Comfortable car interior for your journey"
            />
          </div>
        </div>
      </div>
      {/* Center Heading */}
      <div className=" text-center text-white">
        <h1 className="text-4xl sm:text-4xl font-semibold leading-snug">
          Join Us in Making Travel{" "}
          <span className="text-[#26CC6B]">Better</span>
        </h1>
      </div>
      {/* Call-to-Action Row */}
      <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-6 justify-center items-center ">
        {/* Left Image */}
        <div className="flex justify-between w-full">
          <div className="h-36 w-36 sm:h-32 sm:w-32 border-2 border-[#26CC6B] overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsKHXWjXpRnjuCH6W6XAkTE-TXqnU2E2j5iIGjlOpscLcqLSorixcTGwNvUcFl4W7wpo&usqp=CAU"
              alt="Customer enjoying scenic road trip view"
            />
          </div>

          {/* Right Image */}
          <div className="flex justify-center sm:w-1/3">
            <div className="h-36 w-36 sm:h-32 sm:w-32 border-2 border-[#26CC6B] overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/27/33/b1/kochi-taxi.jpg?w=1200&h=-1&s=1"
                alt="Well-maintained cab ready for your next ride"
              />
            </div>
          </div>
        </div>

        {/* Center Button */}
        <div className="flex justify-center items-center sm:w-1/3">
          <button
            className="bg-[#26CC6B] text-[#0F0F0F] text-xl sm:text-2xl px-8 sm:px-10 py-3 sm:py-4 -lg font-semibold hover:-[0_0_25px_rgba(38,204,107,0.7)] transition-all duration-300"
            aria-label="Book a cab now"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
