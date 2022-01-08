// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_init.scss'),
      ],
    })
}

module.exports = {
  siteName: 'York PSC',
  chainWebpack (config, { isServer }) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })

    if (isServer) {
      config.externals([/^(vue|vue-router|vue-meta)$/])
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  templates: {
    Post: [
      {
        path: (node) => {
          return `/posts/${ node.Slug || node.Title || node.id }/`
        }
      }
    ]
  },
  plugins: [
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
          accessToken: process.env.STORYBLOK_TOKEN
        },
        version: process.env.STORYBLOK_VERSION || "published",
        types: {
          story: {
            typeName: 'StoryblokEntry'
          }
        }
      }
    },
    {
      use: "@gridsome/source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        base: process.env.AIRTABLE_BASE_ID,
        tables: [
          {
            name: "tblT7UPLvKJu7HewD",
            typeName: "faq",
            select: {
              view: "viwFPf5SFTFAGzkLj"
            }
          },
          {
            name: "tbl0Jl6KseTM5QRcC",
            typeName: "Resource",
            select: {
              view: "viw6yfXWXjF8Et25G"
            }
          },
          {
            name: "tblqE2Wwn2uTCYl6e",
            typeName: "Post",
            select: {
              view: "viwRHmMkXFg7jvfRB"
            }
          }
        ]
      }
    }
  ]
}
