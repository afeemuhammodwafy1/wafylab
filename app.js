document.addEventListener('DOMContentLoaded', () => {
  const ghUsername = 'afeemuhammodwafy1';
  const metricsContainer = document.getElementById('gh-metrics');

  // Fetch GitHub Public Telemetry
  async function fetchGitHubStats() {
    try {
      const response = await fetch(`https://api.github.com/users/${ghUsername}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      
      metricsContainer.innerHTML = `
        <div class="metric-item">Public Repos: <strong>${data.public_repos}</strong></div>
        <div class="metric-item">Followers: <strong>${data.followers}</strong></div>
        <div class="metric-item">Last Active: <strong>${new Date(data.updated_at).toLocaleDateString()}</strong></div>
      `;
    } catch (error) {
      metricsContainer.innerHTML = '<span>[Telemetry API unreachable at the moment]</span>';
      console.error('Error fetching GitHub data:', error);
    }
  }

  fetchGitHubStats();

  // Console Easter Egg for Developers checking your source
  console.log("%c>_ WAFY LABS CORE INITIALIZED", "color: #10b981; font-weight: bold; font-size: 14px;");
  console.log("Zero dependencies. 100% Vanilla JS.");
});