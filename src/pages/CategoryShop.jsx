import React from "react";
import { Button } from "../components/Button";
import { PaginationNumber } from "../components/PaginationNumber";
import { ArrowLeft1 } from "../icons/ArrowLeft1";
import { ArrowRight1 } from "../icons/ArrowRight1";

const CategoryShop = () => {
  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="bg-[#ffffff] overflow-hidden w-[1440px] h-[2332px] relative">
        <div className="inline-flex items-center gap-3 absolute top-[158px] left-[100px]">
          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Home
            </div>
            <img className="relative w-4 h-4" alt="Frame" src="../img/frame.svg" />
          </div>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
            Casual
          </div>
        </div>
        <div className="inline-flex items-center gap-3 absolute top-[222px] left-[944px]">
          <p className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Showing 1-10 of 100 Products
          </p>
          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            <p className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-base tracking-[0] leading-[normal] whitespace-nowrap">
              <span className="text-[#00000099]">Sort by: </span>
              <span className="font-bold italic text-black">Most Popular</span>
            </p>
            <img className="relative w-4 h-4" alt="Frame" src="/img/frame-1.svg" />
          </div>
        </div>
        <img
          className="w-[1240px] top-[133px] left-[100px] absolute h-px object-cover"
          alt="Line"
          src="/img/line-4.svg"
        />
        <img
          className="w-[925px] top-[1443px] left-[420px] absolute h-px object-cover"
          alt="Line"
          src="/img/line-9.svg"
        />
        <div className="absolute w-[1441px] h-[589px] top-[1584px] left-1">
          <div className="relative h-[589px]">
            <div className="absolute w-[1441px] h-[499px] top-[90px] left-0 bg-[#efefef]" />
            <img
              className="w-[1240px] top-[456px] left-[101px] absolute h-px object-cover"
              alt="Line"
              src="/img/line-8.svg"
            />
            <div className="flex w-[1240px] items-center justify-between px-16 py-9 absolute top-0 left-[101px] bg-black rounded-[20px] overflow-hidden">
              <p className="relative w-[551px] h-[94px] [font-family:'Roboto',Helvetica] font-bold text-[#ffffff] text-[40px] tracking-[0] leading-[45px]">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </p>
              <div className="inline-flex flex-col items-start gap-3.5 relative flex-[0_0_auto]">
                <div className="flex w-[349px] items-start gap-3 px-4 py-3 relative flex-[0_0_auto] bg-[#ffffff] rounded-[62px] overflow-hidden">
                  <img className="relative w-6 h-6" alt="Frame" src="/img/frame-2.svg" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000066] text-base tracking-[0] leading-[normal]">
                    Enter your email address
                  </div>
                </div>
                <div className="flex w-[349px] items-center justify-center gap-3 px-4 py-3 relative flex-[0_0_auto] bg-[#ffffff] rounded-[62px] overflow-hidden">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-base tracking-[0] leading-[normal]">
                    Subscribe to Newsletter
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[1240px] items-start justify-between absolute top-[230px] left-[101px]">
              <div className="inline-flex flex-col items-start gap-[35px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-[25px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-[33.5px] tracking-[0] leading-[normal] whitespace-nowrap">
                    SHOP.CO
                  </div>
                  <p className="relative w-[248px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-[22px]">
                    We have clothes that suits your style and which you’re proud to wear. From women to men.
                  </p>
                </div>
                <div className="relative w-[148px] h-7">
                  <div className="absolute w-7 h-7 top-0 left-0 bg-[#ffffff] rounded-[14px] border border-solid border-[#00000033]">
                    <img
                      className="absolute w-[11px] h-[9px] top-[9px] left-2"
                      alt="Logo twitter"
                      src="/img/logo-twitter-2.png"
                    />
                  </div>
                  <div className="absolute w-7 h-7 top-0 left-10 bg-black rounded-[14px]">
                    <img
                      className="absolute w-1.5 h-3 top-2 left-[11px]"
                      alt="Logo fb simple"
                      src="/img/logo-fb-simple-2.png"
                    />
                  </div>
                  <div className="absolute w-7 h-7 top-0 left-20 bg-[#ffffff] rounded-[14px] border border-solid border-[#00000033]">
                    <img
                      className="absolute w-3.5 h-3.5 top-1.5 left-1.5"
                      alt="Logo instagram"
                      src="/img/logo-instagram-1.png"
                    />
                  </div>
                  <div className="absolute w-7 h-7 top-0 left-[120px] bg-[#ffffff] rounded-[14px] border border-solid border-[#00000033]">
                    <img
                      className="absolute w-[13px] h-[13px] top-1.5 left-[7px]"
                      alt="Logo github"
                      src="/img/logo-github-1.png"
                    />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[26px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-base tracking-[3.00px] leading-[18px] whitespace-nowrap">
                  COMPANY
                </div>
                <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[19px]">
                  About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                  <br />
                  Features&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                  <br />
                  Works&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                  <br />
                  Career
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[26px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-base tracking-[3.00px] leading-[18px] whitespace-nowrap">
                  HELP
                </div>
                <p className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[19px]">
                  Customer Support
                  <br />
                  <br />
                  Delivery Details
                  <br />
                  <br />
                  Terms &amp; Conditions
                  <br />
                  <br />
                  Privacy Policy
                </p>
              </div>
              <div className="inline-flex flex-col items-start gap-[26px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-base tracking-[3.00px] leading-[18px] whitespace-nowrap">
                  FAQ
                </div>
                <div className="relative w-[149px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[19px]">
                  Account
                  <br />
                  <br />
                  Manage Deliveries
                  <br />
                  <br />
                  Orders
                  <br />
                  <br />
                  Payments
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[26px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-base tracking-[3.00px] leading-[18px] whitespace-nowrap">
                  RESOURCES
                </div>
                <p className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[19px]">
                  Free eBooks
                  <br />
                  <br />
                  Development Tutorial
                  <br />
                  <br />
                  How to - Blog
                  <br />
                  <br />
                  Youtube Playlist
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[295px] h-[1220px] items-start gap-6 px-6 py-5 absolute top-[204px] left-[100px] rounded-[20px] overflow-hidden border border-solid border-[#0000001a]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
              Filters
            </div>
            <img className="relative w-6 h-6" alt="Frame" src="/img/frame-3.svg" />
          </div>
          <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/img/line-10.svg" />
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Adidas
              </div>
              <img className="relative w-4 h-4" alt="Frame" src="/img/frame-8.svg" />
            </div>
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Nike
                </div>
              </div>
              <img className="relative w-4 h-4" alt="Frame" src="/img/frame-8.svg" />
            </div>
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Puma
              </div>
              <img className="relative w-4 h-4" alt="Frame" src="/img/frame-8.svg" />
            </div>
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Vans
              </div>
              <img className="relative w-4 h-4" alt="Frame" src="/img/frame-8.svg" />
            </div>
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Converse
              </div>
              <img className="relative w-4 h-4" alt="Frame" src="/img/frame-8.svg" />
            </div>
          </div>
          <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/img/line-10.svg" />
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
                Price
              </div>
              <img className="relative w-4 h-4" alt="Frame" src="/img/frame-13.svg" />
            </div>
            <div className="relative w-[251px] h-[43px] mr-[-4.00px]">
              <div className="absolute top-6 left-[37px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-sm tracking-[0] leading-[normal]">
                $50
              </div>
              <div className="absolute top-6 left-[182px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-sm text-center tracking-[0] leading-[normal]">
                $200
              </div>
              <div className="absolute w-[247px] h-5 top-0 left-0">
                <div className="relative h-5">
                  <div className="absolute w-[247px] h-1.5 top-2 left-0 bg-[#efefef] rounded-[20px]" />
                  <div className="absolute w-[150px] h-1.5 top-2 left-[43px] bg-black rounded-[20px]" />
                  <div className="absolute w-5 h-5 top-0 left-[41px] bg-black rounded-[10px]" />
                  <div className="absolute w-5 h-5 top-0 left-[187px] bg-black rounded-[10px]" />
                </div>
              </div>
            </div>
          </div>
          <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/img/line-13.svg" />
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
                Colors
              </div>
              <img className="relative w-4 h-4" alt="Frame" src="/img/frame-13.svg" />
            </div>
            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div className="flex w-[247px] items-center justify-between relative flex-[0_0_auto]">
                <div className="relative w-[37px] h-[37px] bg-[#00c12a] rounded-[18.5px] border-2 border-solid border-[#00000033]" />
                <div className="relative w-[37px] h-[37px] bg-[#f50505] rounded-[18.5px] border border-solid border-[#00000033]" />
                <div className="relative w-[37px] h-[37px] bg-[#f5dd05] rounded-[18.5px] border border-solid border-[#00000033]" />
                <div className="bg-[#f57805] relative w-[37px] h-[37px] rounded-[18.5px] border border-solid border-[#00000033]" />
                <div className="bg-[#05c9f5] border border-solid border-[#00000033] relative w-[37px] h-[37px] rounded-[18.5px]" />
              </div>
              <div className="flex w-[247px] items-center justify-between relative flex-[0_0_auto]">
                <div className="relative w-[37px] h-[37px] bg-[#053af5] rounded-[18.5px] border-2 border-solid border-[#00000033]">
                  <img className="absolute w-4 h-4 top-2 left-2" alt="Frame" src="/img/frame-11.svg" />
                </div>
                <div className="relative w-[37px] h-[37px] bg-[#7d05f5] rounded-[18.5px] border border-solid border-[#00000033]" />
                <div className="relative w-[37px] h-[37px] bg-[#f505a3] rounded-[18.5px] border border-solid border-[#00000033]" />
                <div className="bg-[#ffffff] relative w-[37px] h-[37px] rounded-[18.5px] border border-solid border-[#00000033]" />
                <div className="bg-black relative w-[37px] h-[37px] rounded-[18.5px]" />
              </div>
            </div>
          </div>
          <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/img/line-13.svg" />
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
                Size
              </div>
              <img className="relative w-4 h-4" alt="Frame" src="/img/frame-13.svg" />
            </div>
            <div className="flex flex-wrap h-[190px] items-start gap-[8px_8px] relative self-stretch w-full">
              <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-[normal]">
                  30
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-[normal]">
                  31
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-[normal]">
                  32
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-[normal]">
                  33
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 relative flex-[0_0_auto] bg-black rounded-[62px] overflow-hidden">
                <div className="mt-[-1.00px] text-[#ffffff] leading-[normal] relative w-fit [font-family:'Open_Sans',Helvetica] font-bold italic text-sm tracking-[0]">
                  34
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-[normal]">
                  35
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-[normal]">
                  36
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-[normal]">
                  37
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-[normal]">
                  39
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-[normal]">
                  40
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-[normal]">
                  41
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-sm tracking-[0] leading-[normal]">
                  42
                </div>
              </div>
            </div>
          </div>
          <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/img/line-13.svg" />
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
                Dress Style
              </div>
              <img className="relative w-4 h-4" alt="Frame" src="/img/frame-13.svg" />
            </div>
            <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit font-normal text-[#00000099] text-base whitespace-nowrap [font-family:'Open_Sans',Helvetica] tracking-[0] leading-[normal]">
                  Casual
                </div>
                <img className="relative w-4 h-4" alt="Frame" src="/img/frame-17.svg" />
              </div>
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Formal
                </div>
                <img className="relative w-4 h-4" alt="Frame" src="/img/frame-17.svg" />
              </div>
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Party
                </div>
                <img className="relative w-4 h-4" alt="Frame" src="/img/frame-17.svg" />
              </div>
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Gym
                </div>
                <img className="relative w-4 h-4" alt="Frame" src="/img/frame-17.svg" />
              </div>
            </div>
          </div>
          <div className="flex h-12 items-center justify-center gap-3 px-[54px] py-4 relative self-stretch w-full bg-black rounded-[62px] overflow-hidden">
            <div className="relative w-fit mt-[-2.50px] mb-[-0.50px] [font-family:'Open_Sans',Helvetica] font-bold italic text-[#ffffff] text-sm tracking-[0] leading-[normal]">
              Apply Filter
            </div>
          </div>
        </div>
        <div className="absolute h-11 top-[202px] left-[415px] font-bold text-black text-[32px] [font-family:'Open_Sans',Helvetica] tracking-[0] leading-[normal]">
          Casual
        </div>
        <div className="inline-flex items-center gap-[216px] absolute top-[1464px] left-[420px]">
          <Button
            buttonBaseIcon={<ArrowLeft1 className="!relative !w-5 !h-5" />}
            buttonBaseSizeMdIconLeadingClassName="!border-[#0000001a] !flex-[0_0_auto] !shadow-[unset] !bg-[#ffffff]"
            buttonBaseText="Previous"
            buttonBaseTextClassName="!text-black !tracking-[0] !text-sm !italic !font-bold ![font-family:'Open_Sans',Helvetica] !leading-5"
            className="!flex-[0_0_auto]"
            destructive={false}
            hierarchy="secondary-gray"
            icon="leading"
            size="sm"
            state="default"
          />
          <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
            <PaginationNumber
              className="!relative !bg-[#0000000f]"
              numberClassName="!text-black !tracking-[0] !text-sm !italic !font-bold ![font-family:'Open_Sans',Helvetica] !leading-5"
              shape="square"
              state="hover-active"
            />
            <PaginationNumber
              className="!relative"
              numberClassName="!text-[#00000080] !tracking-[0] !text-sm !italic !font-bold ![font-family:'Open_Sans',Helvetica] !leading-5"
              shape="square"
              state="default"
              text="2"
            />
            <PaginationNumber
              className="!relative"
              numberClassName="!text-[#00000080] !tracking-[0] !text-sm !italic !font-bold ![font-family:'Open_Sans',Helvetica] !leading-5"
              shape="square"
              state="default"
              text="3"
            />
            <PaginationNumber
              className="!relative"
              numberClassName="!text-[#00000080] !tracking-[0] !text-sm !italic !font-bold ![font-family:'Open_Sans',Helvetica] !leading-5"
              shape="square"
              state="default"
              text="..."
            />
            <PaginationNumber
              className="!relative"
              numberClassName="!text-[#00000080] !tracking-[0] !text-sm !italic !font-bold ![font-family:'Open_Sans',Helvetica] !leading-5"
              shape="square"
              state="default"
              text="8"
            />
            <PaginationNumber
              className="!relative"
              numberClassName="!text-[#00000080] !tracking-[0] !text-sm !italic !font-bold ![font-family:'Open_Sans',Helvetica] !leading-5"
              shape="square"
              state="default"
              text="9"
            />
            <PaginationNumber
              className="!relative"
              numberClassName="!text-[#00000080] !tracking-[0] !text-sm !italic !font-bold ![font-family:'Open_Sans',Helvetica] !leading-5"
              shape="square"
              state="default"
              text="10"
            />
          </div>
          <Button
            buttonBaseSizeMdIconLeadingClassName="!border-[#0000001a] !flex-[0_0_auto] !shadow-[unset] !bg-[#ffffff]"
            buttonBaseText="Next"
            buttonBaseTextClassNameOverride="!text-black !tracking-[0] !text-sm !italic !font-bold ![font-family:'Open_Sans',Helvetica] !leading-5"
            className="!flex-[0_0_auto]"
            destructive={false}
            hierarchy="secondary-gray"
            icon="trailing"
            override={<ArrowRight1 className="!relative !w-5 !h-5" />}
            size="sm"
            state="default"
          />
        </div>
        <div className="absolute w-[300px] h-[317px] top-[307px] left-[452px]">
          <div className="relative w-[310px] h-[317px] left-[-7px]">
            <div className="absolute w-[296px] h-[317px] top-0 left-[7px] bg-[#ffffff] rounded-[11.24px] border-[1.12px] border-solid border-[#dedede]" />
            <img
              className="absolute w-[310px] h-[252px] top-[55px] left-0 object-cover"
              alt="Untitled design"
              src="/img/untitled-design-108-1-6.png"
            />
            <img className="absolute w-[27px] h-[27px] top-6 left-[255px]" alt="Favorite" src="/img/favorite-8.png" />
            <p className="absolute top-[230px] left-[38px] [font-family:'Poppins',Helvetica] font-medium text-black text-[13.5px] tracking-[0] leading-[18.6px] whitespace-nowrap">
              Formal Slick shoe for man
            </p>
            <div className="absolute top-[268px] left-[38px] [font-family:'Inter',Helvetica] font-medium text-black text-[12.2px] tracking-[0] leading-[normal]">
              4.999.000 VND
            </div>
            <div className="absolute w-[34px] h-[34px] top-[260px] left-[248px] bg-black rounded-[16.86px]" />
            <img className="absolute w-[9px] h-[9px] top-[272px] left-[261px]" alt="Arrow" src="/img/arrow-2-7.svg" />
            <div className="flex w-[103px] h-[13px] items-center gap-[9.05px] absolute top-[253px] left-[38px]">
              <div className="inline-flex items-start gap-[3.7px] relative flex-[0_0_auto]">
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-1-6.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-2-6.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-3-6.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-4-6.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-5-8.svg" />
              </div>
              <p className="relative w-fit mt-[-0.58px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-[9.7px] tracking-[0] leading-[normal]">
                <span className="text-black">5/</span>
                <span className="text-[#00000099]">5</span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute w-[625px] h-[317px] top-[307px] left-[775px]">
          <div className="absolute w-[310px] h-[317px] top-0 left-[-7px]">
            <div className="absolute w-[296px] h-[317px] top-0 left-[7px] bg-[#ffffff] rounded-[11.24px] border-[1.12px] border-solid border-[#dedede]" />
            <img
              className="absolute w-[310px] h-[252px] top-[60px] left-0 object-cover"
              alt="Untitled design"
              src="/img/untitled-design-108-1-8.png"
            />
            <img
              className="absolute w-[27px] h-[27px] top-[29px] left-[255px]"
              alt="Favorite"
              src="/img/favorite-8.png"
            />
            <p className="absolute top-[235px] left-[38px] [font-family:'Poppins',Helvetica] font-medium text-black text-[13.5px] tracking-[0] leading-[18.6px] whitespace-nowrap">
              Formal Slick shoe for man
            </p>
            <div className="absolute top-[273px] left-[38px] [font-family:'Inter',Helvetica] font-medium text-black text-[12.2px] tracking-[0] leading-[normal]">
              4.999.000 VND
            </div>
            <div className="absolute w-[34px] h-[34px] top-[265px] left-[248px] bg-black rounded-[16.86px]" />
            <img className="absolute w-[9px] h-[9px] top-[277px] left-[261px]" alt="Arrow" src="/img/arrow-2-7.svg" />
            <div className="flex w-[103px] h-[13px] items-center gap-[9.05px] absolute top-[258px] left-[38px]">
              <div className="inline-flex items-start gap-[3.7px] relative flex-[0_0_auto]">
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-1-7.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-2-7.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-3-7.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-4-7.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-5-7.svg" />
              </div>
              <p className="relative w-fit mt-[-0.58px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-[9.7px] tracking-[0] leading-[normal]">
                <span className="text-black">5/</span>
                <span className="text-[#00000099]">5</span>
              </p>
            </div>
          </div>
          <div className="absolute w-[300px] h-[317px] top-0 left-[325px]">
            <div className="relative w-[310px] h-[317px] left-[-7px]">
              <div className="absolute w-[296px] h-[317px] top-0 left-[7px] bg-[#ffffff] rounded-[11.24px] border-[1.12px] border-solid border-[#dedede]" />
              <img
                className="absolute w-[310px] h-[252px] top-[55px] left-0 object-cover"
                alt="Untitled design"
                src="/img/untitled-design-108-1-8.png"
              />
              <img className="absolute w-[27px] h-[27px] top-6 left-[255px]" alt="Favorite" src="/img/favorite-8.png" />
              <p className="absolute top-[230px] left-[38px] [font-family:'Poppins',Helvetica] font-medium text-black text-[13.5px] tracking-[0] leading-[18.6px] whitespace-nowrap">
                Formal Slick shoe for man
              </p>
              <div className="absolute top-[268px] left-[38px] [font-family:'Inter',Helvetica] font-medium text-black text-[12.2px] tracking-[0] leading-[normal]">
                4.999.000 VND
              </div>
              <div className="absolute w-[34px] h-[34px] top-[260px] left-[248px] bg-black rounded-[16.86px]" />
              <img className="absolute w-[9px] h-[9px] top-[272px] left-[261px]" alt="Arrow" src="/img/arrow-2-8.svg" />
              <div className="flex w-[103px] h-[13px] items-center gap-[9.05px] absolute top-[253px] left-[38px]">
                <div className="inline-flex items-start gap-[3.7px] relative flex-[0_0_auto]">
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-1-8.svg" />
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-2-8.svg" />
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-3-8.svg" />
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-4-8.svg" />
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-5-8.svg" />
                </div>
                <p className="relative w-fit mt-[-0.58px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-[9.7px] tracking-[0] leading-[normal]">
                  <span className="text-black">5/</span>
                  <span className="text-[#00000099]">5</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[300px] h-[317px] top-[1010px] left-[450px]">
          <div className="relative w-[310px] h-[317px] left-[-7px]">
            <div className="absolute w-[296px] h-[317px] top-0 left-[7px] bg-[#ffffff] rounded-[11.24px] border-[1.12px] border-solid border-[#dedede]" />
            <img
              className="absolute w-[310px] h-[252px] top-[55px] left-0 object-cover"
              alt="Untitled design"
              src="/img/untitled-design-108-1-6.png"
            />
            <img className="absolute w-[27px] h-[27px] top-6 left-[255px]" alt="Favorite" src="/img/favorite-8.png" />
            <p className="absolute top-[230px] left-[38px] [font-family:'Poppins',Helvetica] font-medium text-black text-[13.5px] tracking-[0] leading-[18.6px] whitespace-nowrap">
              Formal Slick shoe for man
            </p>
            <div className="absolute top-[268px] left-[38px] [font-family:'Inter',Helvetica] font-medium text-black text-[12.2px] tracking-[0] leading-[normal]">
              4.999.000 VND
            </div>
            <div className="absolute w-[34px] h-[34px] top-[260px] left-[248px] bg-black rounded-[16.86px]" />
            <img className="absolute w-[9px] h-[9px] top-[272px] left-[261px]" alt="Arrow" src="/img/arrow-2-7.svg" />
            <div className="flex w-[103px] h-[13px] items-center gap-[9.05px] absolute top-[253px] left-[38px]">
              <div className="inline-flex items-start gap-[3.7px] relative flex-[0_0_auto]">
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-1-3.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-2-3.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-3-3.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-4-7.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-5-5.svg" />
              </div>
              <p className="relative w-fit mt-[-0.58px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-[9.7px] tracking-[0] leading-[normal]">
                <span className="text-black">5/</span>
                <span className="text-[#00000099]">5</span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute w-[625px] h-[317px] top-[1010px] left-[773px]">
          <div className="absolute w-[310px] h-[317px] top-0 left-[-7px]">
            <div className="absolute w-[296px] h-[317px] top-0 left-[7px] bg-[#ffffff] rounded-[11.24px] border-[1.12px] border-solid border-[#dedede]" />
            <img
              className="absolute w-[310px] h-[252px] top-[60px] left-0 object-cover"
              alt="Untitled design"
              src="/img/untitled-design-108-1-8.png"
            />
            <img
              className="absolute w-[27px] h-[27px] top-[29px] left-[255px]"
              alt="Favorite"
              src="/img/favorite-8.png"
            />
            <p className="absolute top-[235px] left-[38px] [font-family:'Poppins',Helvetica] font-medium text-black text-[13.5px] tracking-[0] leading-[18.6px] whitespace-nowrap">
              Formal Slick shoe for man
            </p>
            <div className="absolute top-[273px] left-[38px] [font-family:'Inter',Helvetica] font-medium text-black text-[12.2px] tracking-[0] leading-[normal]">
              4.999.000 VND
            </div>
            <div className="absolute w-[34px] h-[34px] top-[265px] left-[248px] bg-black rounded-[16.86px]" />
            <img className="absolute w-[9px] h-[9px] top-[277px] left-[261px]" alt="Arrow" src="/img/arrow-2-7.svg" />
            <div className="flex w-[103px] h-[13px] items-center gap-[9.05px] absolute top-[258px] left-[38px]">
              <div className="inline-flex items-start gap-[3.7px] relative flex-[0_0_auto]">
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-1-7.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-2-7.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-3-7.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-4-7.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-5-7.svg" />
              </div>
              <p className="relative w-fit mt-[-0.58px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-[9.7px] tracking-[0] leading-[normal]">
                <span className="text-black">5/</span>
                <span className="text-[#00000099]">5</span>
              </p>
            </div>
          </div>
          <div className="absolute w-[300px] h-[317px] top-0 left-[325px]">
            <div className="relative w-[310px] h-[317px] left-[-7px]">
              <div className="absolute w-[296px] h-[317px] top-0 left-[7px] bg-[#ffffff] rounded-[11.24px] border-[1.12px] border-solid border-[#dedede]" />
              <img
                className="absolute w-[310px] h-[252px] top-[55px] left-0 object-cover"
                alt="Untitled design"
                src="/img/untitled-design-108-1-8.png"
              />
              <img className="absolute w-[27px] h-[27px] top-6 left-[255px]" alt="Favorite" src="/img/favorite-8.png" />
              <p className="absolute top-[230px] left-[38px] [font-family:'Poppins',Helvetica] font-medium text-black text-[13.5px] tracking-[0] leading-[18.6px] whitespace-nowrap">
                Formal Slick shoe for man
              </p>
              <div className="absolute top-[268px] left-[38px] [font-family:'Inter',Helvetica] font-medium text-black text-[12.2px] tracking-[0] leading-[normal]">
                4.999.000 VND
              </div>
              <div className="absolute w-[34px] h-[34px] top-[260px] left-[248px] bg-black rounded-[16.86px]" />
              <img className="absolute w-[9px] h-[9px] top-[272px] left-[261px]" alt="Arrow" src="/img/arrow-2-8.svg" />
              <div className="flex w-[103px] h-[13px] items-center gap-[9.05px] absolute top-[253px] left-[38px]">
                <div className="inline-flex items-start gap-[3.7px] relative flex-[0_0_auto]">
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-1-7.svg" />
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-2-5.svg" />
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-3-7.svg" />
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-4-5.svg" />
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-5-5.svg" />
                </div>
                <p className="relative w-fit mt-[-0.58px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-[9.7px] tracking-[0] leading-[normal]">
                  <span className="text-black">5/</span>
                  <span className="text-[#00000099]">5</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[300px] h-[317px] top-[659px] left-[451px]">
          <div className="relative w-[310px] h-[317px] left-[-7px]">
            <div className="absolute w-[296px] h-[317px] top-0 left-[7px] bg-[#ffffff] rounded-[11.24px] border-[1.12px] border-solid border-[#dedede]" />
            <img
              className="absolute w-[310px] h-[252px] top-[55px] left-0 object-cover"
              alt="Untitled design"
              src="/img/untitled-design-108-1-6.png"
            />
            <img className="absolute w-[27px] h-[27px] top-6 left-[255px]" alt="Favorite" src="/img/favorite-8.png" />
            <p className="absolute top-[230px] left-[38px] [font-family:'Poppins',Helvetica] font-medium text-black text-[13.5px] tracking-[0] leading-[18.6px] whitespace-nowrap">
              Formal Slick shoe for man
            </p>
            <div className="absolute top-[268px] left-[38px] [font-family:'Inter',Helvetica] font-medium text-black text-[12.2px] tracking-[0] leading-[normal]">
              4.999.000 VND
            </div>
            <div className="absolute w-[34px] h-[34px] top-[260px] left-[248px] bg-black rounded-[16.86px]" />
            <img className="absolute w-[9px] h-[9px] top-[272px] left-[261px]" alt="Arrow" src="/img/arrow-2-7.svg" />
            <div className="flex w-[103px] h-[13px] items-center gap-[9.05px] absolute top-[253px] left-[38px]">
              <div className="inline-flex items-start gap-[3.7px] relative flex-[0_0_auto]">
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-1-6.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-2-6.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-3-6.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-4-6.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-5-8.svg" />
              </div>
              <p className="relative w-fit mt-[-0.58px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-[9.7px] tracking-[0] leading-[normal]">
                <span className="text-black">5/</span>
                <span className="text-[#00000099]">5</span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute w-[625px] h-[317px] top-[659px] left-[774px]">
          <div className="absolute w-[310px] h-[317px] top-0 left-[-7px]">
            <div className="absolute w-[296px] h-[317px] top-0 left-[7px] bg-[#ffffff] rounded-[11.24px] border-[1.12px] border-solid border-[#dedede]" />
            <img
              className="absolute w-[310px] h-[252px] top-[60px] left-0 object-cover"
              alt="Untitled design"
              src="/img/untitled-design-108-1-8.png"
            />
            <img
              className="absolute w-[27px] h-[27px] top-[29px] left-[255px]"
              alt="Favorite"
              src="/img/favorite-8.png"
            />
            <p className="absolute top-[235px] left-[38px] [font-family:'Poppins',Helvetica] font-medium text-black text-[13.5px] tracking-[0] leading-[18.6px] whitespace-nowrap">
              Formal Slick shoe for man
            </p>
            <div className="absolute top-[273px] left-[38px] [font-family:'Inter',Helvetica] font-medium text-black text-[12.2px] tracking-[0] leading-[normal]">
              4.999.000 VND
            </div>
            <div className="absolute w-[34px] h-[34px] top-[265px] left-[248px] bg-black rounded-[16.86px]" />
            <img className="absolute w-[9px] h-[9px] top-[277px] left-[261px]" alt="Arrow" src="/img/arrow-2-7.svg" />
            <div className="flex w-[103px] h-[13px] items-center gap-[9.05px] absolute top-[258px] left-[38px]">
              <div className="inline-flex items-start gap-[3.7px] relative flex-[0_0_auto]">
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-1-7.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-2-7.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-3-7.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-4-7.svg" />
                <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-5-7.svg" />
              </div>
              <p className="relative w-fit mt-[-0.58px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-[9.7px] tracking-[0] leading-[normal]">
                <span className="text-black">5/</span>
                <span className="text-[#00000099]">5</span>
              </p>
            </div>
          </div>
          <div className="absolute w-[300px] h-[317px] top-0 left-[325px]">
            <div className="relative w-[310px] h-[317px] left-[-7px]">
              <div className="absolute w-[296px] h-[317px] top-0 left-[7px] bg-[#ffffff] rounded-[11.24px] border-[1.12px] border-solid border-[#dedede]" />
              <img
                className="absolute w-[310px] h-[252px] top-[55px] left-0 object-cover"
                alt="Untitled design"
                src="/img/untitled-design-108-1-8.png"
              />
              <img className="absolute w-[27px] h-[27px] top-6 left-[255px]" alt="Favorite" src="/img/favorite-8.png" />
              <p className="absolute top-[230px] left-[38px] [font-family:'Poppins',Helvetica] font-medium text-black text-[13.5px] tracking-[0] leading-[18.6px] whitespace-nowrap">
                Formal Slick shoe for man
              </p>
              <div className="absolute top-[268px] left-[38px] [font-family:'Inter',Helvetica] font-medium text-black text-[12.2px] tracking-[0] leading-[normal]">
                4.999.000 VND
              </div>
              <div className="absolute w-[34px] h-[34px] top-[260px] left-[248px] bg-black rounded-[16.86px]" />
              <img className="absolute w-[9px] h-[9px] top-[272px] left-[261px]" alt="Arrow" src="/img/arrow-2-8.svg" />
              <div className="flex w-[103px] h-[13px] items-center gap-[9.05px] absolute top-[253px] left-[38px]">
                <div className="inline-flex items-start gap-[3.7px] relative flex-[0_0_auto]">
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-1-8.svg" />
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-2-8.svg" />
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-3-8.svg" />
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-4-8.svg" />
                  <img className="relative w-[12.24px] h-[11.64px]" alt="Star" src="/img/star-5-8.svg" />
                </div>
                <p className="relative w-fit mt-[-0.58px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-[9.7px] tracking-[0] leading-[normal]">
                  <span className="text-black">5/</span>
                  <span className="text-[#00000099]">5</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default CategoryShop;