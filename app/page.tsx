import Navbar from "./components/layout/Navbar";
import KatalogContent from "./contents/KatalogContent";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <div className="">
        <Navbar />
      </div>
      <div className="mt-3 px-4 py-72 rounded-2xl relative bg-[url('/images/bg-camp.jpg')] bg-cover bg-center bg-no-repeat w-full">
        <div className="absolute bottom-6 left-6 text-white pl-3">
          <h1 className="text-7xl font-medium font-serif">Retreat Eksklusif </h1>
          <h1 className="text-7xl font-medium font-serif">di Pelukan Alam</h1>
          <div className="my-8">
            <button
              className="bg-slate-200 hover:bg-slate-300 text-black py-2 px-4 rounded-full flex items-center gap-2"
            >
              Explore your room
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-3"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full">
        <div className="grid grid-cols-2 p-10">
          <div className="text-black">
            <h1 className="text-5xl font-semibold font-sans">1250+ Companies</h1>
            <h1 className="text-5xl font-semibold font-sans mt-2">Trust by us</h1>
          </div>
          <div className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptatum, veritatis, natus magnam nemo quia recusandae nulla doloremque aperiam ipsam consectetur molestiae voluptate, reiciendis ex vel atque sint facilis consequatur!
            <div className="my-8 flex justify-between w-1/2 gap-1">
              <div>
                <button
                  className="bg-black text-white py-2 px-4 rounded-full flex items-center gap-2"
                >
                  More Listing
                </button>
              </div>
              <div>
                <button
                  className="bg-white text-black py-2 px-4 rounded-full flex items-center gap-4"
                >
                  Request a Callback
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 px-10 pb-10 bg-white gap-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[url('/images/tent.png')] bg-cover bg-center rounded-full bg-white"></div>
            <p className="text-black font-serif text-xl">
              Sweet Camp
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[url('/images/breakfast.png')] bg-cover bg-center rounded-full bg-white"></div>
            <p className="text-black font-serif text-xl">
              Free Breakfast
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[url('/images/hiking.png')] bg-cover bg-center rounded-full bg-white"></div>
            <p className="text-black font-serif text-xl">
              Mountain View
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[url('/images/waves.png')] bg-cover bg-center rounded-full bg-white"></div>
            <p className="text-black font-serif text-xl">
              Relax & Chill
            </p>
          </div>
        </div>
      </div>
      <div className="px-10">
        <div className="border-b-3 pt-5"></div>
      </div>
      <div className="flex justify-between items-center px-10 mt-15">
        <div>
          <h1 className="text-5xl font-semibold font-sans text-black mb-4">Popular Listings</h1>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <button className="bg-white text-black border border-black py-2 px-4 rounded-full flex items-center gap-5">
          Explore All
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fill-rule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="mt-10 h-full w-full px-10">
        <KatalogContent />
      </div>
    </div>
  )
}




