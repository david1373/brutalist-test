'use client';
import { useState, useEffect } from 'react';

interface Article {
  id: string;
  title: string;
  content: string;
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: '1',
      title: 'Testing Brutalist News',
      content: 'Initial test content'
    }
  ]);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">Brutalist News</h1>
      <div className="grid gap-4">
        {articles.map(article => (
          <div key={article.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="mt-2">{article.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}