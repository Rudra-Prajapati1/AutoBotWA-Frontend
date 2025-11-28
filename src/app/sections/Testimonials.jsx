"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Manager at TechFlow",
    text: "AutoBot WA has cut our customer response time in half. The bulk messaging feature alone saves us hours every week.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Founder of GrowthCo",
    text: "The auto-reply system is incredible. We can now handle customer queries 24/7 without manual intervention. Game changer.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Business Operations at ScaleUp",
    text: "Scheduled campaigns are exactly what we needed. We can now plan our WhatsApp strategy weeks in advance.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CEO of StartupX",
    text: "The analytics dashboard gives us real insights into customer engagement. AutoBot WA is essential to our growth.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Director at RetailBox",
    text: "Customer support team loves it. Integration was seamless, and the ROI was immediate.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Operations Lead at eCommerce Plus",
    text: "Best investment we made this year. Our WhatsApp outreach has never been more efficient.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm tracking-wider uppercase"
          >
            Trusted by thousands
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Loved by businesses worldwide
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Join teams that have transformed their WhatsApp communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={100 + index * 150}
              className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-emerald-500/30 dark:hover:border-emerald-400/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-emerald-500 text-emerald-500"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                “{t.text}”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full ring-4 ring-gray-100 dark:ring-gray-800"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
