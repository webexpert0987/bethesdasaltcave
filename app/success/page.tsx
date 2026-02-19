import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="bg-[#F8F6F3] min-h-screen flex flex-col items-center justify-center text-center py-24">
      <h1 className="text-4xl md:text-5xl font-semibold mb-6">🎉 Payment Successful!</h1>
      <p className="text-gray-700 text-lg md:text-xl mb-12">
        Thank you for your purchase. Your gift card will be sent to the recipient email shortly.
      </p>
      <Link
        href="/gift-cards"
        className="bg-[#804f33] hover:bg-[#5a3622] transition-all duration-300 px-12 py-5 font-semibold rounded-full text-white"
      >
        Back to Gift Cards
      </Link>
    </main>
  );
}
