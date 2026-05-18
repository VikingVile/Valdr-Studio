"use client";

import { ArrowUpRight } from "lucide-react";

export default function CheckoutButton() {
  async function handleCheckout() {
    const response = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }
  }

  return (
    <button
      onClick={handleCheckout}
      className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-[1.02]"
    >
      Open Secure Payment
      <ArrowUpRight className="h-4 w-4" />
    </button>
  );
}