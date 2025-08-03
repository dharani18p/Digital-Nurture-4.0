// src/App.js
import React, { useEffect, useState } from 'react';
import GitClient from './GitClient';

function App() {
  const [repos, setRepos] = useState([]);
  const client = new GitClient();

  useEffect(() => {
    client.getRepositories('techiesyed').then(setRepos);
  }, []);

  return (
    <div>
      <h2>Repository List</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
