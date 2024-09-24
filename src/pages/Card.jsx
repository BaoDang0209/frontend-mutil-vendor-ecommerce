import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Card = () => {
    return (
        <div>
            <Header />

            <div className="bg-white flex flex-row justify-center w-full">
                <div className="bg-white overflow-hidden w-[1440px] h-[1453px] relative">
                    <div className="inline-flex items-center gap-3 absolute top-[158px] left-[100px]">
                        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                            <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                                Home
                            </div>
                            <img className="relative w-4 h-4" alt="Frame" src="/img/cart/arrow-right.svg" />
                        </div>
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                            Cart
                        </div>
                    </div>
                    <img
                        className="absolute w-[1240px] top-[133px] left-[100px] h-px object-cover"
                        alt="Line"
                        src="/img/cart/line-8.svg"
                    />


                    <div className="absolute h-[47px] top-[204px] left-[100px] [font-family:'Roboto',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Your cart
                    </div>
                    <div className="flex flex-col w-[715px] items-start gap-6 px-6 py-5 absolute top-[276px] left-[100px] rounded-[20px] overflow-hidden border border-solid border-[#0000001a]">
                        <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-[124px] h-[124px] rounded-[8.66px] overflow-hidden">
                                <img className="w-[124px] left-0 absolute h-[124px] top-0" alt="Image" src="/img/cart/image-8.png" />
                            </div>

                            <div className="flex items-center justify-between relative flex-1 grow">
                                <div className="inline-flex flex-col h-[118px] items-start justify-between relative flex-[0_0_auto]">
                                    <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
                                        <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
                                            Sneaker
                                        </div>
                                        <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                                            <p className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                                                <span className="text-black">Size: </span>
                                                <span className="text-[#00000099]">32</span>
                                            </p>
                                            <p className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                                                <span className="text-black">Color: </span>
                                                <span className="text-[#00000099]">White- Red</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
                                        2.900.000 VND
                                    </div>
                                </div>
                                <div className="flex flex-col w-[225px] h-[124px] items-end justify-between relative">
                                    <img className="relative w-6 h-6" alt="Frame" src="/img/cart/bin.svg" />
                                    <div className="inline-flex items-center justify-center gap-5 px-5 py-3 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                                        <img className="relative w-5 h-5" alt="Frame" src="/img/cart/ngang.svg" />
                                        <div className="relative w-fit mt-[-0.50px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-sm tracking-[0] leading-[normal]">
                                            1
                                        </div>
                                        <img className="relative w-5 h-5" alt="Frame" src="/img/cart/cong.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/img/cart/line-5.svg" />
                        <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-[124px] h-[124px] bg-[#f0eeed] rounded-[8.66px] overflow-hidden">
                                <img
                                    className="absolute w-[124px] h-[124px] top-0 left-0 object-cover"
                                    alt="Image"
                                    src="/img/cart/image-8.png"
                                />
                            </div>
                            <div className="flex items-center justify-between relative flex-1 grow">
                                <div className="inline-flex flex-col h-[118px] items-start justify-between relative flex-[0_0_auto]">
                                    <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
                                        <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
                                            Sneaker
                                        </div>
                                        <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                                            <p className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                                                <span className="text-black">Size: </span>
                                                <span className="text-[#00000099]">39</span>
                                            </p>
                                            <p className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                                                <span className="text-black">Color: </span>
                                                <span className="text-[#00000099]">Red</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
                                        2.999.000 VND
                                    </div>
                                </div>
                                <div className="flex flex-col w-[225px] h-[124px] items-end justify-between relative">
                                    <img className="relative w-6 h-6" alt="Frame" src="/img/cart/bin.svg" />
                                    <div className="inline-flex items-center justify-center gap-5 px-5 py-3 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                                        <img className="relative w-5 h-5" alt="Frame" src="/img/cart/ngang.svg" />
                                        <div className="relative w-fit mt-[-0.50px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-sm tracking-[0] leading-[normal]">
                                            1
                                        </div>
                                        <img className="relative w-5 h-5" alt="Frame" src="/img/cart/cong.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/img/cart/line-6.svg" />
                        <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-[124px] h-[124px] bg-[#f0eeed] rounded-[8.66px] overflow-hidden">
                                <img className="w-[113px] left-[11px] absolute h-[124px] top-0" alt="Image" src="/img/cart/image-8.png" />
                            </div>
                            <div className="flex items-center justify-between relative flex-1 grow">
                                <div className="inline-flex flex-col h-[118px] items-start justify-between relative flex-[0_0_auto]">
                                    <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
                                        <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
                                            Shoes
                                        </div>
                                        <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                                            <p className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                                                <span className="text-black">Size: </span>
                                                <span className="text-[#00000099]">44</span>
                                            </p>
                                            <p className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[normal]">
                                                <span className="text-black">Color: </span>
                                                <span className="text-[#00000099]">Green</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
                                        2.999.000 VND
                                    </div>
                                </div>
                                <div className="flex flex-col w-[225px] h-[124px] items-end justify-between relative">
                                    <img className="relative w-6 h-6" alt="Frame" src="/img/cart/frame-11.svg" />
                                    <div className="inline-flex items-center justify-center gap-5 px-5 py-3 relative flex-[0_0_auto] bg-[#efefef] rounded-[62px] overflow-hidden">
                                        <img className="relative w-5 h-5" alt="Frame" src="/img/cart/frame-12.svg" />
                                        <div className="relative w-fit mt-[-0.50px] [font-family:'Open_Sans',Helvetica] font-bold italic text-black text-sm tracking-[0] leading-[normal]">
                                            1
                                        </div>
                                        <img className="relative w-5 h-5" alt="Frame" src="/img/cart/frame-13.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[505px] h-[458px] items-start gap-6 px-6 py-5 absolute top-[276px] left-[835px] rounded-[20px] overflow-hidden border border-solid border-[#0000001a]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
                            Order Summary
                        </div>
                        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-xl tracking-[0] leading-[normal]">
                                    Subtotal
                                </div>
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-xl text-right tracking-[0] leading-[normal]">
                                    8.898.000 VND
                                </div>
                            </div>
                            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-xl tracking-[0] leading-[normal]">
                                    Discount (-100%)
                                </div>
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-[#ff3333] text-xl text-right tracking-[0] leading-[normal]">
                                    -8.898.000 VND
                                </div>
                            </div>
                            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000099] text-xl tracking-[0] leading-[normal]">
                                    Delivery Fee
                                </div>
                                <div className="text-xl relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-right tracking-[0] leading-[normal]">
                                    0 VND
                                </div>
                            </div>
                            <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="/img/cart/line-6-1.svg" />
                            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
                                    Total
                                </div>
                                <div className="text-2xl relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-bold text-black text-right tracking-[0] leading-[normal]">
                                    0 VND
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex items-start gap-3 px-4 py-3 relative flex-1 grow bg-[#efefef] rounded-[62px] overflow-hidden">
                                <img className="relative w-6 h-6" alt="Frame" src="/img/cart/tag.svg" />
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000066] text-base tracking-[0] leading-[normal]">
                                    Add promo code
                                </div>
                            </div>
                            <div className="flex w-[119px] items-center justify-center gap-3 px-4 py-3 relative self-stretch bg-black rounded-[62px] overflow-hidden">
                                <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold italic text-white text-base tracking-[0] leading-[normal]">
                                    Apply
                                </div>
                            </div>
                        </div>
                        <div className="flex h-[60px] items-center justify-center gap-3 px-[54px] py-4 relative self-stretch w-full bg-black rounded-[62px] overflow-hidden">
                            <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-bold italic text-white text-base tracking-[0] leading-[normal]">
                                Go to Checkout
                            </div>
                            <img className="relative w-6 h-6" alt="Arrow down bold" src="/img/cart/arrow-down-bold-1.svg" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    );
};

export default Card;