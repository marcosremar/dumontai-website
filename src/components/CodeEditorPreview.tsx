export function CodeEditorPreview() {
    return (
        <div className="w-full max-w-2xl lg:max-w-none animate-float perspective-1000">
            {/* Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue/30 to-brand-green/30 blur-2xl opacity-20 rounded-xl"></div>

            {/* Editor Frame */}
            <div className="relative bg-[#0d1117] rounded-xl border border-[#30363d] shadow-2xl overflow-hidden flex flex-col h-[350px] md:h-[400px]">
                {/* Title Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#010409] border-b border-[#30363d]">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#fa7970] border border-black/20"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffaa5f] border border-black/20"></div>
                            <div className="w-3 h-3 rounded-full bg-[#5eda6e] border border-black/20"></div>
                        </div>
                        <div className="text-[11px] text-brand-muted font-medium ml-2">aviao.ts</div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-20 h-1.5 rounded-full bg-[#21262d]"></div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex bg-[#010409] border-b border-[#30363d]">
                    <div className="px-4 py-2 text-[12px] text-white border-t-2 border-brand-gold bg-[#0d1117] border-r border-[#30363d]">
                        navigation.tsx
                    </div>
                    <div className="px-4 py-2 text-[12px] text-brand-muted border-r border-[#30363d]">
                        styles.css
                    </div>
                </div>

                {/* Code Area */}
                <div className="flex-1 p-6 font-mono text-[13px] leading-6 overflow-hidden relative text-left">
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#0d1117] border-r border-[#30363d]/30 flex flex-col items-end pr-3 pt-6 text-[#484f58] select-none">
                        <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div>
                    </div>

                    <div className="pl-12">
                        <div><span className="text-[#ff7b72]">import</span> {'{'} <span className="text-[#d2a8ff]">Aerodinamica</span> {'}'} <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'./fisica'</span>;</div>
                        <div className="h-6"></div>
                        <div><span className="text-[#8b949e] italic">// Otimizando sustentacao para decolagem curta</span></div>
                        <div><span className="text-[#ff7b72]">export async function</span> <span className="text-[#d2a8ff]">calcularDecolagem</span><span className="text-[#c9d1d9]">(</span><span className="text-[#79c0ff]">peso</span>: <span className="text-[#ff7b72]">number</span><span className="text-[#c9d1d9]">)</span> {'{'}</div>
                        <div className="pl-4"><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">velocidade</span> = <span className="text-[#79c0ff]">Aerodinamica</span>.<span className="text-[#d2a8ff]">analisarVento</span>();</div>
                        <div className="h-6"></div>
                        <div className="pl-4"><span className="text-[#ff7b72]">if</span> (<span className="text-[#79c0ff]">velocidade</span> {'>'} <span className="text-[#79c0ff]">LIMIT_CRITICO</span>) {'{'}</div>

                        {/* AI Suggestion Highlight */}
                        <div className="relative pl-8 group cursor-pointer">
                            <div className="absolute inset-0 bg-brand-blue/10 border border-brand-blue/20 rounded -ml-2 -mr-2 transition-opacity duration-300"></div>
                            <div className="relative flex items-center justify-between">
                                <span className="text-brand-text opacity-50"><span className="text-[#ff7b72]">return</span> <span className="text-[#a5d6ff]">null</span>; <span className="text-[#8b949e]">// fallback</span></span>
                                <span className="text-[10px] bg-brand-blue/20 text-brand-blue px-1.5 py-0.5 rounded border border-brand-blue/30 font-semibold tracking-wide flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    DUMONT
                                </span>
                            </div>
                            <div className="text-[#8b949e] text-[10px] mt-1 pl-0 font-sans opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 left-0 w-full whitespace-nowrap">
                                Sugestao baseada em padroes de seguranca aerea (ISO-9001)
                            </div>
                        </div>

                        <div className="pl-4">{'}'}</div>
                        <div>{'}'}</div>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="h-6 bg-[#21262d] flex items-center justify-between px-3 text-[10px] text-brand-muted select-none">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-brand-blue">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                            0 errors
                        </div>
                        <div className="flex items-center gap-1.5">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>
                            0 warnings
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span>Ln 8, Col 24</span>
                        <span>UTF-8</span>
                        <span>TypeScript</span>
                        <div className="flex items-center gap-1.5 text-white">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                            Dumont: Ready
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
