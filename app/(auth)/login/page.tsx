"use client";

import { Button, Input, Spinner } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    setSubmitting(true);
    e.preventDefault()
    const formData = new FormData(e.target);
    let authData: any = {}
    authData.userEmail = formData.get('userEmail')
    authData.userPassword = formData.get('userPassword')
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        ...authData
      }, {
        withCredentials: true,
      });
      if (response.status === 201) router.push('/dashboard'); 
      setSubmitting(false);
    } catch (e) {
      setSubmitting(false);
    }
    return;
  }
  return (
    <form className="bg-orange-500 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
      <p className="text-2xl my-4 text-white">
        Iniciar sesión
      </p>
      <div className="flex flex-col gap-2 my-4 items-center">
        <Input 
        label="Email" 
        type="userEmail" 
        isRequired={true} 
        size="sm" />
        <Input 
        label="Contraseña" 
        type="userPassword" 
        isRequired={true} 
        size="sm" />
      </div>
      <div 
      className="flex flex-col items-center gap-2">
        <Button 
        color="primary" 
        type="submit" 
        disabled={submitting}>{submitting ? <Spinner size="md" /> : "Iniciar Sesion"} 
        </Button>
        <p className="text-white">
          ¿No tienes cuenta? 
          <Link 
          href="/signup" 
          className="text-red-600 underline">
            Regístrate
            </Link>
        </p>
      </div>
    </form>
  );
}