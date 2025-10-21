const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-500">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl animate-float dark:from-primary/20 dark:via-primary/5" />
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl animate-float dark:from-accent/20 dark:via-accent/5" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl animate-float dark:from-primary/15 dark:via-primary/5" style={{ animationDelay: '4s' }} />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Radial gradient vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80" />
    </div>
  );
};

export default AnimatedBackground;
