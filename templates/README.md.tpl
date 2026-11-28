### Hi there 👋 I'm Dhemy

A Pragmatic backend engineer with over a decade of experience modernizing complex systems, reducing technical debt, and
improving reliability. I combine hands-on engineering with practical decisions that help teams deliver and maintain
quality.

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

- LinkedIn: https://www.linkedin.com/in/imdhemy
- Blog: https://imdhemy.com
