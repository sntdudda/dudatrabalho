"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, User, Search, Menu, X, Heart, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount] = useState(3)

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900">Toque dos Sonhos</span>
              <span className="text-xs text-pink-400 -mt-1">Realizando sonhos</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-300 h-4 w-4" />
              <Input
                type="search"
                placeholder="Buscar produtos dos sonhos..."
                className="pl-10 pr-4 border-pink-200 focus:border-pink-300 focus:ring-pink-200"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/products" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">
              Produtos
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">
              Categorias
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">
              Sobre Nós
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="hidden md:flex hover:bg-pink-50 hover:text-pink-500">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative hover:bg-pink-50 hover:text-pink-500">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-pink-400 hover:bg-pink-500">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* User Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild className="hover:bg-pink-50 hover:text-pink-500">
                <Link href="/auth/login">
                  <User className="h-5 w-5 mr-2" />
                  Entrar
                </Link>
              </Button>
              <Button size="sm" asChild className="btn-primary">
                <Link href="/auth/register">Cadastrar</Link>
              </Button>
            </div>

            {/* Admin Link */}
            <Button variant="ghost" size="sm" asChild className="hidden md:flex hover:bg-pink-50 hover:text-pink-500">
              <Link href="/admin">
                <Settings className="h-5 w-5" />
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-pink-50 hover:text-pink-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-sm border-pink-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-300 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Buscar produtos dos sonhos..."
                  className="pl-10 pr-4 border-pink-200 focus:border-pink-300"
                />
              </div>

              <Link
                href="/products"
                className="block px-3 py-2 text-gray-700 hover:text-pink-400 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                href="/categories"
                className="block px-3 py-2 text-gray-700 hover:text-pink-400 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Categorias
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-pink-400 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="/auth/login"
                className="block px-3 py-2 text-gray-700 hover:text-pink-400 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Link>
              <Link
                href="/auth/register"
                className="block px-3 py-2 text-gray-700 hover:text-pink-400 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Cadastrar
              </Link>
              <Link
                href="/admin"
                className="block px-3 py-2 text-gray-700 hover:text-pink-400 hover:bg-pink-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Painel Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
