import { Microphone } from 'phosphor-react'

export function AvatarPreview() {
    return (
        <div className="w-full max-w-2xl lg:max-w-none animate-float hover:scale-[1.01] transition-transform duration-500">
            {/* Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-green/20 to-brand-blue/20 blur-2xl opacity-20 rounded-xl"></div>

            <div className="relative bg-[#0d1117] rounded-xl border border-[#30363d] shadow-2xl overflow-hidden flex flex-col items-center justify-center h-[350px] md:h-[400px] bg-[url('/grid.svg')]">
                {/* Center Circle */}
                <div className="relative z-10">
                    <div className="absolute inset-0 bg-brand-green/20 blur-3xl rounded-full animate-pulse"></div>
                    <div className="w-24 h-24 rounded-full border-2 border-brand-green/30 flex items-center justify-center bg-[#0d1117]/80 backdrop-blur-sm shadow-[0_0_30px_rgba(46,160,67,0.2)] relative">
                        <Microphone size={32} weight="duotone" className="text-brand-green" />

                        {/* Orbiting particles */}
                        <div className="absolute inset-0 animate-spin-slow">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#2ea043]"></div>
                        </div>
                    </div>
                </div>

                {/* Waveform Visualization */}
                <div className="mt-8 flex items-end gap-1 h-12">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1.5 bg-brand-green/50 rounded-full animate-wave"
                            style={{
                                height: '40%',
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: '1.2s'
                            }}
                        ></div>
                    ))}
                </div>

                {/* Text Interaction */}
                <div className="mt-8 bg-[#161b22] border border-[#30363d] px-6 py-3 rounded-full flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
                    <span className="text-sm font-mono text-brand-muted">"Como posso melhorar meu inglês técnico?"</span>
                </div>
            </div>
        </div>
    )
}
