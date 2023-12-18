import logo from "@/public/image/header/logo.png";

import {
  FaApple,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoArrowForward } from "react-icons/io5";

import "./footer.scss";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <div className="footer bg-black text-white">
      <div className="container_all">
        <div className="content">
          <div className="content_top flex justify-between pt-[35px] pb-10 xl:flex-row md:flex-col xl:gap-0 md:gap-[60px]">
            <div className="left max-w-[160px]">
              <div className="logo flex gap-[12px] ">
                <div className="image">
                  <img
                    src={logo.src}
                    alt="logo"
                    className="text-3xl max-w-none relative top-[50%] translate-y-[-50%] "
                  />
                </div>
                <div className="separate relative w-[1px] bg-white"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="icon">
                    <FaApple className="text-[40px]" />
                  </div>
                  <p className="text-xl tracking-wider">Premium Reseller</p>
                </div>
              </div>
              <div className="icon_contact flex justify-between pt-6">
                <div className="item_icon">
                  <FaFacebookF className="icon" />
                </div>
                <div className="item_icon">
                  <FaYoutube className="icon" />
                </div>
                <div className="item_icon">
                  <FaInstagram className="icon" />
                </div>
                <div className="item_icon">
                  <FaTwitter className="icon" />
                </div>
              </div>
            </div>
            <div className="middle flex xl:gap-[120px] md:gap-[60px] xl:flex-row md:flex-col">
              <div className="middle_item">
                <h5>Support</h5>
                <ul className="mt-2">
                  <li className="text-[#8f8f8f] mb-1 text-sm">Contact us</li>
                  <li className="text-[#8f8f8f] mb-1 text-sm">FAQ</li>
                  <li className="text-[#8f8f8f] mb-1 text-sm">Warranty service</li>
                  <li className="text-[#8f8f8f] mb-1 text-sm">Return policy</li>
                </ul>
              </div>
              <div className="middle_item">
                <h5>Information</h5>
                <ul className="mt-2">
                  <li className="text-[#8f8f8f] mb-1 text-sm">About us</li>
                  <li className="text-[#8f8f8f] mb-1 text-sm">News</li>
                  <li className="text-[#8f8f8f] mb-1 text-sm">Payment methods</li>
                  <li className="text-[#8f8f8f] mb-1 text-sm">Evaluate quality</li>
                </ul>
              </div>
            </div>
            <div className="right flex flex-col gap-[30px] max-w-[380px] w-[380px]">
              <div className="title flex items-center gap-[20px]">
                <HiOutlineMail className="text-2xl" />
                <p className="text-xl">Stay up date on the latest from K15</p>
              </div>
              <div className="input_email relative">
                <input
                  type="email"
                  className="text-black w-full py-4 pl-[25px] rounded-[50px] tracking-wider focus-visible:outline-none"
                  placeholder="Enter your e-mail address "
                />
                <Button className="icon_arrow absolute right-[2%] top-[50%] translate-y-[-50%] bg-[#000] rounded-[50%] p-2">
                  <IoArrowForward className="text-[20px]" />
                </Button>
              </div>
            </div>
          </div>
          <div className="separate h-[1px] bg-white" />
          <div className="content_bottom pt-5 pb-6 max-w-[600px]">
            <p className="text-[#646464] text-[10px] font-semibold tracking-wider">
              © 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH
              & ĐT TP. Hà Nội cấp ngày 08/06/2016.Địa chỉ: Số 76 Thái Hà, phường
              Trung Liệt, quận Đống Đa, thành phố Hà Nội, Việt NamĐại diện pháp
              luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email:
              lienhe@shopdunk.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
