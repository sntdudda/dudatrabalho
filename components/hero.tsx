import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative hero-gradient text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Bem-vindos ao <span className="text-gradient">Toque dos Sonhos</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Descubra produtos únicos e especiais que tornam seus sonhos realidade. Qualidade, carinho e magia em cada
              produto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-primary">
                <Link href="/products">Explorar Produtos</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-pink-300 text-pink-500 hover:bg-pink-50 bg-transparent"
              >
                <Link href="/auth/register">Junte-se a Nós</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Toque dos Sonhos - Produtos dos Sonhos"
              width={500}
              height={400}
              className="rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-white rounded-full opacity-40 animate-bounce delay-1000"></div>
    </section>
  )
}
