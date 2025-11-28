import { ArrowRight, Clock, MessageCircle, Zap } from "lucide-react";
import { Feature, MessageLeft, MessageRight } from "../components/Functions";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 pt-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight"
            >
              Automate Your{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                WhatsApp
              </span>{" "}
              Messaging
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
            >
              Send bulk messages, set up auto-replies, and schedule campaigns
              across unlimited contacts. Keep your WhatsApp communication
              flowing effortlessly.
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2"
            >
              <Feature icon={<MessageCircle />} text="Bulk Messaging" />
              <Feature icon={<Zap />} text="Auto-Replies" />
              <Feature icon={<Clock />} text="Scheduled Campaigns" />
              <Feature icon={<ArrowRight />} text="Advanced Analytics" />
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors duration-200 inline-flex items-center justify-center gap-2">
                Start Automating
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 hover:border-emerald-500 dark:hover:border-emerald-400 text-slate-900 dark:text-white font-semibold rounded-full transition-colors duration-200 hover:text-emerald-600 dark:hover:text-emerald-400">
                Live Demo
              </button>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72">
              <div className="bg-black rounded-3xl p-2 shadow-2xl">
                <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg">
                  <div className="bg-black h-6 mx-auto w-40 rounded-b-3xl flex items-center justify-center">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                      <span className="text-xs text-slate-400 font-semibold">
                        9:41
                      </span>
                    </div>
                  </div>

                  <div className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 h-96 p-4 flex flex-col justify-between">
                    <div className="bg-emerald-600 dark:bg-emerald-700 text-white rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold">AutoBot WA</p>
                          <p className="text-xs opacity-90">Online</p>
                        </div>
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-xs font-bold">
                          A
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 overflow-hidden">
                      <MessageLeft
                        text="Hello! How can I help?"
                        time="9:40 AM"
                      />
                      <MessageRight
                        text="I need bulk messaging setup"
                        time="9:41 AM"
                      />
                      <MessageLeft text="Ready to automate" time="9:42 AM" />
                    </div>

                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full p-2 flex items-center gap-2 mt-4">
                      <input
                        type="text"
                        placeholder="Message..."
                        className="flex-1 px-3 py-1 text-xs bg-transparent text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none"
                        readOnly
                      />
                      <button className="bg-emerald-600 dark:bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-black h-5 flex items-center justify-center">
                    <div className="w-32 h-1 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
