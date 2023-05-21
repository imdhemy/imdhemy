### Hi there 👋 I'm Dhemy

A software artist and skilled backend engineer, blending creativity with technical expertise to craft elegant and efficient solutions. With a keen focus on backend engineering, I excel in system architecture, data modeling, and optimizing server-side performance, all while delivering exceptional user experiences. Committed to the open-source community, I actively contribute to its growth, combining artistry and innovation in every endeavor.

#### 👷 Check out what I'm currently working on
{{range recentContributions 3}}
- [{{.Repo.Name}}]({{.Repo.URL}}) - {{.Repo.Description}} ({{humanize .OccurredAt}})
{{- end}}

#### 🌱 My latest projects
{{range recentRepos 3}}
- [{{.Name}}]({{.URL}}) - {{.Description}}
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

- [Twitter](https://twitter.com/imdhemy)
- [Linkedin](https://linkedin.com/in/imdhemy)
