 'use client';
 
import { X } from "lucide-react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { LoginInitialValues, LoginFormValues, LoginValidationSchema } from "@/validators/LoginSchema";
import { useAuthModal } from "../context/AuthModalContext";

export default function LoginForm({ onClose }: { onClose?: () => void }) {
const { openRegister } = useAuthModal();

  const formik = useFormik<LoginFormValues>({
    initialValues: LoginInitialValues,
    validationSchema: LoginValidationSchema,
    onSubmit: (values) => {
      alert(`Login mock: ${values.email}`);
    },
  });

  const handleGoogleLogin = () => {
    alert("Google login mock");
  };


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <div className="bg-[var(--card)] rounded-3xl shadow-2xl w-full max-w-md mx-4 p-8 relative animate-fadeIn">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/TrainX.svg"
            alt="Logo TrainX"
            width={72}
            height={72}
            className="rounded-full bg-[#1a1a1a] p-3 shadow-md"
          />
          <h1 className="text-4xl font-bold text-[var(--primary)] mt-3">
            TrainX
          </h1>
          <p className="text-sm text-[var(--muted-foreground)]">
            Entrená sin límites
          </p>
        </div>

        {/* Botón Google */}
        <button
          type="button"
          onClick={handleGoogleLogin}
className="w-full flex items-center justify-center gap-2 py-2.5 border rounded-xl transition-colors border-[var(--muted)] text-[var(--foreground)] bg-[var(--background)] hover:bg-[var(--card)] hover:text-[var(--muted-foreground)]" 
        >
          <FcGoogle className="w-4 h-4" />
          Continuar con Google
        </button>

        {/* Separador */}
        <div className="relative text-center my-5">
          <hr className="border-[var(--border)]" />
          <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--card)] text-xs text-[var(--muted-foreground)] px-2">
            o continúa con email
          </span>
        </div>

        {/* Formulario */}
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Campo Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm text-[var(--muted-foreground)] mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="usuario@ejemplo.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`p-2 rounded-xl bg-[var(--background)] border text-[var(--foreground)] focus:outline-none focus:ring-2 ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[var(--border)] focus:ring-[var(--primary)]"
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-xs mt-1">
                {formik.errors.email}
              </span>
            )}
          </div>

          {/* Campo Contraseña */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm text-[var(--muted-foreground)] mb-1"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`p-2 rounded-xl bg-[var(--background)] border text-[var(--foreground)] focus:outline-none focus:ring-2 ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[var(--border)] focus:ring-[var(--primary)]"
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-500 text-xs mt-1">
                {formik.errors.password}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-xl hover:opacity-90 transition"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Registro */}
        <p className="text-center text-sm text-[var(--muted-foreground)] mt-6">
          ¿Aún no tienes cuenta?{" "}
          <button
            onClick={openRegister}
            className="text-[var(--primary)] hover:underline font-medium"
          >
            Regístrate
          </button>
        </p>
      </div>
    </div>
  );
}