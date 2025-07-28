import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-50 to-white border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900">Toque dos Sonhos</span>
                <span className="text-xs text-pink-400 -mt-1">Realizando sonhos</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Sua loja online de confiança para produtos únicos e especiais. Transformamos sonhos em realidade com
              carinho e qualidade.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors cursor-pointer">
                <Facebook className="h-4 w-4 text-pink-500" />
              </div>
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors cursor-pointer">
                <Twitter className="h-4 w-4 text-pink-500" />
              </div>
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors cursor-pointer">
                <Instagram className="h-4 w-4 text-pink-500" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Todos os Produtos
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Ofertas Especiais
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Atendimento</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Informações de Entrega
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-pink-500" />
                </div>
                <span className="text-gray-600 text-sm">Rua dos Sonhos, 123 - Centro</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4 text-pink-500" />
                </div>
                <span className="text-gray-600 text-sm">(11) 9999-8888</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <Mail className="h-4 w-4 text-pink-500" />
                </div>
                <span className="text-gray-600 text-sm">contato@toquedossonhos.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-100 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm flex items-center">
              © 2024 Toque dos Sonhos. Feito com <Heart className="h-4 w-4 text-pink-400 mx-1" /> para você.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-600 hover:text-pink-500 text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-pink-500 text-sm transition-colors">
                Termos de Uso
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-pink-500 text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
