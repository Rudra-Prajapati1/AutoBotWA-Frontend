"use client";

import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Mail,
  ArrowUp,
} from "lucide-react";
import { SocialIcon, FooterLink } from "../components/Functions";

export default function Footer() {
  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="100"
      className="border-t border-gray-200 dark:border-gray-800 "
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">
                AutoBot<span className="text-emerald-600">WA</span>
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
              Automate WhatsApp communication at scale. Bulk messaging, smart
              replies, scheduling, and analytics — built for modern businesses.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="250">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-5">
              Product
            </h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "Testimonials", "Changelog"].map(
                (item) => (
                  <FooterLink key={item} text={item} />
                )
              )}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="350">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <FooterLink key={item} text={item} />
              ))}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="450">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-5">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <SocialIcon Icon={Twitter} href="#" />
              <SocialIcon Icon={Instagram} href="#" />
              <SocialIcon Icon={Facebook} href="#" />
              <SocialIcon Icon={Github} href="#" />
              <SocialIcon Icon={Mail} href="mailto:hello@autobotwa.com" />
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="550"
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400"
        >
          <p>© {new Date().getFullYear()} AutoBot WA. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
