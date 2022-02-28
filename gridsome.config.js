// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');
const moment = require('moment');
const slugify = require('slugify');
const todaysDate = new Date();

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/_init.scss'),
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

    // if (isServer) {
    //   config.externals([/^(vue|vue-router|vue-meta)$/])
    // }
  },
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/_init.scss";',
      }
    }
  },
  configureWebpack: {
    // For some reason a syntax error was being thrown in production (npm run build),
    // but not in `gridsome develop`. Commenting out the below line fixed this
    //devtool: 'source-map'
  },
  templates: {
    Post: [
      {
        path: (node) => {
          return `/posts/${ node.Slug || (Object.keys(node).includes("Title") ? slugify(node.Title, {lower:true}) : node.id) }/`
        }
      }
    ],
    Event: [
      {
        path: (node) => {
          return `/event/${ slugify(node.summary, {lower:true}) }-${ moment(node.start.date).format("DD-MMM-YYYY") }`
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
            name: "tbl4GGSoSFOaVk8sX",
            typeName: "Post",
            // select: {
            //   view: "viwRHmMkXFg7jvfRB"
            // }
          }
        ]
      }
    },
    {
      use: '@jammeryhq/gridsome-source-google-calendar',
      options: {
        calendarId: 'qiepirosdns1a1fetqr9i5j8vg@group.calendar.google.com',
        apiKey: process.env.GCAL_API_KEY,
        typeName: 'Event',
        includeRecurringEvents: true,
        includeRaw: true,
        apiParams: {
          timeMin: todaysDate.toISOString(),
          timeMax: new Date(todaysDate.getTime() + (1000*60*60*24*365.25)).toISOString()
        }
      }
    }
  ]
}
