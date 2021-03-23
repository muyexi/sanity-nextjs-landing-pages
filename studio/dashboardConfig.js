export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6059624be095512dfa2a6a41',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ffp1aysa',
                  apiId: '8e061a28-5867-4954-9ed4-83f85178f9f3'
                },
                {
                  buildHookId: '6059624bd2b58e3f7656c140',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nzej6y8y',
                  apiId: 'dace4eeb-432c-4cbb-b6fe-dc51d186c31d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muyexi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nzej6y8y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
