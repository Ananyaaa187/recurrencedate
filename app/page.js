"use client";
import ClientOnly from "../components/ClientOnly";
import RecurrenceSelector from "../components/RecurrenceSelector";

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>
      <ClientOnly>
        <RecurrenceSelector />
      </ClientOnly>
    </main>
  );
}
