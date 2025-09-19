import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Code, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
              Software 3.0
              <span className="block">built with people and purpose</span>
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Build the future with
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                human‑centered AI
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We design useful software through education, compliant AI, and solid engineering.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/build-website">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Build a website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/find-internship">
                <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Find an internship
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What we do
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              From idea to production, we deliver simple, fast, and reliable products.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Web development</CardTitle>
                <CardDescription className="text-gray-400">
                  Modern, responsive websites using a clean stack and best practices.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-600">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">AI integration</CardTitle>
                <CardDescription className="text-gray-400">
                  Bring AI into your product with a compliance‑first approach.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Education & training</CardTitle>
                <CardDescription className="text-gray-400">
                  Hands‑on learning for the next generation of builders.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to build?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
              Let’s talk and ship your vision with Software 3.0.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
