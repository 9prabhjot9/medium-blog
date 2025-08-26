import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Edit3, Users, Zap, Star, Heart, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"
import ReadingButton from "@/components/ReadingButton"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-80 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-black rounded-lg rotate-45 opacity-60 animate-pulse"></div>
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 border-4 border-yellow-400 rounded-full opacity-70 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-8 h-8 bg-gray-800 rounded-full opacity-50 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-14 h-14 bg-yellow-300 rounded-lg rotate-12 opacity-60 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-60 left-1/3 w-6 h-6 bg-black rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center rotate-3 hover:rotate-6 transition-transform duration-300">
                <BookOpen className="h-5 w-5 text-black" />
              </div>
              <span className="text-xl font-black text-black">BlogHub</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-black transition-colors relative group font-medium">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors relative group font-medium">
                Articles
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors relative group font-medium">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors relative group font-medium">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            </div>
            <Link to="/signup"> 
              <Button className="bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 rounded-full px-6 shadow-lg" >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 relative z-10 mt-9">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-yellow-100 text-black px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-200">
                <Star className="w-4 h-4 mr-2 text-yellow-600" />
                Welcome to the future of blogging
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight">
                I WRITE FOR
                <br />
                <span className="text-yellow-400">GROWTH.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                I'm a passionate blogger with a minimalist approach. Clean writing, meaningful stories, and ideas that
                inspire growth.
              </p>
              <div className="">
              <Link to="/blogs">                
              
              <ReadingButton> 
                Start Reading
              </ReadingButton>

              </Link>
              </div>
            </div>

            <div className="relative w-180">
              <div className="relative from-yellow-100 to-yellow-200 rounded-3xl p-9 border border-none shadow-xl" >
                <img
                  src="/blogger.png"
                  alt="Blogger at work"
                  className="w-full h-90  object-cover rounded-2xl wrapper"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     

      

      {/* Footer */}
      <footer className="py-5 px-6 border-gray-100 bg-white relative ">
        <div className="max-w-6xl mx-auto">
         
        
          <div className="mt-6 pt-8 border-t border-gray-100 text-center text-sm text-gray-600">
            © 2025 BlogHub. Crafted with care for writers and readers.
          </div>
        </div>
      </footer>
    </div>
  )
}
