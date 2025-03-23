"use client"
// import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { TextHoverEffect } from "./TextHoverEffect"
import { useEffect, useState, useRef } from "react"

export default function TextHoverEffectDemo() {
  const [hovered, setHovered] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const particlesArrayRef = useRef<Particle[]>([])

  // Define Particle class outside of the effect to avoid recreating it on each render
  class Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    opacity: number
    canvas: HTMLCanvasElement

    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 2 + 0.5
      this.speedX = (Math.random() - 0.5) * 0.3
      this.speedY = (Math.random() - 0.5) * 0.3
      this.opacity = Math.random() * 0.5 + 0.1
    }

    update() {
      this.x += this.speedX
      this.y += this.speedY

      if (this.x > this.canvas.width) this.x = 0
      if (this.x < 0) this.x = this.canvas.width
      if (this.y > this.canvas.height) this.y = 0
      if (this.y < 0) this.y = this.canvas.height
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // Handle the main light effect
  useEffect(() => {
    const container = document.querySelector(".main-light")
    if (container && hovered) {
      container.classList.remove("opacity-80")
      container.classList.add("opacity-100")
    } else if (container) {
      container.classList.remove("opacity-100")
      container.classList.add("opacity-80")
    }
  }, [hovered])

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize particles
    const numberOfParticles = 100
    particlesArrayRef.current = []

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        if (canvas) {
          particlesArrayRef.current.push(new Particle(canvas))
        }
      }
    }

    function animate() {
      if (ctx) {
        if (canvas) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
      }
      
      // Safe-check if particlesArray exists before iterating
      if (particlesArrayRef.current && particlesArrayRef.current.length > 0) {
        for (let i = 0; i < particlesArrayRef.current.length; i++) {
          if (particlesArrayRef.current[i]) {
            particlesArrayRef.current[i].update()
            if (ctx) {
              particlesArrayRef.current[i].draw(ctx)
            }
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    init()
    animate()

    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
      particlesArrayRef.current = []
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Canvas for particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60" />

      {/* Background with light effect */}
     

     
      

      {/* Content container */}
      <div className="relative z-10 flex h-full items-center font-sans justify-center px-4">
        <div className="w-full max-w-3xl" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <TextHoverEffect text="Dimen" />
        </div>
      </div>
    </div>
  )
}