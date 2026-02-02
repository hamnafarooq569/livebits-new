export function BlogFooterArticles() {
  const data = [
    {
      title: "Chrome split screen: How to view pages side by side in your browser",
      date: "December 11, 2025",
      read: "3 min read",
      tag: "App tips",
    },
    {
      title: "The best document management software in 2026",
      date: "December 11, 2025",
      read: "18 min read",
      tag: "Best apps",
    },
    {
      title: "The 7 best note-taking apps in 2026",
      date: "December 11, 2025",
      read: "19 min read",
      tag: "Best apps",
    },
    {
      title: "The best invoicing software in 2026",
      date: "December 10, 2025",
      read: "15 min read",
      tag: "Best apps",
    },
  ];

  return (
    <section className="w-full bg-white border-t py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">

        {data.map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-sm text-blue-600 font-medium">{item.tag}</p>
            <h3 className="mt-3 text-lg font-semibold text-gray-900 leading-snug">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {item.date} | {item.read}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
