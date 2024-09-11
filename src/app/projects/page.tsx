import { type Metadata } from 'next'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import React from 'react'

const projects = [
  {
    name: 'Cracklez',
    description: `Curatorial project and display of Cracklez's artworks over time. `,
    technologies: 'NextJS, Strapi Headless CMS, SCSS, Vercel',
    link: { href: 'https://www.cracklez.work/', label: 'cracklez.work' },
  },
  {
    name: 'Romania Online',
    description:
      'Online Radio for the community of Romanian citizens in United Kingdom. This website is an extension of a cross-platform mobile application',
    link: {
      href: 'https://www.romaniaonline.net/',
      label: 'romaniaonline.net',
    },
    technologies: 'NextJS, Sanity, NodeJS, Tailwind, Vercel',
  },
  {
    name: 'Bloom Event',
    description:
      'This project aims to support and promote women in the music industry through diverse and accessible means to anyone who wants to work in this field, no matter what job they dream of.',
    link: { href: 'https://bloomevnt.com/', label: 'bloomevnt.com' },
    technologies: 'NextJS, Directus Headless CMS, NodeJS,SCSS, Vercel',
  },
  {
    name: 'Andrei Albu',
    description:
      'Personal portfolio website for Graphic Designer Andrei Albu. This website aims to focus on server side rendered content and the ease of generating content by inserting data into the database.',
    link: { href: 'https://www.andreialbu.work/', label: 'andreialbu.work' },
    technologies: 'NextJS, Strapi Headless CMS, SCSS, Vercel',
  },
  {
    name: 'Cosmin Andrei Bala',
    description:
      'Portfolio - typography, animations and graphic designer Cosmin Andrei Bala',
    link: { href: 'https://bacosmin.com/', label: 'bacosmin.com' },
    technologies: 'NextJS, Directus, SCSS, Vercel',
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {<h1>{project.name.substring(0, 1)}</h1>}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <Card.Technologies>{project.technologies}</Card.Technologies>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon target="_blank" className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
