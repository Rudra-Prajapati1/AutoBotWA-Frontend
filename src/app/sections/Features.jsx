import FeatureCard from "../components/FeatureCard";
import {
  MessageCircle,
  Bot,
  Clock,
  Send,
  Sparkles,
  BarChart3,
} from "lucide-react";

export default function Features() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Powerful Features That Save You Time
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Everything you need to automate WhatsApp communication at scale —
            reliably and securely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <FeatureCard
              icon={MessageCircle}
              title="Bulk Messaging"
              desc="Send thousands of personalized messages instantly with dynamic templates."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <FeatureCard
              icon={Bot}
              title="Smart Auto-Replies"
              desc="AI-powered responses that engage customers 24/7 — no delays, no missed chats."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <FeatureCard
              icon={Clock}
              title="Scheduled Campaigns"
              desc="Plan messages ahead and let AutoBotWA deliver them at the perfect time."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <FeatureCard
              icon={Send}
              title="Multi-Device Support"
              desc="Run campaigns from multiple WhatsApp accounts without getting blocked."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            <FeatureCard
              icon={Sparkles}
              title="Message Personalization"
              desc="Use names, order IDs, and custom fields to make every message feel human."
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
            <FeatureCard
              icon={BarChart3}
              title="Detailed Analytics"
              desc="Track delivery, opens, replies, and performance — all in one dashboard."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
