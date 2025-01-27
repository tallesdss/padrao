"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Lado esquerdo - Formulário de login */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center md:items-center min-h-screen md:min-h-0">
        <div className="w-full max-w-[480px] md:pl-[15%]">
          <div className="mb-8">
            <div className="relative w-[120px] h-[30px]">
              <Image
                src="/next.svg"
                alt="Logo"
                fill
                className="dark:invert"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 w-full">
            <div>
              <h1 className="text-2xl font-semibold mb-2">Fazer login</h1>
              <p className="text-gray-500 text-sm">
                Bem-vindo de volta! Por favor, entre em sua conta.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Digite seu email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="rounded" />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Lembrar de mim
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Entrar
              </button>
            </form>

            <p className="text-sm text-center text-gray-600">
              Ainda não tem uma conta?{" "}
              <Link href="/cadastro" className="text-blue-600 hover:underline">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Lado direito - Imagem (esconde em mobile) */}
      <div className="hidden md:block w-full md:w-1/2 relative bg-gray-100">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/background.png"
              alt="Background"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl max-w-md text-center">
            <h2 className="text-3xl font-semibold mb-4">Bem-vindo de volta!</h2>
            <p className="text-xl">Sentimos sua falta</p>
          </div>
        </div>
      </div>
    </div>
  );
} 