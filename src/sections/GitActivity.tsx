import { useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import "./GitActivity.css";

interface Commit {
  id: string;
  repo: string;
  message: string;
  date: string;
  url: string;
}

interface Star {
  id: number;
  name: string;
  desc: string;
  url: string;
  language: string;
}

export default function GitActivity() {
  const ref = useReveal();
  const [commits, setCommits] = useState<Commit[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "caya8205-2";
        
        // Fetch Events for Commits
        const eventsRes = await fetch(`https://api.github.com/users/${username}/events/public`);
        const eventsData = await eventsRes.json();
        
        const pushEvents = eventsData
          .filter((e: any) => e.type === "PushEvent")
          .slice(0, 5)
          .map((e: any) => ({
            id: e.id,
            repo: e.repo.name,
            message: e.payload.commits[0]?.message || "Pushed changes",
            date: new Date(e.created_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            url: `https://github.com/${e.repo.name}/commit/${e.payload.head}`,
          }));

        // Fetch Starred Repos
        const starsRes = await fetch(`https://api.github.com/users/${username}/starred`);
        const starsData = await starsRes.json();
        
        const starredRepos = starsData.slice(0, 5).map((s: any) => ({
          id: s.id,
          name: s.full_name,
          desc: s.description || "No description provided.",
          url: s.html_url,
          language: s.language,
        }));

        setCommits(pushEvents);
        setStars(starredRepos);
      } catch (err) {
        console.error("Failed to fetch GitHub data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="git-activity" id="activity">
      <div className="container">
        <div ref={ref} className="git-activity-inner reveal-left">
          <div className="git-activity-label">
            <span>04</span>
            <span>Activity</span>
          </div>

          <div className="git-activity-body">
            <h2 className="git-activity-heading">
              Code logs<br />
              &amp; <em>interests.</em>
            </h2>

            <div className="git-grid">
              <div className="git-group">
                <h3 className="group-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                  Latest Commits
                </h3>
                {loading ? (
                  <div className="loading-skeleton">Fetching activity...</div>
                ) : (
                  <div className="commit-list">
                    {commits.map((c) => (
                      <div key={c.id} className="commit-item">
                        <span className="commit-msg">{c.message}</span>
                        <a href={c.url} target="_blank" rel="noreferrer" className="commit-repo" data-cursor>
                          {c.repo}
                        </a>
                        <span className="commit-date">{c.date}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="git-group">
                <h3 className="group-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  Recent Stars
                </h3>
                {loading ? (
                  <div className="loading-skeleton">Fetching stars...</div>
                ) : (
                  <div className="star-list">
                    {stars.map((s) => (
                      <div key={s.id} className="star-item">
                        <a href={s.url} target="_blank" rel="noreferrer" className="star-name" data-cursor>
                          {s.name}
                        </a>
                        <p className="star-desc">{s.desc}</p>
                        {s.language && <span className="commit-date">{s.language}</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
