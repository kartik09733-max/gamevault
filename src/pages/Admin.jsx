import { useEffect, useState } from "react";
import { signIn, signOut, getSession } from "../lib/auth";
import { getPayments } from "../services/adminService";

export default function Admin() {
  const [session, setSession] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [payments, setPayments] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loadingPayments, setLoadingPayments] =
    useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    const currentSession = await getSession();

    if (currentSession) {
      setSession(currentSession);
      loadPayments();
    }
  }

  async function loadPayments() {
    try {
      setLoadingPayments(true);

      const data = await getPayments();

      setPayments(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load payments.");
    }

    setLoadingPayments(false);
  }

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await signIn(
      email,
      password
    );

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setSession(data.session);

    loadPayments();
  }

  async function handleLogout() {
    await signOut();

    setSession(null);

    setPayments([]);

    setEmail("");

    setPassword("");
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-[#0B0F17] flex items-center justify-center px-6">

        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-3xl border border-white/10 bg-[#171C25] p-8"
        >

          <h1 className="text-center text-4xl font-black text-white">
            GameVault Admin
          </h1>

          <p className="mt-2 text-center text-gray-400">
            Login to continue
          </p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="mt-8 w-full rounded-xl border border-white/10 bg-[#10151D] p-4 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="mt-4 w-full rounded-xl border border-white/10 bg-[#10151D] p-4 text-white outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-orange-500 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            {loading
              ? "Logging In..."
              : "Login"}
          </button>

        </form>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F17] p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-black text-white">
              GameVault Admin
            </h1>

            <p className="mt-2 text-gray-400">
              Payment Requests
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600"
          >
            Logout
          </button>

        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#171C25]">
                  {loadingPayments ? (
            <div className="p-10 text-center text-gray-400">
              Loading payments...
            </div>
          ) : payments.length === 0 ? (
            <div className="p-10 text-center text-gray-400">
              No payment requests found.
            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="min-w-full">

                <thead className="border-b border-white/10 bg-[#10151D]">

                  <tr>

                    <th className="px-6 py-4 text-left text-sm font-bold text-white">
                      Package
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-bold text-white">
                      UTR
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-bold text-white">
                      Screenshot
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-bold text-white">
                      Time
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {payments.map((payment) => (

                    <tr
                      key={payment.id}
                      className="border-b border-white/5"
                    >

                      <td className="px-6 py-5 text-white">
                        {payment.package}
                      </td>

                      <td className="px-6 py-5 text-gray-300">
                        {payment.utr || "—"}
                      </td>

                      <td className="px-6 py-5">

                        {payment.screenshot_url ? (

                          <a
                            href={payment.screenshot_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-600"
                          >
                            View
                          </a>

                        ) : (

                          <span className="text-gray-500">
                            No Image
                          </span>

                        )}

                      </td>

                      <td className="px-6 py-5 text-gray-400">

                        {new Date(
                          payment.created_at
                        ).toLocaleString()}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}