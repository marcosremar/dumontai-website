import { PaperPlaneTilt, Desktop, Globe, TerminalWindow } from 'phosphor-react'
import { useEffect, useState } from 'react'

export function PilotPreview() {
    const [activeStep, setActiveStep] = useState(0)

    const steps = [
        { text: "Analisando tela...", color: "text-brand-blue" },
        { text: "Identificando navegador...", color: "text-brand-gold" },
        { text: "Extraindo dados...", color: "text-brand-green" }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % steps.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full max-w-2xl lg:max-w-none animate-float hover:scale-[1.01] transition-transform duration-500">
            {/* Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold/20 to-brand-blue/20 blur-2xl opacity-20 rounded-xl"></div>

            {/* Main Window */}
            <div className="relative bg-[#0d1117] rounded-xl border border-[#30363d] shadow-2xl overflow-hidden flex h-[350px] md:h-[400px]">
                {/* Sidebar */}
                <div className="w-16 bg-[#010409] border-r border-[#30363d] flex flex-col items-center py-4 gap-6">
                    <PaperPlaneTilt size={24} color="#e5ba73" weight="duotone" />
                    <div className="w-8 h-[1px] bg-[#30363d]"></div>
                    <div className="flex flex-col gap-4 text-brand-muted">
                        <Desktop size={20} weight="duotone" className="text-white opacity-80" />
                        <Globe size={20} weight="duotone" className="opacity-40" />
                        <TerminalWindow size={20} weight="duotone" className="opacity-40" />
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="h-10 border-b border-[#30363d] bg-[#0d1117] flex items-center px-4 justify-between">
                        <div className="flex gap-2">
                            <span className="text-xs text-brand-muted font-mono">pilot-desktop-v2</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span className="text-[10px] text-white/50">LIVE</span>
                        </div>
                    </div>

                    {/* Desktop Sim */}
                    <div className="flex-1 bg-[#161b22] p-4 relative overflow-hidden">
                        {/* Abstract Desktop Content */}
                        <div className="absolute top-8 left-8 right-8 bottom-8 border border-brand-border/20 rounded bg-[#0d1117]/50 backdrop-blur flex items-center justify-center flex-col gap-4">
                            <div className="animate-pulse flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full border-2 border-brand-gold border-t-transparent animate-spin"></div>
                                <span className="font-mono text-sm text-brand-muted">{steps[activeStep].text}</span>
                            </div>

                            {/* Simulated UI Elements */}
                            <div className="flex gap-2 opacity-30 mt-4">
                                <div className="w-12 h-12 bg-white/10 rounded"></div>
                                <div className="w-32 h-12 bg-white/5 rounded"></div>
                                <div className="w-12 h-12 bg-white/5 rounded"></div>
                            </div>
                        </div>

                        {/* Scan line effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/5 to-transparent h-full w-full animate-scan pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
