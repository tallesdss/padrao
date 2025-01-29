"use client"

import { Asterisk } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PerfilPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <Asterisk className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-2xl font-semibold">Meu Perfil</h1>
          </div>
          <Button variant="outline">Voltar</Button>
        </div>

        {/* Foto e Informações Básicas */}
        <div className="grid gap-8 md:grid-cols-[200px_1fr]">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-muted">
              <Image
                src="https://avatars.githubusercontent.com/u/124599"
                alt="Foto do perfil"
                fill
                className="object-cover"
              />
            </div>
            <Button className="w-full">Alterar foto</Button>
          </div>

          <div className="space-y-6">
            {/* Informações Pessoais */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Informações Pessoais</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input id="nome" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="000.000.000-00" />
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Endereço</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" placeholder="00000-000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rua">Rua</Label>
                  <Input id="rua" placeholder="Nome da rua" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numero">Número</Label>
                  <Input id="numero" placeholder="Número" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="complemento">Complemento</Label>
                  <Input id="complemento" placeholder="Apartamento, bloco, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bairro">Bairro</Label>
                  <Input id="bairro" placeholder="Nome do bairro" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input id="cidade" placeholder="Nome da cidade" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estado">Estado</Label>
                  <Input id="estado" placeholder="UF" />
                </div>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex justify-end space-x-4 pt-4">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar alterações</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 