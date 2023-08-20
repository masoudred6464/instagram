import React from "react";
import SearchInput from "../Components/SearchInput/SearchInput";
import SearchBox from "../Components/SearchBox/SearchBox";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import Story from "../Components/Story/Story";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { usersList } from "../Data/users";

function Home() {
  const serachBoxSelector = useSelector(
    (state: RootState) => state.searchBoxReducer
  );

  return (
    <div>
      {/* Header */}
      <header className="md:hidden fixed top-0 right-0 left-0 h-[60px] flex justify-between items-center bg-white dark:bg-black border-b border-[#DBDBDB] dark:border-[#363636] z-50">
        {/* Logo */}
        <div className="absolute left-4">
          <svg className="w-[103px] h-[29px] text-black dark:text-white">
            <use href="#logo-instagram"></use>
          </svg>
        </div>
        {/* Search and Notifications */}
        <div className="z-10 absolute right-4 left-4 xs:left-auto flex items-center gap-x-5">
          {/* Search Box */}
          <div className="relative">
            <SearchInput />
            {serachBoxSelector.isShow && (
              <div className="absolute -left-2 xs:left-auto top-11 xs:-right-12 w-[320px] sm:w-[375px] h-screen bg-white dark:bg-[#262626] rounded-md overflow-hidden drop-shadow-[0_4px_12px_rgba(0,0,0,.15)]">
                <SearchBox className="h-full" />
              </div>
            )}
          </div>
          {/* Notifications */}
          <Link to={"/notifications"} title="notifications">
            <svg className="w-6 h-6 text-black dark:text-white group-hover:scale-105 transition-all">
              <use href="#notifications"></use>
            </svg>
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-3 w-full mt-[90px] md:mt-[46px]">
        <div className="col-span-2 sm:container sm:mx-auto px-3 sm:p-0">
          {/* Stories */}
          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              breakpoints={{
                400: {
                  slidesPerView: 5,
                },
                500: {
                  slidesPerView: 6,
                },
                600: {
                  slidesPerView: 7,
                },
                700: {
                  slidesPerView: 8,
                },
                768: {
                  slidesPerView: 9,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="stories-swiper"
            >
              {usersList.map((user) => (
                <SwiperSlide>
                  <div className="flex flex-col items-center gap-y-1">
                    <div className="w-[66px] h-[66px]">
                      <Story id={user.id} img={user.img} hasStory hasNewStory />
                    </div>
                    <span className="block max-w-[66px] text-xs overflow-hidden overflow-ellipsis">
                      {user.username}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Posts */}
          <div className="w-full">
            <div className="max-w-[470px] mx-auto mt-10">
              {/* Post */}
              <div className="bg-white pb-4 mb-6 border-b border-[#dbdbdb]">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div className="w-9 h-9">
                      <Story img="user1.jpg" hasStory hasNewStory />
                    </div>
                    <div className="flex items-center gap-x-1 text-sm">
                      <span className="font-[600]">hamed_raeisy_org</span>
                      <span className="text-neutral-500">•</span>
                      <span className="text-neutral-500">50m</span>
                    </div>
                  </div>
                  <button>
                    <svg className="w-6 h-6">
                      <use href="#more-options"></use>
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="w-full h-[585px] my-3 border border-[#dbdbdb] rounded-md overflow-hidden">
                  <img
                    src="/images/stories/images/img10.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom */}
                <div className="text-sm">
                  {/* Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <button>
                        <svg className="w-6 h-6">
                          <use href="#notifications"></use>
                        </svg>
                      </button>
                      <button>
                        <svg className="w-6 h-6">
                          <use href="#comments"></use>
                        </svg>
                      </button>
                      <button>
                        <svg className="w-6 h-6">
                          <use href="#messages"></use>
                        </svg>
                      </button>
                    </div>
                    <button>
                      <svg className="w-6 h-6">
                        <use href="#save"></use>
                      </svg>
                    </button>
                  </div>

                  {/* Likes */}
                  <span className="inline-block font-[600] my-1">
                    10,297 likes
                  </span>

                  {/* Description */}
                  <div>
                    <a href="#" className="font-[600]">
                      sadhguru.ir
                    </a>
                    <p className="flex flex-col h-10 overflow-hidden">
                      <span>با صحبتهاش موافقی؟</span>
                      <span> Spoken by Jordan Peterson</span>
                      <span>یکی از سرشناس‌ترین روانشناسان دنیا</span>
                      <span>
                        اگه علاقه‌مندید که بیشتر از این نوع ویدیوها بذاریم این
                        ویدیو رو برای بهترین دوستت بفرست و یه قلب بنفش رو این
                        زیر کامنت کنید 💜
                      </span>
                      <span>.</span>
                      <span>.</span>
                      <span>
                        {" "}
                        "I do not own the rights to this music and movie. All
                        credits and copyright belong to their respective owners.
                        This video is for entertainment purposes only."
                      </span>
                      <span>.</span>
                      <span>.</span>
                      <span>
                        برای دریافت ویدیوها و مطالب بیشتر، شاه انگیزه رو دنبال
                        کنید
                      </span>
                      <a href="#">@SHAHANGIZE</a>
                      <a href="#">@SHAHANGIZE</a>
                      <a href="#">@SHAHANGIZE</a>
                      <span>.</span>
                      <span>.</span>
                      <span>
                        DM for credit or removal request (no copyright intended)
                        ©️ All rights and credits reserved to the respective
                        owner(s)
                      </span>
                      <a href="#">#خودشناسی</a>
                      <a href="#">#روانشناسی_شخصیت</a>
                      <a href="#">#قدرت</a>
                      <a href="#">#قوی_باش</a>
                      <a href="#">#ضعیف</a>
                    </p>
                    <div className="flex flex-col items-start gap-y-0.5">
                      <button className="text-neutral-500">more</button>
                      <button className="text-xs font-[600]">
                        See translation
                      </button>
                      <button className="text-neutral-500">
                        View all 332 comments
                      </button>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-1">
                          <span className="font-[600]">
                            programadordesignerpro
                          </span>
                          <span>Excelente 🔥🔥</span>
                        </div>
                        <button>
                          <svg className="w-3 h-3 text-neutral-500">
                            <use href="#notifications"></use>
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-1">
                          <span className="font-[600]">
                            programadordesignerpro
                          </span>
                          <span>Excelente 🔥🔥</span>
                        </div>
                        <button>
                          <svg className="w-3 h-3 text-neutral-500">
                            <use href="#notifications"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* Input */}
                    <div className="flex items-center gap-x-2 justify-between mt-3">
                      <input
                        className="grow border-0 outline-none"
                        type="text"
                        placeholder="Add a comment..."
                      />
                      <button className="text-[#0096f6] font-[600]">
                        Post
                      </button>
                      <svg className="w-3 h-3 text-neutral-500">
                        <use href="#emoji"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white pb-4 mb-6 border-b border-[#dbdbdb]">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div className="w-9 h-9">
                      <Story img="user1.jpg" hasStory hasNewStory />
                    </div>
                    <div className="flex items-center gap-x-1 text-sm">
                      <span className="font-[600]">hamed_raeisy_org</span>
                      <span className="text-neutral-500">•</span>
                      <span className="text-neutral-500">50m</span>
                    </div>
                  </div>
                  <button>
                    <svg className="w-6 h-6">
                      <use href="#more-options"></use>
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="w-full h-[585px] my-3 border border-[#dbdbdb] rounded-md overflow-hidden">
                  <img
                    src="/images/stories/images/img10.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom */}
                <div className="text-sm">
                  {/* Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <button>
                        <svg className="w-6 h-6">
                          <use href="#notifications"></use>
                        </svg>
                      </button>
                      <button>
                        <svg className="w-6 h-6">
                          <use href="#comments"></use>
                        </svg>
                      </button>
                      <button>
                        <svg className="w-6 h-6">
                          <use href="#messages"></use>
                        </svg>
                      </button>
                    </div>
                    <button>
                      <svg className="w-6 h-6">
                        <use href="#save"></use>
                      </svg>
                    </button>
                  </div>

                  {/* Likes */}
                  <span className="inline-block font-[600] my-1">
                    10,297 likes
                  </span>

                  {/* Description */}
                  <div>
                    <a href="#" className="font-[600]">
                      sadhguru.ir
                    </a>
                    <p className="flex flex-col h-10 overflow-hidden">
                      <span>با صحبتهاش موافقی؟</span>
                      <span> Spoken by Jordan Peterson</span>
                      <span>یکی از سرشناس‌ترین روانشناسان دنیا</span>
                      <span>
                        اگه علاقه‌مندید که بیشتر از این نوع ویدیوها بذاریم این
                        ویدیو رو برای بهترین دوستت بفرست و یه قلب بنفش رو این
                        زیر کامنت کنید 💜
                      </span>
                      <span>.</span>
                      <span>.</span>
                      <span>
                        {" "}
                        "I do not own the rights to this music and movie. All
                        credits and copyright belong to their respective owners.
                        This video is for entertainment purposes only."
                      </span>
                      <span>.</span>
                      <span>.</span>
                      <span>
                        برای دریافت ویدیوها و مطالب بیشتر، شاه انگیزه رو دنبال
                        کنید
                      </span>
                      <a href="#">@SHAHANGIZE</a>
                      <a href="#">@SHAHANGIZE</a>
                      <a href="#">@SHAHANGIZE</a>
                      <span>.</span>
                      <span>.</span>
                      <span>
                        DM for credit or removal request (no copyright intended)
                        ©️ All rights and credits reserved to the respective
                        owner(s)
                      </span>
                      <a href="#">#خودشناسی</a>
                      <a href="#">#روانشناسی_شخصیت</a>
                      <a href="#">#قدرت</a>
                      <a href="#">#قوی_باش</a>
                      <a href="#">#ضعیف</a>
                    </p>
                    <div className="flex flex-col items-start gap-y-0.5">
                      <button className="text-neutral-500">more</button>
                      <button className="text-xs font-[600]">
                        See translation
                      </button>
                      <button className="text-neutral-500">
                        View all 332 comments
                      </button>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-1">
                          <span className="font-[600]">
                            programadordesignerpro
                          </span>
                          <span>Excelente 🔥🔥</span>
                        </div>
                        <button>
                          <svg className="w-3 h-3 text-neutral-500">
                            <use href="#notifications"></use>
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-1">
                          <span className="font-[600]">
                            programadordesignerpro
                          </span>
                          <span>Excelente 🔥🔥</span>
                        </div>
                        <button>
                          <svg className="w-3 h-3 text-neutral-500">
                            <use href="#notifications"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* Input */}
                    <div className="flex items-center gap-x-2 justify-between mt-3">
                      <input
                        className="grow border-0 outline-none"
                        type="text"
                        placeholder="Add a comment..."
                      />
                      <button className="text-[#0096f6] font-[600]">
                        Post
                      </button>
                      <svg className="w-3 h-3 text-neutral-500">
                        <use href="#emoji"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block col-span-1"></div>
      </div>
    </div>
  );
}

export default Home;
