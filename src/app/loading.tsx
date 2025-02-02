import { Loader2 } from 'lucide-react'

export default function EnhancedLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-[999]">
      <div className="flex flex-col items-center space-y-6">
        {/* Text animation with slide effect */}
        <h2 className="text-5xl font-bold text-white animate-slide-in">
           Progress
        </h2>

        {/* Animated icon */}
        <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />

        {/* Progressive loading dots with blue color scheme */}
        <div className="flex space-x-3 mt-8">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                boxShadow: `0 0 12px rgba(59,130,246,${0.5 + (i * 0.2)})`
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1.5 bg-gray-800 rounded-full mt-6 overflow-hidden">
          <div className="w-1/2 h-full bg-gradient-to-r from-blue-400 to-indigo-600 animate-progress" />
        </div>
      </div>
    </div>
  )
}
