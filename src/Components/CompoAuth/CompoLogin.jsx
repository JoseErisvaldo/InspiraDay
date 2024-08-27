import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../UX/Input/Input'
import Button from '../UX/Button/Button'

export default function CompoLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex w-[800px] shadow-lg bg-white rounded-lg overflow-hidden">
        <div className="w-1/2 bg-[#008BAD] flex flex-col justify-center items-center p-10">
          <h2 className="text-4xl font-bold text-white mb-6">Bem-vindo de volta!</h2>
          <p className="text-white text-center">Faça login para acessar sua conta</p>
        </div>
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <Button
                type="submit"
                text="Entrar"
                background="rgb(59 130 246)"
                color="white"
                className="w-full py-2 text-sm font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              />
            </div>
          </form>
          <div className="mt-4 text-sm text-gray-500 text-center">
            <Link to="#" className="hover:text-gray-700">Esqueceu sua senha?</Link>
          </div>
          <div className="mt-4 text-sm text-gray-500 text-center">
            <Link
              to="/auth?mode=create-account"
              className="mt-4 text-sm text-gray-500"
            >
              Não tem cadastro? Crie uma conta
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
