export default function PartnerPage() {
  return (
    <main className="p-4 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-yellow-600">Partner with RAHMANbnb</h1>
      <p className="text-gray-700">
        Are you a Dubai property owner? We help you earn more by turning your unit into a high-performing Airbnb rental — with zero hassle.
      </p>

      <ul className="list-disc ml-6 text-gray-800 space-y-2">
        <li>We handle everything: listing, guests, cleaning, pricing, and support</li>
        <li>Higher returns than traditional renting</li>
        <li>Monthly reporting and total transparency</li>
      </ul>

      <form
        action="https://formspree.io/f/mjkwzopa"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="property"
          placeholder="Property Location / Details"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Tell us more..."
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Request a Free Consultation
        </button>
      </form>
    </main>
  );
}
