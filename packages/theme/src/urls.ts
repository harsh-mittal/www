export function getSiteUrls(isDev: boolean) {
  return {
    main: isDev ? "http://localhost:4322" : "https://harshmittal.net",
    notes: isDev ? "http://localhost:4321" : "https://notes.harshmittal.net",
    github: "https://github.com/harsh-mittal",
  } as const;
}
