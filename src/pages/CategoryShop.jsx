import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import { PaginationNumber } from "../components/PaginationNumber";
import { ArrowLeft1 } from "../icons/ArrowLeft1";
import { ArrowRight1 } from "../icons/ArrowRight1";
import Categorys from '../components/Categorys'; // Import thành phần Categorys
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const CategoryShop = () => {
  const products = Array(9).fill(null);
  return (
    <div>
      <Header /> {/* Sử dụng component Header */}

      {/* Phần nội dung chính của trang Home */}
      <main className="container mx-auto py-4">
        {/* Thêm nội dung trang chủ tại đây */}
        <div className="bg-[#ffffff] flex flex-row justify-center w-full">
          <div className="bg-[#ffffff] overflow-hidden w-[1440px] h-[2332px] relative">
            <div className="inline-flex items-center gap-3 absolute top-[158px] left-[100px]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Home
                </div>
                <IoIosArrowForward className="relative w-4 h-4" alt="Frame" />
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
                <IoIosArrowDown className="relative w-4 h-4" alt="Frame" />
              </div>
            </div>
            <img
              className="w-[1240px] top-[133px] left-[100px] absolute h-px object-cover"
              alt="Line"
              src="./img/details/line-8.svg"
            />
            <img
              className="w-[925px] top-[1443px] left-[420px] absolute h-px object-cover"
              alt="Line"
              src="/img/line-9.svg"
            />
            
            <div className="flex flex-col w-[295px] h-[1220px] items-start gap-6 px-6 py-5 absolute top-[204px] left-[100px] rounded-[20px] overflow-hidden border border-solid border-[#0000001a]">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
                  Filters
                </div>
                <img className="relative w-6 h-6" alt="Frame" src="./img/details/frame-3.svg" />
              </div>
              <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/img/line-10.svg" />
              <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Adidas
                  </div>
                  <IoIosArrowForward className="relative w-4 h-4" alt="Frame" />
                </div>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Nike
                    </div>
                  </div>
                  <IoIosArrowForward className="relative w-4 h-4" alt="Frame" />
                </div>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Puma
                  </div>
                  <IoIosArrowForward className="relative w-4 h-4" alt="Frame" />
                </div>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Vans
                  </div>
                  <IoIosArrowForward className="relative w-4 h-4" alt="Frame" />
                </div>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Converse
                  </div>
                  <IoIosArrowForward className="relative w-4 h-4" alt="Frame" />
                </div>
              </div>
              <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/img/line-10.svg" />
              <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
                    Price
                  </div>
                  <IoIosArrowUp className="relative w-4 h-4" alt="Frame" />
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
                  <IoIosArrowUp className="relative w-4 h-4" alt="Frame" />
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
                      <img className="absolute w-4 h-4 top-2 left-2" alt="Frame" src="./img/details/frame-7.svg" />
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
                  <IoIosArrowUp className="relative w-4 h-4" alt="Frame" />
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
                  <IoIosArrowUp className="relative w-4 h-4" alt="Frame" />
                </div>
                <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit font-normal text-[#00000099] text-base whitespace-nowrap [font-family:'Open_Sans',Helvetica] tracking-[0] leading-[normal]">
                      Casual
                    </div>
                    <IoIosArrowForward className="relative w-4 h-4" alt="Frame" />
                  </div>
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Formal
                    </div>
                    <IoIosArrowForward className="relative w-4 h-4" alt="Frame" />
                  </div>
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Party
                    </div>
                    <IoIosArrowForward className="relative w-4 h-4" alt="Frame" />
                  </div>
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Gym
                    </div>
                    <IoIosArrowForward className="relative w-4 h-4" alt="Frame" />
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
            <div className="grid grid-cols-3 gap-4 absolute top-[307px] left-[452px]">

              {products.map((_, index) => (
                <Categorys key={index} />
              ))}
            </div>
          </div>
        </div>
        {/* Thêm nội dung khác như danh sách sản phẩm, banner, v.v. */}
      </main>

      <Footer /> {/* Sử dụng component Footer */}
    </div>
  );
};




export default CategoryShop;