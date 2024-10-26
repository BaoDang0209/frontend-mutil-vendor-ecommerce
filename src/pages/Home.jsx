import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { CgHeart } from "react-icons/cg";
import Rating from '../components/Rating'; 


const Home = () => {
  return (
    <div>
      <Header /> {/* Sử dụng component Header */}

      {/* Phần nội dung chính của trang Home */}
      <main className="container mx-auto py-4">
        {/* Thêm nội dung trang chủ tại đây */}
        <div className="bg-white flex flex-row justify-center w-full">
          <div className="bg-white overflow-hidden w-[1440px] h-[4329px] relative">
            <div className="absolute w-[425px] h-[455px] top-[1814px] left-[516px] bg-white rounded-[16.15px] border-[1.62px] border-solid border-[#dedede]">
              <div className="absolute w-[425px] h-[455px] -top-0.5 -left-0.5 bg-white rounded-[16.15px] border-[1.62px] border-solid border-[#dedede]" />
              <div className="inline-flex items-center gap-[13px] absolute top-[362px] left-11">
                <div className="inline-flex items-start gap-[5.31px] relative flex-[0_0_auto]">
                <Rating />
                </div>
                <p className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                  <span className="text-black">4.5/</span>
                  <span className="text-[#00000099]">5</span>
                </p>
              </div>
              <div className="absolute w-[402px] h-[387px] top-[35px] -left-px">
                <div className="relative w-[445px] h-[405px] -left-2.5">
                  <div className="absolute w-[445px] h-[405px] top-0 left-0">
                    <img
                      className="w-[445px] h-[362px] top-[43px] absolute left-0 object-cover"
                      alt="Untitled design"
                      src="/img/homepage/shoe2.png"
                    />
                    <img className="absolute w-[81px] h-[60px] top-0 left-[3px]" alt="Rectangle" src="./img/homepage/rectangle-15.svg" />
                    <div className="absolute top-[7px] left-[19px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[14.5px] tracking-[0] leading-[20.1px] whitespace-nowrap">
                      New
                    </div>
                    <div className="absolute top-[295px] left-[54px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[19.4px] tracking-[0] leading-[26.8px] whitespace-nowrap">
                      Sneakers shoe for man
                    </div>
                    <div className="top-[349px] left-[54px] whitespace-nowrap absolute [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[17.6px] tracking-[0] leading-[normal]">
                      4.999.000 VND
                    </div>
                    <BsArrowUpRightCircleFill className="w-12 top-[338px] left-[357px] rounded-[24.23px] absolute h-12" alt="Arrow" />
                  </div>
                  <CgHeart className="w-[39px] top-0 left-[367px] absolute h-[39px]" alt="Favorite"/>
                </div>
              </div>
            </div>
            <div className="absolute w-[1440px] h-[122px] top-[797px] left-0 bg-black">
              <div className="absolute top-[19px] left-[182px] [font-family:'Alata-Regular',Helvetica] font-normal text-white text-5xl tracking-[0] leading-[73.9px] whitespace-nowrap">
                Puma
              </div>
              <div className="absolute top-5 left-[394px] [font-family:'Alata-Regular',Helvetica] font-normal text-white text-5xl tracking-[0] leading-[73.9px] whitespace-nowrap">
                Adidas
              </div>
              <div className="absolute top-[19px] left-[640px] [font-family:'Alata-Regular',Helvetica] font-normal text-white text-5xl tracking-[0] leading-[73.9px] whitespace-nowrap">
                Nike
              </div>
              <div className="top-5 left-[816px] [font-family:'Alata-Regular',Helvetica] font-normal text-5xl leading-[73.9px] absolute text-white tracking-[0] whitespace-nowrap">
                Converse
              </div>
              <div className="absolute top-5 left-[1128px] [font-family:'Alata-Regular',Helvetica] font-normal text-white text-5xl tracking-[0] leading-[73.9px] whitespace-nowrap">
                Vans
              </div>
            </div>
            <img className="absolute w-[1240px] h-px top-[1508px] left-[109px] object-cover" alt="Line" src="/img/homepage/line-4.svg" />

            <div className="absolute w-[1440px] h-[796px] top-0 left-0">
              <div className="absolute w-[1440px] h-[796px] top-0 left-0">

                <div className="absolute w-[741px] h-[711px] top-[85px] left-[699px] [background:linear-gradient(180deg,rgb(249.9,249.9,249.9)_0%,rgb(228.46,228.46,228.46)_100%)]" />
                <img className="absolute w-[247px] h-[247px] top-[155px] left-[851px]" alt="Ellipse" src="/img/homepage/ellipse-2.svg" />
                <img className="absolute w-[247px] h-[247px] top-[317px] left-[1147px]" alt="Ellipse" src="/img/homepage/ellipse-5.svg" />
                <img className="absolute w-[247px] h-[247px] top-[431px] left-[904px]" alt="Ellipse" src="/img/homepage/ellipse-6.svg" />
                <img className="absolute w-[149px] h-[67px] top-[504px] left-[997px]" alt="Vector" src="/img/homepage/vector-1.svg" />
                <img className="absolute w-[231px] h-[107px] top-[539px] left-[1086px]" alt="Vector" src="/img/homepage/vector-2.svg" />
                <div className="absolute top-[365px] left-[440px] rotate-[-90.00deg] [font-family:'Poppins-ExtraBold',Helvetica] font-extrabold text-white text-[115.5px] tracking-[0] leading-[105.0px] whitespace-nowrap">
                  ULTIMATE
                </div>
                <img className="absolute w-[303px] h-28 top-[554px] left-[695px]" alt="Ellipse" src="/img/homepage/ellipse-1.svg" />
                <div className="absolute w-[26px] h-[92px] top-72 left-[842px]">
                  <div className="relative w-[35px] h-[95px] -left-2">
                    <img className="absolute w-[27px] h-[78px] top-4 left-0" alt="Vector" src="/img/homepage/vector-4.svg" />
                    <div className="absolute w-[23px] h-[23px] top-0 left-[11px] rounded-[11.75px] [background:linear-gradient(180deg,rgb(255,255,255)_0%)]" />
                  </div>
                </div>
                <img
                  className="absolute w-[667px] h-[690px] top-[85px] left-[711px] object-cover"
                  alt="Untitled design"
                  src="/img/homepage/Untitled design(109) 1.png"
                />
                <img className="absolute w-[275px] h-[318px] top-[304px] left-[931px]" alt="Vector" src="/img/homepage/vector-3.png" />
                <div className="absolute w-6 h-6 top-[300px] left-[1188px] rounded-xl [background:linear-gradient(180deg,rgb(255,255,255)_0%)]" />
                <div className="absolute top-[609px] left-[916px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[30.4px] tracking-[0] leading-[27.6px] whitespace-nowrap">
                  Trendy Slick Pro
                </div>
                <div className="absolute top-[663px] left-[974px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#000000a6] text-[27.2px] tracking-[0] leading-[24.7px] whitespace-nowrap">
                  15.000.000 Vnd
                </div>
                <p className="absolute w-[461px] top-[139px] left-40 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[78.4px] tracking-[0] leading-[87.8px]">
                  Find Your Sole Mate With Us
                </p>
                <p className="absolute w-[461px] top-[445px] left-40 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#000000bf] text-2xl tracking-[0] leading-[37.0px]">
                  Money Is King Not Customer <br />
                  ☆*: .｡. O(≧▽≦)o .｡.:*☆
                </p>
              </div>
              <div className="absolute w-[196px] h-[70px] top-[568px] left-[162px]">
                <div className="relative w-[194px] h-[70px] bg-black shadow-[0px_1.85px_1.58px_#00000005,0px_4.31px_3.66px_#00000007,0px_7.74px_6.58px_#00000008,0px_12.85px_10.92px_#0000000a,0px_21.16px_17.99px_#0000000b,0px_36.99px_31.44px_#0000000d,0px_80px_68px_#00000012]">
                  <div className="absolute top-[18px] left-10 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[22.4px] tracking-[0] leading-[34.5px] whitespace-nowrap">
                    Shop Now
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[1524px] left-[605px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[42.8px] tracking-[0] leading-[59.0px] whitespace-nowrap">
              Best Selling
            </div>
            <img className="absolute w-[39px] h-[3px] top-[1555px] left-[534px]" alt="Line" src="/img/homepage/line-3.svg" />
            <img className="absolute w-[39px] h-[3px] top-[1555px] left-[855px]" alt="Line" src="/img/homepage/line-3.svg" />
            <div className="absolute w-[168px] h-[75px] top-[1646px] left-[427px] bg-black">
              <div className="top-[18px] left-[59px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[26.6px] leading-[36.7px] absolute text-white tracking-[0] whitespace-nowrap">
                Man
              </div>
            </div>
            <div className="absolute w-[180px] h-[75px] top-[1646px] left-[651px] border-[1.9px] border-solid border-[#000000bf]">
              <div className="absolute top-4 left-[34px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#000000bf] text-[26.6px] tracking-[0] leading-[36.7px] whitespace-nowrap">
                Woman
              </div>
            </div>
            <div className="absolute w-[177px] h-[75px] top-[1646px] left-[887px] border-[1.9px] border-solid border-[#000000bf]">
              <div className="absolute top-4 left-[43px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#000000bf] text-[26.6px] tracking-[0] leading-[36.7px] whitespace-nowrap">
                Unisex
              </div>
            </div>
            <div className="absolute w-[408px] h-[455px] top-[1814px] left-[67px]">
              <div className="relative w-[422px] h-[455px] left-[-9px]">
                <div className="absolute w-[402px] h-[455px] top-0 left-[9px] bg-white rounded-[15.3px] border-[1.53px] border-solid border-[#dedede]" />
                <img
                  className="w-[422px] h-[354px] top-[78px] absolute left-0 object-cover"
                  alt="Untitled design"
                  src="/img/homepage/shoe4.png"
                />
                <img className="absolute w-[77px] h-[59px] top-[35px] left-0.5" alt="Rectangle" src="./img/homepage/rectangle-15.svg" />
                <CgHeart className="w-[37px] top-[35px] left-[347px] absolute h-[39px]" alt="Favorite"  />
                <div className="absolute w-[33px] top-[42px] left-[18px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[13.8px] tracking-[0] leading-[19.0px] whitespace-nowrap">
                  New
                </div>
                <div className="absolute w-[179px] top-[330px] left-[51px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[18.4px] tracking-[0] leading-[25.4px] whitespace-nowrap">
                  Slick running shoes
                </div>
                <div className="w-[190px] top-[397px] left-[51px] absolute [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[17.6px] tracking-[0] leading-[normal]">
                  4.999.000 VND
                </div>
                <BsArrowUpRightCircleFill className="w-[46px] top-[373px] left-[338px] rounded-[22.95px/24.23px] absolute h-12" alt="Arrow" />
                <div className="flex w-[150px] h-5 items-center gap-[13px] absolute top-[367px] left-[51px]">
                  <div className="inline-flex items-start gap-[5.31px] relative flex-[0_0_auto]">
                  <Rating />
                  </div>
                  <p className="relative w-fit mt-[-0.47px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                    <span className="text-black">4.5/</span>
                    <span className="text-[#00000099]">5</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute w-[1321px] h-[455px] top-[2325px] left-[69px]">
              <div className="absolute w-[431px] h-[455px] top-0 left-0">
                <div className="absolute w-[431px] h-[455px] top-0 left-0">
                  <div className="relative w-[445px] h-[455px] -left-2.5">
                    <div className="absolute w-[425px] h-[455px] top-0 left-2.5 bg-white rounded-[16.15px] border-[1.62px] border-solid border-[#dedede]" />
                    <img
                      className="absolute w-[445px] h-[362px] top-[78px] left-0 object-cover"
                      alt="Untitled design"
                      src="/img/homepage/shoe5.png"
                    />
                    <img
                      className="absolute w-[81px] h-[60px] top-[35px] left-[3px]"
                      alt="Rectangle"
                      src="./img/homepage/rectangle-15.svg"
                    />
                    <CgHeart
                      className="w-[39px] top-[35px] left-[367px] absolute h-[39px]"
                      alt="Favorite"
                       
                    />
                    <div className="absolute top-[42px] left-[19px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[14.5px] tracking-[0] leading-[20.1px] whitespace-nowrap">
                      New
                    </div>
                    <div className="absolute top-[330px] left-[54px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[19.4px] tracking-[0] leading-[26.8px] whitespace-nowrap">
                      Slick running shoes
                    </div>
                    <div className="absolute top-96 left-[54px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[17.6px] tracking-[0] leading-[normal] whitespace-nowrap">
                      4.999.000 VND
                    </div>
                    <BsArrowUpRightCircleFill className="absolute w-12 h-12 top-[373px] left-[357px]" alt="Arrow" />
                  </div>
                </div>
                <div className="top-[363px] left-11 inline-flex items-center gap-[13px] absolute">
                  <div className="inline-flex items-start gap-[5.31px] relative flex-[0_0_auto]">
                  <Rating />
                  </div>
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                    <span className="text-black">4.5/</span>
                    <span className="text-[#00000099]">5</span>
                  </p>
                </div>
              </div>
              <div className="absolute w-[431px] h-[455px] top-0 left-[448px]">
                <div className="relative w-[445px] h-[455px] -left-2.5">
                  <div className="absolute w-[425px] h-[455px] top-0 left-2.5 bg-white rounded-[16.15px] border-[1.62px] border-solid border-[#dedede]" />
                  <img
                    className="absolute w-[445px] h-[362px] top-[78px] left-0 object-cover"
                    alt="Untitled design"
                    src="/img/homepage/shoe6.png"
                  />
                  <img
                    className="absolute w-[81px] h-[60px] top-[35px] left-[3px]"
                    alt="Rectangle"
                    src="./img/homepage/rectangle-15.svg"
                  />
                  <CgHeart className="w-[39px] top-[35px] left-[367px] absolute h-[39px]" alt="Favorite"   />
                  <div className="absolute top-[42px] left-[19px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[14.5px] tracking-[0] leading-[20.1px] whitespace-nowrap">
                    New
                  </div>
                  <p className="absolute top-[330px] left-[54px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[19.4px] tracking-[0] leading-[26.8px] whitespace-nowrap">
                    Formal canvas shoe for man
                  </p>
                  <div className="absolute top-96 left-[54px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[17.6px] tracking-[0] leading-[normal] whitespace-nowrap">
                    4.999.000 VND
                  </div>
                  <BsArrowUpRightCircleFill className="absolute w-12 h-12 top-[373px] left-[357px]  rounded-[24.23px]" alt="Arrow" />
                  <div className="top-[361px] left-[55px] inline-flex items-center gap-[13px] absolute">
                    <div className="inline-flex items-start gap-[5.31px] relative flex-[0_0_auto]">
                    <Rating />
                    </div>
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                      <span className="text-black">4.5/</span>
                      <span className="text-[#00000099]">5</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute w-[431px] h-[455px] top-0 left-[896px]">
                <div className="relative w-[445px] h-[455px] -left-2.5">
                  <div className="absolute w-[425px] h-[455px] top-0 left-2.5 bg-white rounded-[16.15px] border-[1.62px] border-solid border-[#dedede]" />
                  <img
                    className="absolute w-[445px] h-[362px] top-[78px] left-0 object-cover"
                    alt="Untitled design"
                    src="/img/homepage/shoe3.png"
                  />
                  <img
                    className="absolute w-[81px] h-[60px] top-[35px] left-[3px]"
                    alt="Rectangle"
                    src="./img/homepage/rectangle-15.svg"
                  />
                  <CgHeart className="w-[39px] top-[35px] left-[367px] absolute h-[39px]" alt="Favorite"   />
                  <div className="absolute top-[42px] left-[19px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[14.5px] tracking-[0] leading-[20.1px] whitespace-nowrap">
                    New
                  </div>
                  <p className="absolute top-[330px] left-[54px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[19.4px] tracking-[0] leading-[26.8px] whitespace-nowrap">
                    Formal Slick shoe for man
                  </p>
                  <div className="absolute top-96 left-[54px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[17.6px] tracking-[0] leading-[normal] whitespace-nowrap">
                    4.999.000 VND
                  </div>
                  <BsArrowUpRightCircleFill className="absolute w-12 h-12 top-[373px] left-[357px] rounded-[24.23px]" alt="Arrow" />
                  <div className="top-[363px] left-[55px] inline-flex items-center gap-[13px] absolute">
                    <div className="inline-flex items-start gap-[5.31px] relative flex-[0_0_auto]">
                    <Rating />
                    </div>
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                      <span className="text-black">5/</span>
                      <span className="text-[#00000099]">5</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[433px] h-[455px] top-[1816px] left-[965px]">
              <div className="relative w-[445px] h-[455px] -left-2.5">
                <div className="absolute w-[425px] h-[455px] top-0 left-2.5 bg-white rounded-[16.15px] border-[1.62px] border-solid border-[#dedede]" />
                <img
                  className="absolute w-[445px] h-[362px] top-[78px] left-0 object-cover"
                  alt="Untitled design"
                  src="/img/homepage/shoe4.png"
                />
                <img
                  className="absolute w-[81px] h-[60px] top-[35px] left-[3px]"
                  alt="Rectangle"
                  src="./img/homepage/rectangle-15.svg"
                />
                <CgHeart className="w-[39px] top-[35px] left-[367px] absolute h-[39px]" alt="Favorite"   />
                <div className="absolute top-[42px] left-[19px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[14.5px] tracking-[0] leading-[20.1px] whitespace-nowrap">
                  New
                </div>
                <div className="absolute top-[330px] left-[54px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[19.4px] tracking-[0] leading-[26.8px] whitespace-nowrap">
                  Slick Sneakers shoe
                </div>
                <div className="absolute top-96 left-[54px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[17.6px] tracking-[0] leading-[normal] whitespace-nowrap">
                  4.999.000 VND
                </div>

                <BsArrowUpRightCircleFill className="absolute w-12 h-12 top-[373px] left-[357px] rounded-[24.23px]" alt="Arrow" />
                <div className="inline-flex items-start gap-[5.31px] absolute top-[363px] left-[55px]">
                <Rating />
                </div>
                <p className="absolute top-[363px] left-[181px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                  <span className="text-black">5/</span>
                  <span className="text-[#00000099]">5</span>
                </p>
              </div>
            </div>
            <div className="absolute w-[186px] h-[74px] top-[1290px] left-8 bg-black shadow-[0px_2.04px_1.73px_#00000005,0px_4.74px_4.03px_#00000007,0px_8.51px_7.24px_#00000008,0px_14.13px_12.01px_#0000000a,0px_23.28px_19.79px_#0000000b,0px_40.69px_34.58px_#0000000d,0px_88px_74.8px_#00000012]">
              <div className="absolute w-[97px] top-4 left-[45px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[24.6px] tracking-[0] leading-[37.9px] whitespace-nowrap">
                Explore
              </div>
            </div>
            <p className="absolute w-[279px] top-[1209px] left-8 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#000000bf] text-[15.8px] tracking-[0] leading-[normal]">
              Catch Up With Trends Quickly To Become A Trend
            </p>
            <div className="absolute w-[287px] top-[1088px] left-8 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[39.6px] tracking-[0] leading-[54.7px]">
              Most Popular <br />
              products
            </div>
            <div className="absolute w-[222px] top-[1049px] left-[90px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[21.1px] tracking-[0] leading-[normal]">
              Our Trending Shoes
            </div>
            <img className="absolute w-[45px] h-[3px] top-[1066px] left-[35px]" alt="Line" src="/img/homepage/line-3.svg" />
            <div className="absolute w-[1033px] h-[421px] top-[998px] left-[395px]">
              <div className="absolute w-72 h-[332px] top-[41px] left-[45px] bg-[#d9d9d926] rounded-[11.44px] border-[0.88px] border-solid border-[#dedede]" />
              <div className="absolute w-72 h-[332px] top-[41px] left-[380px] bg-[#d9d9d926] rounded-[11.44px] border-[0.88px] border-solid border-[#dedede]" />
              <div className="absolute w-72 h-[332px] top-[41px] left-[713px] bg-[#d9d9d926] rounded-[11.44px] border-[0.88px] border-solid border-[#dedede]" />
              <img
                className="w-[372px] h-[397px] top-3 left-[338px] absolute object-cover"
                alt="Untitled design"
                src="/img/homepage/untitled-design-111.png"
              />
              <img
                className="w-[369px] h-[421px] top-0 left-[664px] absolute object-cover"
                alt="Untitled design"
                src="/img/homepage/untitled-design-110.png"
              />
              <img
                className="w-[379px] h-[401px] top-2.5 left-0 absolute object-cover"
                alt="Untitled design"
                src="/img/homepage/untitled-design-114.png"
              />
              <div className="absolute w-[209px] top-[257px] left-[81px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[18.5px] tracking-[0] leading-[normal]">
                Running canvas shoes
              </div>
              <div className="absolute w-[204px] top-[257px] left-[415px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[18.5px] tracking-[0] leading-[normal]">
                Running casual shoes
              </div>
              <div className="absolute w-[166px] top-[257px] left-[748px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[18.5px] tracking-[0] leading-[normal]">
                casual nike shoes
              </div>
              <div className="w-[142px] top-[305px] left-20 absolute [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[17.6px] tracking-[0] leading-[normal]">
                4.999.000 VND
              </div>
              <div className="absolute w-[142px] top-[305px] left-[748px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[17.6px] tracking-[0] leading-[normal]">
                7.399.000 VND
              </div>
              <div className="absolute w-[142px] top-[305px] left-[406px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[17.6px] tracking-[0] leading-[normal]">
                1.199.000 VND
              </div>
              <BsArrowUpRightCircleFill
                className="left-[267px] absolute w-8 h-8 top-[301px]"
                alt="Arrow Up Right"
              />
              <BsArrowUpRightCircleFill
                className="left-[601px] absolute w-8 h-8 top-[301px]"
                alt="Arrow Up Right"
              />
              <BsArrowUpRightCircleFill
                className="left-[935px] absolute w-8 h-8 top-[301px]"
                alt="Arrow Up Right"
              />
            </div>
            <IoIosArrowBack
              className="top-[1191px] left-[390px] absolute w-[30px] h-[30px]"
              alt="Arrow back"
            />
            <IoIosArrowForward
              className="top-[1191px] left-[1410px] absolute w-[30px] h-[30px]"
              alt="Arrow forward"
            />
            <div className="absolute w-3 h-[11px] top-[1427px] left-[886px] bg-[#000000bf] rounded-[6.05px/5.5px]" />
            <div className="absolute w-[11px] h-[11px] top-[1427px] left-[944px] bg-[#000000bf] rounded-[5.5px]" />
            <div className="absolute w-[11px] h-[11px] top-[1427px] left-[965px] bg-[#00000080] rounded-[5.5px]" />
            <div className="absolute w-[29px] h-[11px] top-[1427px] left-[906px] bg-black rounded-[32.56px]" />
            <div className="absolute top-[2867px] left-[550px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[38.7px] tracking-[0] leading-[53.4px] whitespace-nowrap">
              Client Testimonial
            </div>
            <img className="absolute w-[35px] h-[3px] top-[2895px] left-[450px]" alt="Line" src="/img/homepage/line-3.svg" />
            <img className="absolute w-[35px] h-[3px] top-[2895px] left-[940px]" alt="Line" src="/img/homepage/line-3.svg" />
            <div className="absolute w-[688px] h-[378px] top-[3017px] left-0">
              <div className="absolute w-[682px] h-[378px] top-0 left-0">
                <div className="absolute w-[642px] h-[291px] top-0 left-10 bg-[#efefef] rounded-[17.2px] border-[1.72px] border-solid border-[#d6d6d6]" />
                <div className="absolute top-[67px] left-[243px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24.1px] tracking-[0] leading-[33.3px] whitespace-nowrap">
                  Meythli Odex
                </div>
                <img
                  className="absolute w-[251px] h-[310px] top-[68px] left-[21px] object-cover"
                  alt="Unsplash ikxcu"
                  src="/img/homepage/unsplash-rzc98-ikxcu.png"
                />
                <Rating />
                <p className="absolute w-[403px] top-[157px] left-[243px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[15.5px] tracking-[0] leading-[21.4px]">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et
                  Dolore Magna Aliqua.
                </p>
                <IoIosArrowBack className="w-6 top-[131px] left-0 absolute h-[30px]" alt="Arrow back ios" />
              </div>
              <div className="absolute w-[9px] h-[9px] top-[339px] left-[679px] bg-[#000000a6] rounded-[4.3px/4.73px]" />
            </div>
            <div className="absolute w-[663px] h-[378px] top-[3017px] left-[720px]">
              <div className="absolute w-[642px] h-[291px] top-0 left-[22px] bg-[#efefef] rounded-[17.2px] border-[1.72px] border-solid border-[#d6d6d6]" />
              <div className="absolute top-[67px] left-56 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24.1px] tracking-[0] leading-[33.3px] whitespace-nowrap">
                Meythli Odex
              </div>
              <img
                className="absolute w-[251px] h-[310px] top-[68px] left-0.5 object-cover"
                alt="Unsplash ikxcu"
                src="/img/homepage/unsplash-rzc98-ikxcu-2.png"
              />
              <Rating />
              <p className="absolute w-[403px] top-[157px] left-56 [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[15.5px] tracking-[0] leading-[21.4px]">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et
                Dolore Magna Aliqua.
              </p>
              <div className="absolute w-[9px] h-[9px] top-[339px] left-0 bg-[#000000a6] rounded-[4.3px/4.73px]" />
              <div className="absolute w-[9px] h-[9px] top-[339px] left-[18px] bg-[#00000066] rounded-[4.3px/4.73px]" />
            </div>
            <IoIosArrowForward
              className="w-[30px] top-[3148px] left-[1400px] absolute h-[30px]"
              alt="Arrow back ios"
              
            />
            <div className="absolute w-[13px] h-[13px] top-[3354px] left-[697px] bg-[#000000bf] rounded-[6.45px]" />
          </div>
        </div>



        {/* Thêm nội dung khác như danh sách sản phẩm, banner, v.v. */}
      </main>

      <Footer /> {/* Sử dụng component Footer */}
    </div>
  );
};

export default Home;
