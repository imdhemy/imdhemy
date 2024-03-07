### Hi there 👋 I'm Dhemy

I'm a software artist, full-stack (BE heavy) with 10+ years of experience in software development,
passionate about open source, blogging, and reading.

#### 👷 Check out what I'm currently working on
{{range recentContributions 3}}
- [{{.Repo.Name}}]({{.Repo.URL}}) - {{.Repo.Description}} ({{humanize .OccurredAt}})
{{- end}}

#### 🔭 Latest releases I've contributed to
{{range recentReleases 3}}
- [{{.Name}}]({{.URL}}) ([{{.LastRelease.TagName}}]({{.LastRelease.URL}}), {{humanize .LastRelease.PublishedAt}}) - {{.Description}}
{{- end}}

#### 📜 My recent [blog posts](https://imdhemy.com/)
{{range rss "https://imdhemy.com//feed.xml" 3}}
- [{{.Title}}]({{.URL}}) ({{humanize .PublishedAt}})
{{- end}}

#### 📫 How to reach me

- [X](https://twitter.com/imdhemy)
- [Linkedin](https://linkedin.com/in/imdhemy)
