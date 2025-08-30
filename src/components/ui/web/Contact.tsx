"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { useState } from "react"
import { toast } from "sonner"  // ✅ sonner import

type FormData = {
  firstName: string
  lastName?: string
  email: string
  subject: string
  message: string
  phone?: string
}

export default function ContactSection() {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setLoading(true)

    try {
      await emailjs.send(
        "service_98cnmjr", //  replace with EmailJS service ID
        "template_ic4xadr", //  replace with EmailJS template ID
        {
          firstName: data.firstName,
          lastName: data.lastName || "",
          email: data.email,
          subject: data.subject,
          message: data.message,
          phone: data.phone || "Not Provided",
        },
        "TS5pkjhyXe-r7YqK6" //  replace with your EmailJS public key
      )

      toast.success(" Message sent successfully!", {position:"top-right"}) //  Success Toast
      reset()
    } catch (err) {
      toast.error(" Failed to send message. Please try again later.") // ⚠️ Error Toast
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
            Ready to transform your content? Let&apos;s discuss how we can help you grow your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="First Name"
                    {...register("firstName", { required: "First name is required" })}
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 !h-[50px]"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>
                <div>
                  <Input
                    placeholder="Last Name (Optional)"
                    {...register("lastName")}
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 !h-[50px]"
                  />
                </div>
              </div>

              <Input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email" },
                })}
                className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 !h-[50px]"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              <Input
                placeholder="Phone (Optional)"
                {...register("phone")}
                className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 !h-[50px]"
              />

              <Input
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
                className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 !h-[50px]"
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}

              <Textarea
                placeholder="Tell us about your project..."
                rows={6}
                {...register("message", { required: "Message is required" })}
                className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 resize-none !h-[50px]"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

              <Button
                size="lg"
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/30 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">hello@zeeworks.com</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Miami, Florida</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
