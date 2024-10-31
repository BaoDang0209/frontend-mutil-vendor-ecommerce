import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
const Details = () => {
  return (
    <div>
      <Header />
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white overflow-hidden w-[1440px] h-[3066px] relative">

          <div className="flex w-[400px] h-[52px] items-center justify-center gap-3 px-[54px] py-4 absolute top-[694px] left-[940px] bg-black rounded-[62px] overflow-hidden">
            <div className="relative w-fit mt-[-2.00px] [font-family:'Open_Sans',Helvetica] font-bold italic text-white text-base tracking-[0] leading-[normal]">
              Add to Cart
            </div>
          </div>
          <div className="flex w-[230px] h-[52px] items-center justify-center gap-3 px-[54px] py-4 absolute top-[1762px] left-[605px] rounded-[62px] overflow-hidden border border-solid border-[#0000001a]">
            <div className="relative w-fit mt-[-2.00px] ml-[-11.50px] mr-[-11.50px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-base tracking-[0] leading-[normal]">
              Load More Reviews
            </div>
          </div>
          <div className="flex w-[170px] h-[52px] items-center justify-between px-5 py-4 absolute top-[694px] left-[750px] bg-[#efefef] rounded-[62px] overflow-hidden">
            <img className="relative w-6 h-6 mt-[-2.00px] mb-[-2.00px]" alt="Frame" src="/img/details/frame-2.svg" />
            <div className="relative w-fit mt-[-2.00px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-base tracking-[0] leading-[normal]">
              1
            </div>
            <img className="relative w-6 h-6 mt-[-2.00px] mb-[-2.00px]" alt="Frame" src="/img/details/frame-3.svg" />
          </div>
          <div className="flex w-[170px] h-[52px] items-center justify-between px-5 py-4 absolute top-[605px] left-[750px] bg-[#efefef] rounded-[62px] overflow-hidden">
            <img className="relative w-6 h-6 mt-[-2.00px] mb-[-2.00px]" alt="Frame" src="/img/details/frame-2.svg" />
            <div className="relative w-fit mt-[-2.00px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-base tracking-[0] leading-[normal]">
              32
            </div>
            <img className="relative w-6 h-6 mt-[-2.00px] mb-[-2.00px]" alt="Frame" src="/img/details/frame-3.svg" />
          </div>
          <div className="inline-flex items-start gap-2.5 absolute top-[888px] left-[986px]">
            <img className="relative w-12 h-12" alt="Frame" src="/img/details/frame-19.svg" />
            <div className="flex w-[120px] h-12 items-center justify-between px-5 py-4 relative bg-[#efefef] rounded-[62px] overflow-hidden">
              <div className="relative w-fit mt-[-4.00px] mb-[-2.00px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-base tracking-[0] leading-[normal]">
                Latest
              </div>
              <img className="relative w-4 h-4" alt="Frame" src="/img/details/frame-4.svg" />
            </div>
            <div className="flex w-[166px] h-12 items-center justify-around gap-3 px-5 py-4 relative bg-black rounded-[62px] overflow-hidden">
              <div className="relative w-fit mt-[-4.00px] mb-[-2.00px] [font-family:'Open_Sans',Helvetica] font-bold italic text-white text-base tracking-[0] leading-[normal]">
                Write a Review
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center px-3.5 py-1.5 absolute top-[322px] left-[1223px] bg-[#ff33331a] gap-3 rounded-[62px] overflow-hidden">
            <div className="relative w-fit mt-[-1.00px] font-bold italic text-[#ff3333] leading-[normal] [font-family:'Open_Sans',Helvetica] text-base tracking-[0]">
              -40%
            </div>
          </div>
          <div className="absolute h-[47px] top-[216px] left-[750px] [font-family:'Roboto',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            Shoe
          </div>
          <div className="absolute h-14 top-[1878px] left-[515px] [font-family:'Roboto',Helvetica] font-bold text-black text-5xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            You might also like
          </div>
          <div className="inline-flex items-start gap-3 absolute top-[317px] left-[750px]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
              600.000 VND
            </div>
          </div>
          <div className="absolute h-11 top-[316px] left-[972px] [font-family:'Open_Sans',Helvetica] font-bold text-[#0000004c] text-[32px] tracking-[0] leading-[normal] line-through">
            1.000.000 VND
          </div>
          <div className="inline-flex items-center gap-3 absolute top-[158px] left-[100px]">
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Home
              </div>
              <img className="relative w-4 h-4" alt="Frame" src="/img/details/frame-6.svg" />
            </div>
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Shop
              </div>
              <img className="relative w-4 h-4" alt="Frame" src="/img/details/frame-6.svg" />
            </div>
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Men
              </div>
            </div>
          </div>
          <div className="absolute top-[460px] left-[750px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Select Colors
          </div>
          <p className="absolute w-[590px] top-[379px] left-[750px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[22px]">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers
            superior comfort and style.
          </p>
          <div className="absolute w-[170px] h-[33px] top-[895px] left-[100px]">
            <div className="absolute h-[33px] top-0 left-0 [font-family:'Open_Sans',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
              All Reviews
            </div>
            <div className="absolute top-3.5 left-[133px] font-normal text-[#00000099] leading-[22px] whitespace-nowrap [font-family:'Open_Sans',Helvetica] text-base tracking-[0]">
              (451)
            </div>
          </div>
          <div className="absolute top-[825px] left-60 [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-xl tracking-[0] leading-[22px] whitespace-nowrap">
            Product Details
          </div>
          <div className="absolute top-[825px] left-[638px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-xl text-center tracking-[0] leading-[22px] whitespace-nowrap">
            Rating &amp; Reviews
          </div>
          <div className="absolute top-[825px] left-[1108px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-xl text-right tracking-[0] leading-[22px] whitespace-nowrap">
            FAQs
          </div>
          <div className="absolute top-[572px] left-[750px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Choose Size
          </div>
          <img
            className="absolute w-[444px] h-[530px] top-[216px] left-[266px] object-cover"
            alt="Image"
            src="/img/details/image.png"
          />
          <img
            className="h-[167px] top-[216px] absolute w-[152px] left-[100px] object-cover"
            alt="Image"
            src="/img/details/image.png"
          />
          <img
            className="h-[168px] top-[397px] absolute w-[152px] left-[100px] object-cover"
            alt="Image"
            src="/img/details/image.png"
          />
          <img
            className="h-[167px] top-[579px] absolute w-[152px] left-[100px] object-cover"
            alt="Image"
            src="/img/details/image.png"
          />
          <div className="inline-flex items-center gap-4 absolute top-[278px] left-[750px]">
            <div className="gap-[7.1px] inline-flex items-start relative flex-[0_0_auto]">
              <img className="relative w-[23.5px] h-[22.35px]" alt="Star" src="/img/details/star-1.svg" />
              <img className="relative w-[23.5px] h-[22.35px]" alt="Star" src="/img/details/star-2.svg" />
              <img className="relative w-[23.5px] h-[22.35px]" alt="Star" src="/img/details/star-3.svg" />
              <img className="relative w-[23.5px] h-[22.35px]" alt="Star" src="/img/details/star-4.svg" />
              <img className="relative w-[11.75px] h-[22.35px]" alt="Star" src="/img/details/star-5.svg" />
            </div>
            <p className="relative w-fit font-normal text-transparent leading-[normal] [font-family:'Open_Sans',Helvetica] text-base tracking-[0]">
              <span className="text-black">4.5/</span>
              <span className="text-[#00000099]">5</span>
            </p>
          </div>
          <img
            className="absolute w-[590px] h-px top-[436px] left-[750px] object-cover"
            alt="Line"
            src="/img/details/line-3.svg"
          />
          <div className="absolute w-[1240px] h-0.5 top-[862px] left-[100px]">
            <img className="absolute w-[1240px] h-px top-px left-0 object-cover" alt="Line" src="/img/details/line-8.svg" />
            <img className="absolute w-[414px] h-0.5 top-0 left-[413px]" alt="Line" src="/img/details/line-7.svg" />
          </div>
          <img
            className="absolute w-[1240px] h-px top-[133px] left-[100px] object-cover"
            alt="Line"
            src="/img/details/line-8.svg"
          />
          <img
            className="absolute w-[590px] h-px top-[548px] left-[750px] object-cover"
            alt="Line"
            src="/img/details/line-3.svg"
          />
          <img
            className="absolute w-[590px] h-px top-[669px] left-[750px] object-cover"
            alt="Line"
            src="/img/details/line-3.svg"
          />
          <div className="inline-flex items-start gap-4 absolute top-[488px] left-[750px]">
            <div className="relative w-[37px] h-[37px] bg-[#4f4631] rounded-[18.5px]">
              <img className="absolute w-4 h-4 top-2.5 left-2.5" alt="Frame" src="/img/details/frame-7.svg" />
            </div>
            <div className="relative w-[37px] h-[37px] bg-[#314f49] rounded-[18.5px]" />
            <div className="relative w-[37px] h-[37px] bg-[#31344f] rounded-[18.5px]" />
          </div>
          <div className="flex flex-wrap w-[610px] items-start gap-[24px_342px] px-8 py-7 absolute top-[960px] left-[100px] rounded-[20px] overflow-hidden border border-solid border-[#0000001a]">
            <div className="flex items-start justify-between relative flex-1 grow">
              <div className="flex flex-col items-start gap-[15px] relative flex-1 grow">
                <div className="inline-flex items-start gap-[6.49px] relative flex-[0_0_auto]">
                  <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-1-6.svg" />
                  <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-2-6.svg" />
                  <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-3-6.svg" />
                  <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-4-5.svg" />
                  <img className="relative w-[10.74px] h-[20.42px]" alt="Star" src="/img/details/star-5-2.svg" />
                </div>
                <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[22px] whitespace-nowrap">
                      Samantha D.
                    </div>
                    <img className="relative w-6 h-6" alt="Frame" src="/img/details/frame-13.svg" />
                  </div>
                  <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[22px]">
                    &#34;I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a
                    fellow designer, I appreciate the attention to detail. It&#39;s become my favorite go-to shirt.&#34;
                  </p>
                </div>
              </div>
              <img className="relative flex-[0_0_auto]" alt="Frame" src="/img/details/frame-27-5.svg" />
            </div>
            <p className="relative w-[546px] [font-family:'Open_Sans',Helvetica] font-bold italic text-[#00000099] text-base tracking-[0] leading-[22px]">
              Posted on August 14, 2023
            </p>
          </div>
          <div className="flex flex-wrap w-[610px] items-start gap-[24px_342px] px-8 py-7 absolute top-[1222px] left-[100px] rounded-[20px] overflow-hidden border border-solid border-[#0000001a]">
            <div className="flex items-start justify-between relative flex-1 grow">
              <div className="flex flex-col items-start gap-[15px] relative flex-1 grow">
                <div className="inline-flex items-start gap-[6.49px] relative flex-[0_0_auto]">
                  <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-1-6.svg" />
                  <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-2-6.svg" />
                  <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-3-6.svg" />
                  <img className="relative w-[10.74px] h-[20.42px]" alt="Star" src="/img/details/star-6.svg" />
                </div>
                <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[22px] whitespace-nowrap">
                      Ethan R.
                    </div>
                    <img className="relative w-6 h-6" alt="Frame" src="/img/details/frame-13.svg" />
                  </div>
                  <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[22px]">
                    &#34;This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish
                    pattern caught my eye, and the fit is perfect. I can see the designer&#39;s touch in every aspect of
                    this shirt.&#34;
                  </p>
                </div>
              </div>
              <img className="relative flex-[0_0_auto]" alt="Frame" src="/img/details/frame-27-5.svg" />
            </div>
            <p className="relative w-[546px] [font-family:'Open_Sans',Helvetica] font-bold italic text-[#00000099] text-base tracking-[0] leading-[22px]">
              Posted on August 16, 2023
            </p>
          </div>
          <div className="flex flex-wrap w-[610px] items-start gap-[24px_342px] px-8 py-7 absolute top-[1484px] left-[100px] rounded-[20px] overflow-hidden border border-solid border-[#0000001a]">
            <div className="flex items-start justify-between relative flex-1 grow">
              <div className="flex flex-col items-start gap-[15px] relative flex-1 grow">
                <div className="inline-flex items-start gap-[6.49px] relative flex-[0_0_auto]">
                  <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-1-6.svg" />
                  <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-2-6.svg" />
                  <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-3-6.svg" />
                  <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-4-5.svg" />
                </div>
                <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[22px] whitespace-nowrap">
                      Liam K.
                    </div>
                    <img className="relative w-6 h-6" alt="Frame" src="/img/details/frame-13.svg" />
                  </div>
                  <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[22px]">
                    &#34;This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks
                    volumes about the designer&#39;s skill. It&#39;s like wearing a piece of art that reflects my passion
                    for both design and fashion.&#34;
                  </p>
                </div>
              </div>
              <img className="relative flex-[0_0_auto]" alt="Frame" src="/img/details/frame-27-5.svg" />
            </div>
            <p className="relative w-[546px] [font-family:'Open_Sans',Helvetica] font-bold italic text-[#00000099] text-base tracking-[0] leading-[22px]">
              Posted on August 18, 2023
            </p>
          </div>
          <div className="absolute w-[610px] h-[766px] top-[960px] left-[730px]">
            <div className="flex flex-wrap w-[610px] items-start gap-[24px_342px] px-8 py-7 absolute top-0 left-0 rounded-[20px] overflow-hidden border border-solid border-[#0000001a]">
              <div className="flex items-start justify-between relative flex-1 grow">
                <div className="flex flex-col items-start gap-[15px] relative flex-1 grow">
                  <div className="inline-flex items-start gap-[6.49px] relative flex-[0_0_auto]">
                    <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-1-6.svg" />
                    <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-2-6.svg" />
                    <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-3-6.svg" />
                    <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-4-5.svg" />
                  </div>
                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[22px] whitespace-nowrap">
                        Alex M.
                      </div>
                      <img className="relative w-6 h-6" alt="Frame" src="/img/details/frame-13.svg" />
                    </div>
                    <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[22px]">
                      &#34;The t-shirt exceeded my expectations! The colors are vibrant and the print quality is
                      top-notch. Being a UI/UX designer myself, I&#39;m quite picky about aesthetics, and this t-shirt
                      definitely gets a thumbs up from me.&#34;
                    </p>
                  </div>
                </div>
                <img className="relative flex-[0_0_auto]" alt="Frame" src="/img/details/frame-27-5.svg" />
              </div>
              <p className="relative w-[546px] [font-family:'Open_Sans',Helvetica] font-bold italic text-[#00000099] text-base tracking-[0] leading-[22px]">
                Posted on August 15, 2023
              </p>
            </div>
            <div className="flex flex-wrap w-[610px] items-start gap-[24px_342px] px-8 py-7 absolute top-[262px] left-0 rounded-[20px] overflow-hidden border border-solid border-[#0000001a]">
              <div className="flex items-start justify-between relative flex-1 grow">
                <div className="flex flex-col items-start gap-[15px] relative flex-1 grow">
                  <div className="inline-flex items-start gap-[6.49px] relative flex-[0_0_auto]">
                    <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-1-6.svg" />
                    <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-2-6.svg" />
                    <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-3-6.svg" />
                    <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-4-5.svg" />
                  </div>
                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[22px] whitespace-nowrap">
                        Olivia P.
                      </div>
                      <img className="relative w-6 h-6" alt="Frame" src="/img/details/frame-13.svg" />
                    </div>
                    <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[22px]">
                      &#34;As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents
                      those principles but also feels great to wear. It&#39;s evident that the designer poured their
                      creativity into making this t-shirt stand out.&#34;
                    </p>
                  </div>
                </div>
                <img className="relative flex-[0_0_auto]" alt="Frame" src="/img/details/frame-27-5.svg" />
              </div>
              <p className="relative w-[546px] [font-family:'Open_Sans',Helvetica] font-bold italic text-[#00000099] text-base tracking-[0] leading-[22px]">
                Posted on August 17, 2023
              </p>
            </div>
            <div className="flex flex-wrap w-[610px] items-start gap-[24px_342px] px-8 py-7 absolute top-[524px] left-0 rounded-[20px] overflow-hidden border border-solid border-[#0000001a]">
              <div className="flex items-start justify-between relative flex-1 grow">
                <div className="flex flex-col items-start gap-[15px] relative flex-1 grow">
                  <div className="inline-flex items-start gap-[6.49px] relative flex-[0_0_auto]">
                    <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-1-6.svg" />
                    <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-2-6.svg" />
                    <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-3-6.svg" />
                    <img className="relative w-[21.47px] h-[20.42px]" alt="Star" src="/img/details/star-4-5.svg" />
                    <img className="relative w-[10.74px] h-[20.42px]" alt="Star" src="/img/details/star-5-2.svg" />
                  </div>
                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[22px] whitespace-nowrap">
                        Ava H.
                      </div>
                      <img className="relative w-6 h-6" alt="Frame" src="/img/details/frame-13.svg" />
                    </div>
                    <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[22px]">
                      &#34;I&#39;m not just wearing a t-shirt; I&#39;m wearing a piece of design philosophy. The intricate
                      details and thoughtful layout of the design make this shirt a conversation starter.&#34;
                    </p>
                  </div>
                </div>
                <img className="relative flex-[0_0_auto]" alt="Frame" src="/img/details/frame-27-5.svg" />
              </div>
              <p className="relative w-[546px] [font-family:'Open_Sans',Helvetica] font-bold italic text-[#00000099] text-base tracking-[0] leading-[22px]">
                Posted on August 19, 2023
              </p>
            </div>
          </div>

          <div className="absolute w-[37px] h-[37px] top-[488px] left-[910px] bg-[#f50505] rounded-[18.5px] border border-solid border-[#00000033]" />
          <div className="absolute w-[37px] h-[37px] top-[488px] left-[964px] bg-[#f5dd05] rounded-[18.5px] border border-solid border-[#00000033]" />
          <div className="absolute w-[1312px] h-[455px] top-[1971px] left-[85px]">
            <div className="absolute w-[406px] h-[455px] top-0 left-0">
              <div className="relative w-[422px] h-[455px] left-[-9px]">
                <div className="absolute w-[402px] h-[455px] top-0 left-[9px] bg-white rounded-[15.3px] border-[1.53px] border-solid border-[#dedede]" />
                <img
                  className="absolute w-[422px] h-[354px] top-[78px] left-0 object-cover"
                  alt="Untitled design"
                  src="/img/details/untitled-design-108.png"
                />
                <img
                  className="absolute w-[37px] h-[39px] top-[35px] left-[347px]"
                  alt="Favorite"
                  src="/img/details/favorite.svg"
                />
                <div className="absolute w-[179px] top-[330px] left-[51px] [font-family:'Poppins',Helvetica] font-medium text-black text-[18.4px] tracking-[0] leading-[25.4px] whitespace-nowrap">
                  Slick running shoes
                </div>
                <div className="absolute w-[190px] top-[397px] left-[51px] [font-family:'Inter',Helvetica] font-medium text-black text-[17.6px] tracking-[0] leading-[normal]">
                  4.999.000 VND
                </div>
                <div className="absolute w-[46px] h-12 top-[373px] left-[338px] bg-black rounded-[22.95px/24.23px]" />
                <img className="absolute w-3 h-[13px] top-[391px] left-[355px]" alt="Arrow" src="/img/details/arrow-2.svg" />
                <div className="flex w-[150px] h-5 items-center gap-[13px] absolute top-[367px] left-[51px]">
                  <div className="gap-[5.31px] inline-flex items-start relative flex-[0_0_auto]">
                    <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-1-10.svg" />
                    <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-2-10.svg" />
                    <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-3-10.svg" />
                    <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-4-9.svg" />
                    <img className="relative w-[8.79px] h-[16.72px]" alt="Star" src="/img/details/star-5-6.svg" />
                  </div>
                  <p className="relative w-fit mt-[-0.47px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                    <span className="text-black">4.5/</span>
                    <span className="text-[#00000099]">5</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute w-[1312px] h-[455px] top-0 left-0">
              <div className="absolute w-[422px] h-[455px] top-0 left-[-9px]">
                <div className="absolute w-[402px] h-[455px] top-0 left-[9px] bg-white rounded-[15.3px] border-[1.53px] border-solid border-[#dedede]" />
                <img
                  className="absolute w-[422px] h-[354px] top-[78px] left-0 object-cover"
                  alt="Untitled design"
                  src="/img/details/untitled-design-108.png"
                />
                <img
                  className="absolute w-[37px] h-[39px] top-[35px] left-[347px]"
                  alt="Favorite"
                  src="/img/details/favorite.svg"
                />
                <div className="absolute w-[179px] top-[330px] left-[51px] [font-family:'Poppins',Helvetica] font-medium text-black text-[18.4px] tracking-[0] leading-[25.4px] whitespace-nowrap">
                  Slick running shoes
                </div>
                <div className="absolute w-[190px] top-[397px] left-[51px] [font-family:'Inter',Helvetica] font-medium text-black text-[17.6px] tracking-[0] leading-[normal]">
                  4.999.000 VND
                </div>
                <div className="absolute w-[46px] h-12 top-[373px] left-[338px] bg-black rounded-[22.95px/24.23px]" />
                <img className="absolute w-3 h-[13px] top-[391px] left-[355px]" alt="Arrow" src="/img/details/arrow-2.svg" />
                <div className="flex w-[150px] h-5 items-center gap-[13px] absolute top-[367px] left-[51px]">
                  <div className="gap-[5.31px] inline-flex items-start relative flex-[0_0_auto]">
                    <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-1-10.svg" />
                    <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-2-10.svg" />
                    <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-3-10.svg" />
                    <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-4-9.svg" />
                    <img className="relative w-[8.79px] h-[16.72px]" alt="Star" src="/img/details/star-5-6.svg" />
                  </div>
                  <p className="relative w-fit mt-[-0.47px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                    <span className="text-black">4.5/</span>
                    <span className="text-[#00000099]">5</span>
                  </p>
                </div>
              </div>
              <div className="absolute w-[406px] h-[455px] top-0 left-[465px]">
                <div className="relative w-[422px] h-[455px] left-[-9px]">
                  <div className="absolute w-[402px] h-[455px] top-0 left-[9px] bg-white rounded-[15.3px] border-[1.53px] border-solid border-[#dedede]" />
                  <img
                    className="absolute w-[422px] h-[354px] top-[78px] left-0 object-cover"
                    alt="Untitled design"
                    src="/img/details/untitled-design-108.png"
                  />
                  <img
                    className="absolute w-[37px] h-[39px] top-[35px] left-[347px]"
                    alt="Favorite"
                    src="/img/details/favorite.svg"
                  />
                  <div className="absolute w-[179px] top-[330px] left-[51px] [font-family:'Poppins',Helvetica] font-medium text-black text-[18.4px] tracking-[0] leading-[25.4px] whitespace-nowrap">
                    Slick running shoes
                  </div>
                  <div className="absolute w-[190px] top-[397px] left-[51px] [font-family:'Inter',Helvetica] font-medium text-black text-[17.6px] tracking-[0] leading-[normal]">
                    4.999.000 VND
                  </div>
                  <div className="absolute w-[46px] h-12 top-[373px] left-[338px] bg-black rounded-[22.95px/24.23px]" />
                  <img className="absolute w-3 h-[13px] top-[391px] left-[355px]" alt="Arrow" src="/img/details/arrow-2.svg" />
                  <div className="flex w-[150px] h-5 items-center gap-[13px] absolute top-[367px] left-[51px]">
                    <div className="gap-[5.31px] inline-flex items-start relative flex-[0_0_auto]">
                      <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-1-10.svg" />
                      <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-2-10.svg" />
                      <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-3-10.svg" />
                      <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-4-9.svg" />
                      <img className="relative w-[8.79px] h-[16.72px]" alt="Star" src="/img/details/star-5-6.svg" />
                    </div>
                    <p className="relative w-fit mt-[-0.47px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                      <span className="text-black">4.5/</span>
                      <span className="text-[#00000099]">5</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute w-[406px] h-[455px] top-0 left-[906px]">
                <div className="relative w-[422px] h-[455px] left-[-9px]">
                  <div className="absolute w-[402px] h-[455px] top-0 left-[9px] bg-white rounded-[15.3px] border-[1.53px] border-solid border-[#dedede]" />
                  <img
                    className="absolute w-[422px] h-[354px] top-[78px] left-0 object-cover"
                    alt="Untitled design"
                    src="/img/details/untitled-design-108.png"
                  />
                  <img
                    className="absolute w-[37px] h-[39px] top-[35px] left-[347px]"
                    alt="Favorite"
                    src="/img/details/favorite.svg"
                  />
                  <div className="absolute w-[179px] top-[330px] left-[51px] [font-family:'Poppins',Helvetica] font-medium text-black text-[18.4px] tracking-[0] leading-[25.4px] whitespace-nowrap">
                    Slick running shoes
                  </div>
                  <div className="absolute w-[190px] top-[397px] left-[51px] [font-family:'Inter',Helvetica] font-medium text-black text-[17.6px] tracking-[0] leading-[normal]">
                    4.999.000 VND
                  </div>
                  <div className="absolute w-[46px] h-12 top-[373px] left-[338px] bg-black rounded-[22.95px/24.23px]" />
                  <img className="absolute w-3 h-[13px] top-[391px] left-[355px]" alt="Arrow" src="/img/details/arrow-2.svg" />
                  <div className="flex w-[150px] h-5 items-center gap-[13px] absolute top-[367px] left-[51px]">
                    <div className="gap-[5.31px] inline-flex items-start relative flex-[0_0_auto]">
                      <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-1-10.svg" />
                      <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-2-10.svg" />
                      <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-3-10.svg" />
                      <img className="relative w-[17.58px] h-[16.72px]" alt="Star" src="/img/details/star-4-9.svg" />
                      <img className="relative w-[8.79px] h-[16.72px]" alt="Star" src="/img/details/star-5-6.svg" />
                    </div>
                    <p className="relative w-fit mt-[-0.47px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                      <span className="text-black">4.5/</span>
                      <span className="text-[#00000099]">5</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Details;