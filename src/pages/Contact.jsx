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
      [e.target.name]: e.target.value 
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     toast({
//       title: "Message Sent!",
//       description: "We'll get back to you within 24 hours.",
//     });

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       subject: "",
//       message: "",
//     });
//   };
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
      value: "GLA University Mathura, India",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4">
              Get In Touch
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your next project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div className="glass-card p-8 md:p-12 bg-gray-800/30">
              <h2 className="font-display text-2xl font-semibold mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors hover:border-blue-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors hover:border-blue-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-secondary border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors hover:border-blue-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors hover:border-blue-400"
                    >
                      <option value="">Select a service</option>
                      <option value="film">Film Production</option>
                      <option value="commercial">Commercial Ads</option>
                      <option value="music">Music Video</option>
                      <option value="wedding">Wedding Film</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none hover:border-blue-400"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-blue-400 border-blue text-background font-medium flex items-center justify-center gap-2 border hover:border-red-400 hover:bg-red-400 hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.href}
                      className="flex items-start gap-4 p-6 bg-gray-800/30 glass-card border hover:border-blue-400 transition-all duration-300"
                    >
                      <div className="w-12 h-12 flex items-center justify-center border border-border ">
                        <info.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="glass-card p-8 bg-gray-800/30 border hover:border-blue-400 transition-all duration-300    ">
                <h3 className="font-display text-xl font-semibold mb-6">
                  Working Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
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
