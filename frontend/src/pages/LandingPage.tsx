import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Edit3, Users, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-black">Minimal Blog</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "Articles", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="hover:-translate-y-0.5 transition-transform duration-200 bg-transparent"
            >
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse delay-500"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Stories Worth <br />
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
              Reading
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Discover thoughtful writing, meaningful conversations, and ideas that matter. Join a community of readers
            and writers who value quality over quantity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 hover:shadow-lg transition-all duration-300">
              Start Reading <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent hover:scale-105 hover:shadow-lg transition-all duration-300">
              Write Your Story
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Why Choose Minimal Blog?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in the power of simplicity. Clean design, focused content, and meaningful connections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Clean Writing", icon: <Edit3 />, desc: "Distraction-free editor with beautiful typography that makes your words shine." },
              { title: "Engaged Community", icon: <Users />, desc: "Connect with readers who appreciate thoughtful content and meaningful discussions." },
              { title: "Lightning Fast", icon: <Zap />, desc: "Optimized for speed and performance. Your readers will love the smooth experience." }
            ].map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4  transition-all duration-300">
                    {React.cloneElement(feature.icon, { className: "h-6 w-6 text-primary-foreground" })}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">Fresh perspectives and insights from our community of writers.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer overflow-hidden">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img
                    src={`/minimalist-blog-article-.png?height=200&width=400&query=minimalist blog article ${i}`}
                    alt={`Article ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2 group-hover:text-primary/70 transition-colors">5 min read • 2 days ago</div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    The Art of Minimalist Writing
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Discover how less can be more when it comes to crafting compelling stories that resonate with readers.
                  </p>
                  <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <span className="text-sm font-medium">Read more</span>
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:scale-105 hover:shadow-lg transition-all duration-300 bg-transparent">
              View All Articles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-primary-foreground/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-32 h-32 border border-primary-foreground/10 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-primary-foreground/15 rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Share Your Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of writers who have found their voice on Minimal Blog. Start writing today and connect with readers who care.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-pulse hover:animate-none">
            Get Started Free <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-bold">Minimal Blog</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Minimal Blog. Crafted with care for writers and readers.
          </div>
        </div>
      </footer>
    </div>
  )
}