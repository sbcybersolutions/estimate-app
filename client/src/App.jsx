import NewQuote from './pages/NewQuote';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-primary">Estimate Builder</h1>
        <p className="text-sm text-gray-600">Create and manage project quotes easily</p>
      </header>

      <main>
        <NewQuote />
      </main>
    </div>
  );
}

export default App;

