    import React from 'react';

    const Header = () => {
        return (
            <div className="bg-white flex flex-row justify-center w-full">
            <div className="bg-white w-[1440px] h-[100px]">
            <div className="flex w-[1226px] items-center justify-center gap-10 relative top-[26px] left-[84px]">
                <div className="relative w-fit [font-family:'Calistoga',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
                SHU
                </div>
                <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                    Shop
                    </div>
                    <img className="relative w-4 h-4" alt="Frame" src="/img/header/frame.svg" />
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                    On Sale
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                    New Arrivals
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                    Brands
                </div>
                </div>
                <div className="flex items-start gap-3 px-4 py-3 relative flex-1 grow bg-[#efefef] rounded-[62px] overflow-hidden">
                <img className="relative w-6 h-6" alt="Frame" src="/img/header/frame-1.svg" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#00000066] text-base tracking-[0] leading-[normal]">
                    Search for products...
                </div>
                </div>
                <div className="inline-flex items-start gap-3.5 relative flex-[0_0_auto]">
                <img className="relative w-[26.4px] h-[26.4px]" alt="Frame" src="/img/header/frame-2.svg" />
                <img className="relative w-6 h-6" alt="Frame" src="/img/header/frame-3.svg" />
                <img className="relative w-6 h-6" alt="Frame" src="/img/header/frame-4.svg" />
                </div>
            </div>
            </div>
        </div>
        );
        
    };

    export default Header;
