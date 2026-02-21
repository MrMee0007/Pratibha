import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent! We'll get back to you within 24 hours.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@pratibhacinemakers.com",
      href: "mailto:hello@pratibhacinemakers.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "GLA University, Mathura, India",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[140px]" />
      </div>

      <main className="relative pt-28 pb-24">
        <div className="container mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-20 animate-[fadeUp_0.8s_ease-out]">
            <p className="uppercase tracking-[0.35em] text-sm text-muted-foreground mb-4">
              Get In Touch
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Let’s Create Something
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to bring your vision to life? Tell us about your project and
              we’ll handle the magic.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* FORM */}
            <div className="relative glass-card p-8 md:p-12 bg-gray-800/30 border border-white/10 backdrop-blur-xl hover:border-blue-400/40 transition-all duration-500">
              <h2 className="font-display text-2xl font-semibold mb-10">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                  {["name", "email"].map((field, i) => (
                    <div key={i}>
                      <label className="block text-sm mb-2 text-muted-foreground">
                        {field === "name" ? "Your Name *" : "Email Address *"}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        placeholder={field === "name" ? "John Doe" : "john@example.com"}
                        className="w-full bg-secondary/70 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-blue-400 hover:border-blue-400/60 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-muted-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-secondary/70 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-blue-400 hover:border-blue-400/60 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-muted-foreground">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary/70 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-blue-400 hover:border-blue-400/60 transition-all"
                    >
                      <option value="">Select a service</option>
                      <option>Film Production</option>
                      <option>Commercial Ads</option>
                      <option>Music Video</option>
                      <option>Wedding Film</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                    className="w-full bg-secondary/70 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-blue-400 hover:border-blue-400/60 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-black font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  Send Message
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />
                </button>
              </form>
            </div>

            {/* INFO */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-2xl font-semibold mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.href}
                      className="group flex items-center gap-5 p-6 bg-gray-800/30 border border-white/10 backdrop-blur-xl hover:border-blue-400/50 hover:translate-x-1 transition-all duration-300"
                    >
                      <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-blue-400 transition">
                        <info.icon className="w-5 h-5 text-muted-foreground group-hover:text-blue-400 transition" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{info.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* HOURS */}
              <div className="glass-card p-8 bg-gray-800/30 border border-white/10 hover:border-purple-400/50 transition-all">
                <h3 className="font-display text-xl font-semibold mb-6">
                  Working Hours
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    ["Monday – Friday", "10:00 AM – 7:00 PM"],
                    ["Saturday", "10:00 AM – 4:00 PM"],
                    ["Sunday", "Closed"],
                  ].map(([day, time]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-muted-foreground">{day}</span>
                      <span>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
