export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#F9F8F5] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F28310] text-white font-bold">
            R
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-[#171717]">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-[#737373]">
            Sign in to continue to your account
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-[#E7E4DE] bg-white p-7 shadow-sm">
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#262626]"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-11 w-full rounded-lg border border-[#D9D6CF] bg-white px-3.5 text-sm text-[#171717] outline-none transition placeholder:text-[#A3A3A3] focus:border-[#F28310] focus:ring-2 focus:ring-[#F28310]/15"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#262626]"
                >
                  Password
                </label>

                <a
                  href="#"
                  className="text-sm font-medium text-[#F28310] hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="h-11 w-full rounded-lg border border-[#D9D6CF] bg-white px-3.5 text-sm text-[#171717] outline-none transition placeholder:text-[#A3A3A3] focus:border-[#F28310] focus:ring-2 focus:ring-[#F28310]/15"
              />
            </div>

            {/* Remember */}
            <label className="flex items-center gap-2.5 text-sm text-[#525252]">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-[#D4D4D4] accent-[#F28310]"
              />
              Remember me
            </label>

            {/* Login */}
            <button
              type="submit"
              className="h-11 w-full rounded-lg bg-[#F28310] text-sm font-semibold text-white transition hover:bg-[#D96F00] active:scale-[0.99]"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#E7E4DE]" />
            <span className="text-xs text-[#A3A3A3]">OR</span>
            <div className="h-px flex-1 bg-[#E7E4DE]" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex h-11 w-full items-center justify-center gap-3 rounded-lg border border-[#D9D6CF] bg-white text-sm font-medium text-[#262626] transition hover:bg-[#F9F8F5]"
          >
            <span className="font-semibold">G</span>
            Continue with Google
          </button>
        </div>

        {/* Signup */}
        <p className="mt-6 text-center text-sm text-[#737373]">
          Don't have an account?{" "}
          <a
            href="#"
            className="font-semibold text-[#F28310] hover:underline"
          >
            Create an account
          </a>
        </p>
      </div>
    </main>
  );
}