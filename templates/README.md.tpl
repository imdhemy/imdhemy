### Hi there 👋 I'm Dhemy

I'm a pragmatic backend engineer focused on modernizing complex systems, reducing technical debt, and improving reliability. I combine hands-on engineering with practical decisions that help teams deliver quickly while maintaining quality.

At Reservix, I led technical direction for customer data systems serving roughly one million contacts. My work included distributed, event-driven services, data modeling, search architecture, testing infrastructure, CI/CD, and infrastructure as code.

I also maintain open-source packages for App Store and Google Play purchases with more than 3 million combined downloads. I write about backend engineering, software design, testing, and distributed systems at [imdhemy.com](https://imdhemy.com/).

#### 👷 What I'm currently working on
{{range recentContributions 3}}
- [{{.Repo.Name}}]({{.Repo.URL}}) - {{.Repo.Description}} ({{humanize .OccurredAt}})
{{- end}}

#### 🔭 Latest releases I've contributed to
{{range recentReleases 3}}
- [{{.Name}}]({{.URL}}) ([{{.LastRelease.TagName}}]({{.LastRelease.URL}}), {{humanize .LastRelease.PublishedAt}}) - {{.Description}}
{{- end}}

#### 📜 Recent blog posts
{{range rss "https://imdhemy.com/feed.xml" 3}}
- [{{.Title}}]({{.URL}}) ({{humanize .PublishedAt}})
{{- end}}

#### 📫 Connect with me

- [LinkedIn](https://www.linkedin.com/in/imdhemy/)
- [GitHub](https://github.com/imdhemy)
- [Blog](https://imdhemy.com/)
- [X](https://twitter.com/imdhemy)
