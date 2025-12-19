import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CodeEditorPreview } from './CodeEditorPreview'
import { PilotPreview } from './PilotPreview'
import { AvatarPreview } from './AvatarPreview'

const projects = [
    {
        id: 'code',
        title: 'DuMont Code',
        subtitle: 'Agente de Codificação Autônomo',
        description: 'Engenheiro de software completo. Resolve issues, refatora código legado e implementa novas features complexas diretamente no seu repositório.',
        component: <CodeEditorPreview />,
        color: 'blue',
        link: '/code',
        cta: 'Conhecer o Code',
        ctaLink: '/code'
    },
    {
        id: 'pilot',
        title: 'DuMont Pilot',
        subtitle: 'Automação Desktop Human-Like',
        description: 'Controle total do seu computador via visão computacional. Navega na web, opera sistemas desktop e realiza tarefas repetitivas automaticamente.',
        component: <PilotPreview />,
        color: 'gold',
        link: '/pilot',
        cta: 'Conhecer o Pilot',
        ctaLink: '/pilot'
    },
    {
        id: 'avatar',
        title: 'DuMont Avatar',
        subtitle: 'Prática de Idiomas em Tempo Real',
        description: 'Interação natural em tempo real. Pratique idiomas, simule entrevistas e converse com uma IA que te ouve e fala como um nativo.',
        component: <AvatarPreview />,
        color: 'green',
        link: '/avatar',
        cta: 'Conhecer o Avatar',
        ctaLink: '/avatar'
    }
]

const colorClasses = {
    blue: {
        gradient: 'from-brand-blue/30 to-transparent',
        border: 'border-brand-blue/30',
        text: 'text-brand-blue',
        button: 'bg-brand-blue hover:bg-brand-blue/80',
        dot: 'bg-brand-blue'
    },
    gold: {
        gradient: 'from-brand-gold/30 to-transparent',
        border: 'border-brand-gold/30',
        text: 'text-brand-gold',
        button: 'bg-brand-gold hover:bg-brand-gold/80 text-black',
        dot: 'bg-brand-gold'
    },
    green: {
        gradient: 'from-brand-green/30 to-transparent',
        border: 'border-brand-green/30',
        text: 'text-brand-green',
        button: 'bg-brand-green hover:bg-brand-green/80',
        dot: 'bg-brand-green'
    }
}

export function ProjectCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const changeSlide = (newIndex: number) => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentIndex(newIndex)
            setIsTransitioning(false)
        }, 300)
    }

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            changeSlide((currentIndex + 1) % projects.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [currentIndex, isAutoPlaying])

    const goToSlide = (index: number) => {
        if (index === currentIndex) return
        setIsAutoPlaying(false)
        changeSlide(index)
    }

    const nextSlide = () => {
        setIsAutoPlaying(false)
        changeSlide((currentIndex + 1) % projects.length)
    }

    const prevSlide = () => {
        setIsAutoPlaying(false)
        changeSlide((currentIndex - 1 + projects.length) % projects.length)
    }

    const currentProject = projects[currentIndex]
    const colors = colorClasses[currentProject.color as keyof typeof colorClasses]

    return (
        <div className="relative w-full overflow-hidden rounded-2xl border border-brand-border bg-brand-surface/30 min-h-[600px] lg:min-h-[500px] group">

            {/* Background Gradient Transition */}
            <div
                className={`absolute inset - 0 bg - gradient - to - br ${colors.gradient} blur - 3xl transition - opacity duration - 1000 opacity - 20`}
            ></div>

            {/* Main Content */}
            <div className={`relative transition - opacity duration - 300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} `}>
                <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                    {/* Left: Text Content */}
                    <div className="flex flex-col justify-center space-y-6 lg:min-h-[400px]">
                        <div>
                            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${colors.text} bg-white/5 border ${colors.border} backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.2)]`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} animate-pulse`}></span>
                                {currentProject.subtitle}
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
                                {currentProject.title}
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-lg font-light">
                                {currentProject.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <Link to={currentProject.ctaLink || currentProject.link}>
                                <button className={`group relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] ${colors.button}`}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative flex items-center gap-2">
                                        {currentProject.cta || 'Saiba Mais'}
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </button>
                            </Link>
                            {currentProject.id !== 'copilot' && (
                                <Link to="/login">
                                    <button className="group px-8 py-4 rounded-xl font-semibold transition-all bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-sm shadow-lg hover:shadow-xl">
                                        <span className="flex items-center gap-2">
                                            Começar Agora
                                            <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} group-hover:scale-125 transition-transform`}></div>
                                        </span>
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Right: Component */}
                    <div className="relative flex items-center justify-center lg:h-[500px]">
                        <div className="w-full transform transition-transform hover:scale-[1.02] duration-500">
                            {currentProject.component}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows - Only visible on hover/interaction */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all z-20"
                    aria-label="Previous slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all z-20"
                    aria-label="Next slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20 p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/5">
                {projects.map((item, index) => {
                    const itemColors = colorClasses[item.color as keyof typeof colorClasses]
                    return (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h - 2 rounded - full transition - all duration - 300 ${index === currentIndex
                                ? `w-8 ${itemColors.dot}`
                                : 'w-2 bg-white/20 hover:bg-white/40'
                                } `}
                            aria-label={`Go to slide ${index + 1} `}
                        />
                    )
                })}
            </div>
        </div>
    )
}
