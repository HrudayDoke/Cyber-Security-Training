import Link from "next/link";

export default function HomePage() {

  return (

    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-[#020817]
      via-[#081120]
      to-[#0F172A]
      text-white
      overflow-hidden
      "
    >

      <section
        className="
        max-w-7xl
        mx-auto
        px-8
        py-24
        "
      >

        <div
          className="
          flex
          flex-col
          items-center
          text-center
          "
        >

          <div
            className="
            bg-cyan-500/10
            border
            border-cyan-500/20
            text-cyan-400
            px-6
            py-2
            rounded-full
            mb-8
            text-sm
            tracking-wide
            "
          >
            AI-Powered Cybersecurity Platform
          </div>

          <h1
            className="
            text-6xl
            md:text-8xl
            font-black
            leading-tight
            max-w-5xl
            "
          >
            Secure Your Digital World With AI
          </h1>

          <p
            className="
            text-slate-400
            text-xl
            max-w-3xl
            mt-8
            leading-10
            "
          >
            Learn cybersecurity through
            interactive AI-driven modules,
            quizzes, phishing detection,
            badges, and real-time
            security awareness training.
          </p>

          <div
            className="
            flex
            gap-6
            mt-14
            flex-wrap
            justify-center
            "
          >

            <Link
              href="/login"
              className="
              bg-cyan-500
              hover:bg-cyan-400
              text-black
              font-bold
              px-10
              py-5
              rounded-2xl
              transition-all
              duration-300
              hover:scale-105
              shadow-[0_0_40px_rgba(34,211,238,0.35)]
              "
            >
              Get Started
            </Link>

            <Link
              href="/register"
              className="
              border
              border-slate-700
              hover:border-cyan-500
              px-10
              py-5
              rounded-2xl
              text-white
              transition-all
              duration-300
              hover:bg-cyan-500/10
              "
            >
              Create Account
            </Link>

          </div>

        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          mt-28
          "
        >

          <div
            className="
            bg-white/5
            border
            border-slate-800
            rounded-3xl
            p-8
            backdrop-blur-xl
            "
          >

            <div className="text-5xl mb-6">
              🛡️
            </div>

            <h2 className="text-2xl font-bold mb-4">
              AI Threat Detection
            </h2>

            <p className="text-slate-400 leading-8">
              Detect phishing emails and
              suspicious cyber threats using
              AI-powered analysis tools.
            </p>

          </div>

          <div
            className="
            bg-white/5
            border
            border-slate-800
            rounded-3xl
            p-8
            backdrop-blur-xl
            "
          >

            <div className="text-5xl mb-6">
              🎯
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Interactive Learning
            </h2>

            <p className="text-slate-400 leading-8">
              Learn through engaging modules,
              quizzes, gamified badges,
              and real-world cybersecurity
              scenarios.
            </p>

          </div>

          <div
            className="
            bg-white/5
            border
            border-slate-800
            rounded-3xl
            p-8
            backdrop-blur-xl
            "
          >

            <div className="text-5xl mb-6">
              🤖
            </div>

            <h2 className="text-2xl font-bold mb-4">
              AI Security Assistant
            </h2>

            <p className="text-slate-400 leading-8">
              Get intelligent recommendations
              and cybersecurity guidance
              powered by AI.
            </p>

          </div>

        </div>

      </section>

    </main>

  );
}