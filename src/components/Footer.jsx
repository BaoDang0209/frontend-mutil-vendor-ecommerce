import React from 'react';

const Footer = () => {
    return (
        <div className="w-full bg-[#efefef] mt-10"> {/* Đảm bảo footer nằm dưới cùng */}
            <div className="container mx-auto py-10">
                <div className="flex flex-wrap justify-between px-4">
                    {/* Phần thông tin chung */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <div className="font-bold text-black text-xl">SHU</div>
                            <p className="text-gray-600 text-sm">
                                We have shoes that suit your style and which you’re proud to wear. From women to men.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-7 h-7 bg-white rounded-full border border-gray-300 flex items-center justify-center">
                                <img className="w-3 h-3" alt="Twitter Logo" src="img/footer/twitter.png" />
                            </div>
                            <div className="w-7 h-7 bg-white rounded-full border border-gray-300 flex items-center justify-center">
                                <img className="w-4 h-4" alt="Facebook Logo" src="img/footer/fb.png" />
                            </div>
                            <div className="w-7 h-7 bg-white rounded-full border border-gray-300 flex items-center justify-center">
                                <img className="w-3.5 h-3.5" alt="Instagram Logo" src="img/footer/insta.png" />
                            </div>
                            <div className="w-7 h-7 bg-white rounded-full border border-gray-300 flex items-center justify-center">
                                <img className="w-3.5 h-3.5" alt="Github Logo" src="img/footer/github.png" />
                            </div>
                        </div>
                    </div>
                    {/* Phần thông tin liên kết */}
                    <div className="flex flex-col gap-6">
                        <div className="font-bold italic text-black text-base">COMPANY</div>
                        <div className="text-gray-600 text-base">
                            About<br />
                            Features<br />
                            Works<br />
                            Career
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="font-bold italic text-black text-base">HELP</div>
                        <p className="text-gray-600 text-base">
                            Customer Support<br />
                            Delivery Details<br />
                            Terms & Conditions<br />
                            Privacy Policy
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="font-bold italic text-black text-base">FAQ</div>
                        <div className="text-gray-600 text-base">
                            Account<br />
                            Manage Deliveries<br />
                            Orders<br />
                            Payments
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-10">
                    <p className="text-gray-600 text-sm">
                        Code by Đăng Đẹp Trai Nhất Hệ Mặt Trời
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
