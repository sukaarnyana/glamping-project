export default function AboutContent() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group min-h-[330px] bg-[url('/images/about1.png')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>
                <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm text-emerald-700 px-4 py-1.5 rounded-full shadow-lg text-sm font-semibold">
                    Since 2022
                </div>
            </div>
            <div className="col-span-2 space-y-6 text-white">
                <h2 className="text-4xl font-serif font-semibold leading-snug">
                    Pengalaman Retreat yang Nyaman & Eksklusif
                </h2>

                <div className="flex items-center gap-1 text-yellow-400 text-xl">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="hover:scale-110 transition transform">★</span>
                    ))}
                </div>
                <p className="text-sm opacity-80 ml-1">4.9/5 dari 350+ pengunjung</p>
                <p className="text-lg text-gray-200 leading-relaxed">
                    Kami hadir memberikan ruang pelarian dari hiruk pikuk kota — sebuah tempat dimana ketenangan,
                    kehangatan alam, dan kenyamanan berkumpul menjadi satu. Dirancang bagi mereka yang mendambakan
                    momen istimewa dalam pelukan alam.
                </p>

                <p className="text-lg text-gray-200 leading-relaxed">
                    Dengan panorama pegunungan, udara segar, interior natural modern, dan layanan penuh senyuman,
                    kami memastikan perjalanan Anda menjadi cerita yang tak terlupakan.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm font-medium">
                    {[
                        "Retreat Private",
                        "Paket Keluarga",
                        "Akses Nature Tour",
                        "Pelayanan Premium"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center 
                                            text-emerald-700 shadow-sm font-bold">
                                ✓
                            </div>
                            {item}
                        </div>
                    ))}
                </div>
                <button className="mt-2 bg-white text-emerald-700 px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all">
                    Learn More
                </button>

            </div>
        </div>
    );
}
