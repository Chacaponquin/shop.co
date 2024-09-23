/* eslint-disable react/no-unescaped-entities */
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-4">SHOP.CO</h2>
          <p className="text-sm text-gray-600 mb-4">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-black">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Career
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">FAQ</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Manage Deliveries
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Payments
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">RESOURCES</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Free eBooks
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Development Tutorial
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                How to - Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Youtube Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex space-x-4">
            <img src="/placeholder.svg" alt="Visa" className="h-6" />
            <img src="/placeholder.svg" alt="Mastercard" className="h-6" />
            <img src="/placeholder.svg" alt="PayPal" className="h-6" />
            <img src="/placeholder.svg" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
