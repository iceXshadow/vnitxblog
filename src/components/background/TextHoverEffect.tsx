"use client"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion" // Changed import to framer-motion

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string
  duration?: number
  automatic?: boolean
}) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (svgRef.current && cursor.x !== 0 && cursor.y !== 0) {
      const svgRect = svgRef.current.getBoundingClientRect()
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      })
    }
  }, [cursor])

  return (
    <div ref={containerRef} className="relative">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 400 150"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className="select-none"
      >
        <defs>
          {/* Default white gradient for non-hovered state */}
          <linearGradient id="whiteGradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="50%" stopColor="rgba(87, 181, 239, 0.3)" />
            <stop offset="100%" stopColor="rgba(56, 152, 221, 1)" />
          </linearGradient>
          
          {/* Colorful gradient for hover state */}
          <linearGradient id="colorGradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="25%" stopColor="#a78bfa" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="75%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="25%"
            initial={{ cx: "50%", cy: "50%" }}
            animate={maskPosition}
            transition={{ duration: duration ?? 0, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>
          <mask id="textMask">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
          </mask>
        </defs>

        {/* Base outline text with glow */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.8"
          className="stroke-white font-sans text-9xl font-bold"
          style={{ opacity: 0.05, filter: "url(#glow)", fill: "rgba(255, 255, 255, 0.05)" }}
        >
          {text}
        </text>

        {/* Animated outline text */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.9"
          className="stroke-white font-sans text-9xl font-bold"
          style={{ opacity: 0.9, fill: "rgba(255, 255, 255, 0.1)" }}
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={{
            strokeDashoffset: 0,
            strokeDasharray: 1000,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.text>

        {/* Gradient filled text with mask */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={hovered ? "url(#colorGradient)" : "url(#whiteGradient)"}
          stroke={hovered ? "url(#colorGradient)" : "url(#whiteGradient)"}
          strokeWidth="1"
          mask="url(#textMask)"
          className="font-sans text-9xl font-bold"
          filter="url(#glow)"
        >
          {text}
        </text>
      </svg>

      {/* Light beam effect that intensifies on hover */}
    
    </div>
  )
}