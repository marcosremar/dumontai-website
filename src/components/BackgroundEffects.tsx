interface BackgroundEffectsProps {
  showGrid?: boolean
}

export function BackgroundEffects({ showGrid = true }: BackgroundEffectsProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px]"></div>
      {showGrid && <div className="bg-grid-pattern absolute inset-0 h-[800px]"></div>}
    </div>
  )
}
