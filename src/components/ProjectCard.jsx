export default function ProjectCard(
  { title },
  { description },
  { hook },
  { tags },
  { github },
  { link },
) {
  return (
    <div
      className="cursor-target p-6 bg-slate-800/20 rounded-lg hover:bg-slate-700/30 hover:scale-105 transition-all duration-200 backdrop-blur-sm"
      style={{ border: "1px solid #6b7280" }}
    >
      <h3
        className="text-xl italic font-semibold mb-3"
        style={{
          color: "#c4a3ec",
          fontFamily: "var(--font-space-mono), 'Courier New', monospace",
          fontWeight: "700",
        }}
      >
        {title}
      </h3>
      <p className="text-gray-300 text-sm mb-4">
        Designed and implemented a neural network from scratch using only NumPy
        to classify breast growths as benign or malignant. Learning the calculus
        and linear algebra behind supervised learning models was a great
        experience.
        <br />
        <br />
        Achieved 95% precision and 90% recall scores.
      </p>
      <div className="flex gap-2 mb-4">
        <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
          Python
        </span>
        <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">NumPy</span>
        <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
          Machine Learning
        </span>
      </div>
      <div className="flex gap-2">
        <Button
          className="cursor-target text-xs bg-slate-700/50 border-slate-500 text-slate-100 hover:bg-slate-600/50 hover:border-slate-400 transition-all duration-200"
          asChild
        >
          <a
            href="https://github.com/Blynkosaur/Tumor-Classification"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-1" style={{ color: "#c4a3ec" }} />
            Code
          </a>
        </Button>
      </div>
    </div>
  );
}
