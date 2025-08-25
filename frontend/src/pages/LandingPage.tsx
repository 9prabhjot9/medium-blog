import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Edit3, Users, Zap, Star, Heart, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"

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
              <span className="text-xl font-black text-black">Minimal Blog</span>
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
      <section className="py-20 px-6 relative z-10">
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
              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-full font-bold shadow-lg border-b-black "
              >
                Start Reading
              </Button>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-8 border border-yellow-300 shadow-xl">
                <img
                  src="/blogger.png"
                  alt="Blogger at work"
                  className="w-full h-80 object-cover rounded-2xl"
                />

                {/* Floating UI Elements */}
                <div
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg border border-gray-100 animate-bounce"
                  style={{ animationDelay: "1s", animationDuration: "3s" }}
                >
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium text-black">1.2k</span>
                  </div>
                </div>

                

                <div
                  className="absolute top-1/2 -right-6 bg-yellow-400 text-black rounded-full p-3 shadow-lg animate-bounce"
                  style={{ animationDelay: "0.5s", animationDuration: "2s" }}
                >
                  <Edit3 className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Featured Articles Preview */}
      <section className="py-16 px-6 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600">Fresh perspectives and insights from my writing journey.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "The Art of Minimalist Writing", category: "Writing Tips", color: "bg-blue-100 text-blue-800" },
              { title: "Building Communities That Last", category: "Community", color: "bg-green-100 text-green-800" },
              { title: "Growth Mindset for Creators", category: "Growth", color: "bg-purple-100 text-purple-800" },
            ].map((article, i) => (
              <Card
                key={i}
                className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer overflow-hidden bg-white rounded-3xl"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                  <img
                    src={`/minimalist-blog-article-.png?height=200&width=400&query=minimalist blog article ${article.title}`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${article.color}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">5 min read • 2 days ago</div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Discover how less can be more when it comes to crafting compelling stories that resonate with
                    readers.
                  </p>
                  <div className="mt-4 flex items-center  opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <span className="text-sm font-medium">Read more</span>
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 rounded-full px-8 py-3 font-bold">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white relative overflow-hidden z-10">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-400 rounded-full animate-spin"
            style={{ animationDuration: "10s" }}
          ></div>
          <div className="absolute top-40 right-20 w-32 h-32 border border-white/20 rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-yellow-400 rounded-full opacity-30"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join me on this creative journey. Let's build something amazing together and grow our community of
            passionate creators.
          </p>
          <Button
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-full font-bold shadow-xl"
          >
            Let's Connect
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-black" />
              </div>
              <span className="font-bold text-black">Minimal Blog</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-black transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-600">
            © 2025 Minimal Blog. Crafted with care for writers and readers.
          </div>
        </div>
      </footer>
    </div>
  )
}
