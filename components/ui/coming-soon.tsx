export default function ComingSoon() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-lg mx-auto px-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
          <h1 className="relative text-6xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              COMING SOON
            </span>
          </h1>
        </div>

        <div className="flex items-center justify-center gap-2 pt-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.2s]" />
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  )
}
