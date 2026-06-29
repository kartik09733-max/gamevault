import { useState } from "react";
import { X, LoaderCircle, AlertTriangle } from "lucide-react";
import { usePayment } from "../../context/PaymentContext";
import { usePlayer } from "../../context/PlayerContext";
import qrImage from "../../assets/qr/qr.jpg";

function PaymentModal() {
  const {
    paymentOpen,
    closePayment,
    selectedProduct,
  } = usePayment();

  const { player } = usePlayer();

  const [status, setStatus] = useState("payment");

  if (!paymentOpen || !selectedProduct) return null;

  const handlePaymentComplete = () => {
    setStatus("checking");

    setTimeout(() => {
      setStatus("failed");
    }, 2500);
  };

  const handleTryAgain = () => {
    setStatus("payment");
  };

  const handleClose = () => {
    setStatus("payment");
    closePayment();
  };

  return (
    <>
      {/* Overlay */}

      <div
        onClick={handleClose}
        className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
      />

      {/* Bottom Sheet */}

      <div className="fixed bottom-0 left-0 right-0 z-[100] animate-[slideUp_.35s_ease] rounded-t-[34px] border-t border-white/10 bg-[#10151D] shadow-2xl">

        <div className="flex justify-center pt-3">
          <div className="h-1.5 w-14 rounded-full bg-gray-600" />
        </div>

        <div className="flex items-center justify-between px-6 pt-4">

          <h2 className="text-xl font-black text-white">
            Complete Payment
          </h2>

          <button
            onClick={handleClose}
            className="rounded-full bg-white/10 p-2 text-white"
          >
            <X size={20} />
          </button>

        </div>

        {/* PAYMENT SCREEN */}

        {status === "payment" && (
          <>

            {/* Product */}

            <div className="mt-6 px-6">

              <div className="rounded-3xl border border-white/10 bg-[#171C25] p-5">

                <div className="flex items-center gap-4">

                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="h-20 w-20 object-contain"
                  />

                  <div>

                    <h3 className="text-xl font-bold text-white">
                      {selectedProduct.title}
                    </h3>

                    <p className="mt-2 text-3xl font-black text-orange-400">
                      ₹{selectedProduct.price}
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Player */}

            <div className="mt-5 px-6">

              <div className="rounded-3xl border border-white/10 bg-[#171C25] p-5">

                <h3 className="mb-4 font-bold text-white">
                  Verified Player
                </h3>

                <div className="space-y-2">

                  <div className="flex justify-between">

                    <span className="text-gray-400">
                      Name
                    </span>

                    <span className="font-semibold text-white">
                      {player.name}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-400">
                      UID
                    </span>

                    <span className="font-semibold text-white">
                      {player.uid}
                    </span>

                  </div>

                </div>

              </div>

            </div>

            {/* QR */}

            <div className="mt-5 px-6">

              <div className="rounded-3xl border border-white/10 bg-[#171C25] p-6 text-center">

                <img
                  src={qrImage}
                  alt="QR"
                  className="mx-auto h-56 rounded-2xl"
                />

                <p className="mt-4 text-sm text-gray-400">
                  Scan this QR using any UPI App
                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-6 space-y-3 px-6 pb-8">

              <a
                href={qrImage}
                download="GameVault-QR.jpg"
                className="block w-full rounded-2xl border border-orange-500 py-4 text-center font-bold text-orange-400"
              >
                ⬇ Download QR
              </a>

              <button
                onClick={handlePaymentComplete}
                className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 py-4 text-lg font-bold text-white"
              >
                ✅ Payment Completed
              </button>

            </div>

          </>
        )}

        {/* CHECKING SCREEN */}

        {status === "checking" && (
          <div className="flex min-h-[520px] flex-col items-center justify-center px-8 text-center">

            <LoaderCircle
              size={70}
              className="animate-spin text-orange-400"
            />

            <h2 className="mt-8 text-3xl font-black text-white">
              Checking Payment...
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Please wait while we verify
              your payment.
            </p>

          </div>
        )}
                {/* PAYMENT FAILED */}

        {status === "failed" && (
          <div className="flex min-h-[520px] flex-col justify-center px-8">

            <div className="text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">

                <AlertTriangle
                  size={50}
                  className="text-red-400"
                />

              </div>

              <h2 className="mt-6 text-3xl font-black text-white">
                Payment Not Received
              </h2>

              <p className="mt-5 leading-8 text-gray-400">
                We couldn't verify your payment.
                <br />
                <br />
                If the amount has been deducted,
                it will usually be returned
                automatically by your bank or UPI
                provider if the transaction was
                unsuccessful.
              </p>

            </div>

            <div className="mt-10 space-y-4">

              <button
                onClick={handleTryAgain}
                className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 py-4 text-lg font-bold text-white transition hover:opacity-90"
              >
                🔄 Try Again
              </button>

              <a
                href="https://wa.me/919703121668?text=Hello%20GameVault,%20I%20need%20help%20with%20my%20payment."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-2xl border border-white/10 py-4 text-center text-lg font-bold text-white transition hover:bg-white/5"
              >
                💬 Contact Support
              </a>

            </div>

          </div>
        )}

      </div>

    </>
  );
}

export default PaymentModal;