import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://torrankahleck.com',
      lastModified: new Date(),
    },
    {
      url: 'https://torrankahleck.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://torrankahleck.com/skills',
      lastModified: new Date(),
    },
    {
        url: 'https://torrankahleck.com/projects',
        lastModified: new Date(),
    },
    {
        url: 'https://torrankahleck.com/media',
        lastModified: new Date(),
      },
  ]
}