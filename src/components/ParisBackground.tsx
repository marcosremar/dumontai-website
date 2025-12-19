export function ParisBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* HD Background Image (1900s Paris + 14-bis) */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 mix-blend-lighten"
                style={{ backgroundImage: 'url(/paris-1900.png)' }}
            ></div>

            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030406] via-transparent to-[#030406]/80"></div>

            {/* Parallax Clouds (Subtle movement) */}
            <div className="absolute top-[10%] left-0 w-full h-[200px] animate-float opacity-20">
                <div className="absolute top-0 -left-[10%] w-[200px] h-[60px] bg-brand-blue/10 rounded-full blur-[40px]"></div>
                <div className="absolute top-10 right-[20%] w-[300px] h-[80px] bg-brand-border/10 rounded-full blur-[50px]"></div>
            </div>
        </div>
    )
}
