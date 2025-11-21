export default function ComingSoon() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="mx-auto max-w-lg space-y-6 px-4 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary/10 h-32 w-32 rounded-full blur-3xl" />
          </div>
          <h1 className="relative text-6xl font-bold tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              COMING SOON
            </span>
          </h1>
        </div>

        <div className="flex items-center justify-center gap-2 pt-4">
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:0.2s]" />
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  )
}
